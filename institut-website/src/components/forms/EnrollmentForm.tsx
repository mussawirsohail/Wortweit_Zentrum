'use client';

import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  language: string;
  level: string;
  learningMode: string;
  message: string;
}

interface EnrollmentFormProps {
  prefillData?: {
    language?: string;
    level?: string;
    learningMode?: string;
  };
}

const EnrollmentForm = ({ prefillData }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    language: prefillData?.language || '',
    level: prefillData?.level || '',
    learningMode: prefillData?.learningMode || 'online',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Apply prefill data when it changes
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        language: prefillData.language || prev.language,
        level: prefillData.level || prev.level,
        learningMode: prefillData.learningMode || prev.learningMode,
      }));
    }
  }, [prefillData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.language) newErrors.language = 'Please select a language';
    if (!formData.level) newErrors.level = 'Please select a level';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // In a real application, this would send data to your backend
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          language: '',
          level: '',
          learningMode: 'online',
          message: ''
        });
      } else {
        throw new Error('Failed to submit enrollment');
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      alert('There was an error submitting your enrollment. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-success/10 border border-success/30 text-success px-6 py-8 rounded-lg text-center">
        <svg className="w-12 h-12 mx-auto mb-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-medium mb-2">Thank You!</h3>
        <p className="text-sm text-muted">Your enrollment request has been submitted successfully. We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? 'border-error focus:ring-error/20' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1.5 text-xs text-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input ${errors.email ? 'border-error focus:ring-error/20' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-error">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? 'border-error focus:ring-error/20' : ''}`}
            placeholder="+1 (234) 567-8900"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-error">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="language" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Select Language *
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={`input ${errors.language ? 'border-error focus:ring-error/20' : ''}`}
          >
            <option value="">Choose a language</option>
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="turkish">Turkish</option>
            <option value="sindhi">Sindhi</option>
          </select>
          {errors.language && <p className="mt-1.5 text-xs text-error">{errors.language}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="level" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Select Level *
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className={`input ${errors.level ? 'border-error focus:ring-error/20' : ''}`}
          >
            <option value="">Choose a level</option>
            <option value="beginner">Beginner</option>
            <option value="elementary">Elementary</option>
            <option value="intermediate">Intermediate</option>
            <option value="upper-intermediate">Upper Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {errors.level && <p className="mt-1.5 text-xs text-error">{errors.level}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-3">
            Learning Mode *
          </label>
          <div className="flex gap-3">
            {['online', 'physical', 'hybrid'].map((mode) => (
              <label key={mode} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="learningMode"
                  value={mode}
                  checked={formData.learningMode === mode}
                  onChange={handleChange}
                  className="w-4 h-4 text-accent focus:ring-accent border-border rounded"
                />
                <span className="ml-2 text-sm text-muted capitalize">{mode.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
          Message / Notes
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="input resize-none"
          placeholder="Any additional information or special requirements..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
      </button>
    </form>
  );
};

export default EnrollmentForm;
