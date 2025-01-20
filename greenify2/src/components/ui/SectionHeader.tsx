import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;