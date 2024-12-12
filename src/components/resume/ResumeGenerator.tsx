import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import { ResumeData, ResumeSection } from '../../types/resume';
import { useAnalytics } from '../../hooks/useAnalytics';
import { generatePDF } from '../../utils/pdfGenerator';

export function ResumeGenerator() {
  const { trackInteraction } = useAnalytics();
  const [sections, setSections] = useState<ResumeSection[]>([
    { id: 'skills', title: 'Skills', selected: true },
    { id: 'projects', title: 'Projects', selected: true },
    { id: 'experience', title: 'Experience', selected: true },
  ]);

  const toggleSection = (id: string) => {
    setSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, selected: !section.selected } : section
      )
    );
    trackInteraction('click', `resume_section_${id}`);
  };

  const handleGenerate = async () => {
    trackInteraction('resume', 'generate');
    const selectedSections = sections.filter(s => s.selected).map(s => s.id);
    const pdf = await generatePDF(selectedSections);
    // Handle PDF download
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <h3 className="text-xl font-semibold">Customize Your Resume</h3>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          Select the sections you want to include in your resume:
        </p>
        <div className="flex flex-wrap gap-3">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                section.selected
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleGenerate}
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <FileDown size={20} />
        Generate Resume
      </button>
    </div>
  );
}