
export interface Project {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  technicalDetails?: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}
