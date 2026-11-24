import { ContactFormErrors, ContactFormValues } from './types';

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, including @.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}
