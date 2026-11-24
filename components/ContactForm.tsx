'use client';

import React, { useState, useEffect } from 'react';
import { ContactFormErrors, ContactFormValues } from '@/lib/types';
import { validateContactForm } from '@/lib/validation';

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  subject: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      console.log('Contact form submitted:', values);
      setSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch (error) {
      console.error('Failed to send contact form:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className='mt-6 space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm'>
      {submitted && (
        <div
          role='status'
          className='rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800'>
          <strong className='flex flex-col text-center text-xl'>
            Thank you!
          </strong>
          <br />
          Your message has been sent. We will be in touch as soon as
          possible—within 3 days at the latest.
        </div>
      )}

      <div>
        <label
          htmlFor='fullName'
          className='block text-sm font-semibold text-slate-900'>
          Full Name
        </label>
        <input
          id='fullName'
          type='text'
          value={values.fullName}
          onChange={(e) => setValues({ ...values, fullName: e.target.value })}
          aria-invalid={Boolean(errors.fullName)}
          className='mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none'
        />
        {errors.fullName && (
          <p className='mt-1 text-xs font-medium text-rose-600'>
            {errors.fullName}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor='subject'
          className='block text-sm font-semibold text-slate-900'>
          Subject
        </label>
        <input
          id='subject'
          type='text'
          value={values.subject}
          onChange={(e) => setValues({ ...values, subject: e.target.value })}
          aria-invalid={Boolean(errors.subject)}
          className='mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none'
        />
        {errors.subject && (
          <p className='mt-1 text-xs font-medium text-rose-600'>
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-semibold text-slate-900'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          aria-invalid={Boolean(errors.email)}
          className='mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none'
        />
        {errors.email && (
          <p className='mt-1 text-xs font-medium text-rose-600'>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-semibold text-slate-900'>
          Message
        </label>
        <textarea
          id='message'
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={Boolean(errors.message)}
          className='mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none'
        />
        {errors.message && (
          <p className='mt-1 text-xs font-medium text-rose-600'>
            {errors.message}
          </p>
        )}
      </div>
      <button
        type='submit'
        disabled={sending}
        className='w-full cursor-pointer rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400'>
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
