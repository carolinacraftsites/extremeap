// Shared TypeScript types for the application

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address?: string;
  hours?: string;
}
