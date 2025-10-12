import React from 'react';

export interface AutomationCardProps {
  icon: string;
  title: string;
  description: string;
  onPreview?: () => void;
  onAdd?: () => void;
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  icon,
  title,
  description,
  onPreview,
  onAdd
}) => {
  return (
    <div className="group relative bg-white dark:bg-forgekit-dark rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03] border border-zinc-200 dark:border-zinc-700 hover:bg-forgekit-tan/5">
      {/* Icon */}
      <div className="text-4xl mb-3" aria-hidden="true">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-forgekit-zinc dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 min-h-[2.5rem]">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPreview}
          className="flex-1 px-4 py-2 text-sm font-medium text-forgekit-green dark:text-forgekit-tan border-2 border-forgekit-green dark:border-forgekit-tan rounded-xl hover:bg-forgekit-green/5 dark:hover:bg-forgekit-tan/5 transition-colors"
        >
          Preview Flow
        </button>
        <button
          onClick={onAdd}
          className="flex-1 px-4 py-2 text-sm font-medium text-white bg-forgekit-green dark:bg-forgekit-tan dark:text-forgekit-dark rounded-xl hover:opacity-90 transition-opacity shadow-sm"
        >
          Add to App
        </button>
      </div>
    </div>
  );
};

export default AutomationCard;
