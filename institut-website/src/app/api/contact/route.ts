import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the type for our contact data
interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message }: ContactData = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
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
      
      // Return success anyway in development if no config
      if (process.env.NODE_ENV === 'development') {
        console.log('⚠️ Development mode: Email not sent (no SMTP config)');
        console.log('📧 Contact form data received:', { firstName, lastName, email, subject, message });
        return NextResponse.json({
          message: 'Message received successfully (development mode - email not sent)',
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
      from: `"Wortweit Zentrum Contact" <${smtpUser}>`,
      to: recipientEmail || smtpUser,
      replyTo: email,
      subject: `📩 Contact Form: ${subject} - ${firstName} ${lastName}`,
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
              .message { background: white; padding: 15px; border-left: 4px solid #c9a962; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📩 New Contact Form Submission</h1>
                <p>Wortweit Zentrum</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${firstName} ${lastName}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="message">
                  <div class="label">Message:</div>
                  <div class="value" style="margin-top: 10px;">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <hr style="border: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #888; font-size: 12px;">
                  Reply to this email to contact ${firstName} ${lastName} directly.
                  <br>This message was sent from the Wortweit Zentrum contact form.
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
        New Contact Form Submission - Wortweit Zentrum
        ==============================================
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        --------
        ${message}
        
        ---
        Reply to this email to contact ${firstName} ${lastName} directly.
        This message was sent from the Wortweit Zentrum contact form.
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✓ Contact form email sent successfully!');
    console.log('📧 Message ID:', info.messageId);

    return NextResponse.json({
      message: 'Thank you! Your message has been sent successfully. We will respond within 24 hours.'
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    console.error('Error details:', error instanceof Error ? error.message : error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly at wortweitzentrum@gmail.com',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
