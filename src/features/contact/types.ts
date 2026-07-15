export interface ContactMethod {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail';
  label: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}
