export interface ResumeSection {
  id: string;
  title: string;
  selected: boolean;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  skills: string[];
  projects: string[];
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
}