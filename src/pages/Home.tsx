import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import OCRResults from '../components/OCRResults';
import NutritionSummary from '../components/NutritionSummary';
import { OCRResult } from '../types';
import { mockOCRText, mockNutritionData } from '../utils/mockData';

const Home: React.FC = () => {
  const [result, setResult] = useState<OCRResult>({
    text: null,
    nutritionSummary: null,
    isLoading: false,
    error: null,
  });

  const handleFileSelected = async (file: File) => {
    setResult({
      text: null,
      nutritionSummary: null,
      isLoading: true,
      error: null,
    });
    
    setTimeout(() => {
      setResult({
        text: mockOCRText,
        nutritionSummary: mockNutritionData,
        isLoading: false,
        error: null,
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto mb-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Pemindai Informasi Gizi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Unggah gambar label gizi dan kami akan mengekstrak informasinya untuk Anda.
            AI kami akan menganalisis label dan memberikan rincian lengkap kandungan gizinya.
          </p>
        </div>

        <FileUpload 
          onFileSelected={handleFileSelected} 
          isProcessing={result.isLoading} 
        />
      </section>

      {(result.text || result.isLoading) && (
        <section className="max-w-4xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OCRResults 
            text={result.text} 
            isLoading={result.isLoading} 
          />
          <NutritionSummary 
            data={result.nutritionSummary} 
            isLoading={result.isLoading} 
          />
        </section>
      )}
    </div>
  );
};

export default Home