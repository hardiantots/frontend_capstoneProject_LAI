import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';

interface OCRResultsProps {
  text: string | null;
  isLoading: boolean;
}

const OCRResults: React.FC<OCRResultsProps> = ({ text, isLoading }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hasil Teks OCR</h3>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!text) {
    return null;
  }

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hasil Teks OCR</h3>
        </div>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1.5 text-green-500" />
              <span className="text-green-500">Tersalin</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1.5" />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 max-h-60 overflow-y-auto font-mono text-sm whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
};

export default OCRResults