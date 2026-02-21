import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the type for our enrollment data
interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  language: string;
  level: string;
  learningMode: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, language, level, learningMode, message }: EnrollmentData = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !language || !level || !learningMode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    // Check if email configuration exists
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration. Please check .env.local file.');
      console.error('SMTP_HOST:', smtpHost ? '✓' : '✗');
      console.error('SMTP_USER:', smtpUser ? '✓' : '✗');
      console.error('SMTP_PASS:', smtpPass ? '✓' : '✗');
      
      // Return success anyway in development if no config
      if (process.env.NODE_ENV === 'development') {
        console.log('⚠️ Development mode: Email not sent (no SMTP config)');
        console.log('📧 Enrollment data received:', { name, email, language, level, learningMode });
        return NextResponse.json({
          message: 'Enrollment request received successfully (development mode - email not sent)',
          warning: 'Configure SMTP in .env.local to receive email notifications'
        });
      }
      
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('✓ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('✗ SMTP verification failed:', verifyError);
      throw new Error('SMTP connection failed. Check your credentials.');
    }

    // Prepare email content
    const mailOptions = {
      from: `"Wortweit Zentrum" <${smtpUser}>`,
      to: recipientEmail || smtpUser,
      subject: `🎓 New Enrollment: ${language} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #c9a962; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { color: #333; }
              .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎓 New Enrollment Request</h1>
                <p>Wortweit Zentrum</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Student Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Course Interest:</div>
                  <div class="value"><strong>${language}</strong> (${level})</div>
                </div>
                <div class="field">
                  <div class="label">Learning Mode:</div>
                  <div class="value">${learningMode.charAt(0).toUpperCase() + learningMode.slice(1)}</div>
                </div>
                ${message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                ` : ''}
                <hr style="border: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #888; font-size: 12px;">
                  This enrollment was submitted through the Wortweit Zentrum website.
                  <br>Contact the student to confirm their enrollment.
                </p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Wortweit Zentrum. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Enrollment Request - Wortweit Zentrum
        ========================================
        
        Student Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${language} (${level})
        Learning Mode: ${learningMode}
        ${message ? `\nMessage: ${message}\n` : ''}
        
        ---
        This enrollment was submitted through the Wortweit Zentrum website.
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✓ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({
      message: 'Enrollment request received successfully! We will contact you soon.',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ Enrollment error:', error);
    console.error('Error details:', error instanceof Error ? error.message : error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process enrollment. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
