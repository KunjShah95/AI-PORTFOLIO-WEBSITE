import { useState, useCallback } from 'react';
import { ResumeData, ResumeSection } from '../types/resume';
import { defaultResumeData, validateResumeData, filterResumeData } from '../utils/resume';
import { useAnalytics } from './useAnalytics';

export function useResume() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedSections, setSelectedSections] = useState<string[]>(['skills', 'projects', 'experience']);
  const { trackInteraction } = useAnalytics();

  const updateResumeData = useCallback((data: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...data }));
    trackInteraction('resume', 'update_data');
  }, [trackInteraction]);

  const toggleSection = useCallback((sectionId: string) => {
    setSelectedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
    trackInteraction('resume', `toggle_section_${sectionId}`);
  }, [trackInteraction]);

  const generateResume = useCallback(async () => {
    if (!validateResumeData(resumeData)) {
      throw new Error('Required resume data is missing');
    }

    const filteredData = filterResumeData(resumeData, selectedSections);
    trackInteraction('resume', 'generate');
    return filteredData;
  }, [resumeData, selectedSections, trackInteraction]);

  return {
    resumeData,
    selectedSections,
    updateResumeData,
    toggleSection,
    generateResume,
  };
}