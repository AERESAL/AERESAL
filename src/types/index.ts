export interface Project {
  id: string;
  name: string;
  link: string;
  preview?: string;
  fallbackPreviews?: string[];
  description?: string;
  title?: string;
}

export interface ContactLink {
  id: string;
  type: 'email' | 'instagram' | 'github' | 'linkedin' | 'twitter' | 'tiktok';
  label: string;
  url: string;
}
