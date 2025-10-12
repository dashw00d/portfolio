import React, { ReactNode } from 'react';

export interface CategorySectionProps {
  title: string;
  subtitle: string;
  accentColor?: string;
  children: ReactNode;
  integrations?: string;
  roi?: string;
  buildEffort?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  subtitle,
  accentColor = '#1e493d',
  children,
  integrations,
  roi,
  buildEffort
}) => {
  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="mb-6">
        <div
          className="inline-block px-4 py-2 rounded-full text-white font-semibold mb-2"
          style={{ backgroundColor: accentColor }}
        >
          {title}
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 italic text-lg">
          "{subtitle}"
        </p>

        {/* Meta Info */}
        {(integrations || roi || buildEffort) && (
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            {integrations && (
              <span>📍 <strong>Integrations:</strong> {integrations}</span>
            )}
            {roi && (
              <span>🟢 <strong>ROI:</strong> {roi}</span>
            )}
            {buildEffort && (
              <span><strong>Build Effort:</strong> {buildEffort}</span>
            )}
          </div>
        )}
      </div>

      {/* Automation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
