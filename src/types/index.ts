export interface Project {
  id: string;
  name: string;
  link: string;
  preview?: string;
  fallbackPreviews?: string[];
  description?: string;
  title?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'finished' | 'in-progress';
  image?: string;
  link?: string;
}

export interface Experience {
  id: string;
  position: string;
  company?: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
}

export interface ContactLink {
  id: string;
  type: 'email' | 'instagram' | 'github' | 'linkedin' | 'twitter' | 'tiktok';
  label: string;
  url: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
}
