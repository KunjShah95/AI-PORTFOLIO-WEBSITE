import { ResumeData, ResumeSection } from '../types/resume';

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  skills: [],
  projects: [],
  experience: [],
};

export function validateResumeData(data: Partial<ResumeData>): boolean {
  const { personalInfo } = data;
  if (!personalInfo) return false;
  
  const requiredFields = ['name', 'email', 'summary'];
  return requiredFields.every(field => 
    personalInfo[field as keyof typeof personalInfo]?.trim()
  );
}

export function filterResumeData(data: ResumeData, selectedSections: string[]): Partial<ResumeData> {
  const filtered: Partial<ResumeData> = {
    personalInfo: data.personalInfo,
  };

  selectedSections.forEach(section => {
    if (section in data) {
      filtered[section as keyof ResumeData] = data[section as keyof ResumeData];
    }
  });

  return filtered;
}