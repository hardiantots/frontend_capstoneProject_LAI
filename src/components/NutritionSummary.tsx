import React from 'react';
import { NutritionSummary as NutritionSummaryType } from '../types';
import { PieChart, ActivitySquare } from 'lucide-react';
import MacroChart from './MacroChart';

interface NutritionSummaryProps {
  data: NutritionSummaryType | null;
  isLoading: boolean;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <PieChart className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ringkasan Gizi</h3>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-3 mb-6">
        <PieChart className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ringkasan Gizi</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg text-center">
          <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-1">Kalori</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{data.calories}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">kkal per sajian</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <p className="text-sm text-blue-800 dark:text-blue-300 mb-1">Karbohidrat</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{data.macros.carbs}g</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">per sajian</p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
          <p className="text-sm text-red-800 dark:text-red-300 mb-1">Lemak</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{data.macros.fat}g</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">per sajian</p>
        </div>
      </div>

      <div className="mb-8">
        <MacroChart 
          carbs={data.macros.carbs} 
          protein={data.macros.protein} 
          fat={data.macros.fat} 
        />
      </div>

      <div>
        <div className="flex items-center mb-4">
          <ActivitySquare className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mr-2" />
          <h4 className="text-base font-medium text-gray-900 dark:text-white">Informasi Gizi</h4>
        </div>
        
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 space-y-2">
          {data.nutritionFacts.map((fact, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">{fact.name}</span>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 dark:text-white mr-2">
                  {fact.value}{fact.unit}
                </span>
                {fact.dailyValue !== undefined && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                    {fact.dailyValue}% AKG
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionSummary