import { NutritionSummary } from '../types';

export const mockNutritionData: NutritionSummary = {
  calories: 240,
  macros: {
    carbs: 37,
    protein: 8,
    fat: 5,
  },
  nutritionFacts: [
    { name: 'Total Lemak', value: '5', unit: 'g', dailyValue: 6 },
    { name: 'Lemak Jenuh', value: '2', unit: 'g', dailyValue: 10 },
    { name: 'Lemak Trans', value: '0', unit: 'g' },
    { name: 'Kolesterol', value: '5', unit: 'mg', dailyValue: 2 },
    { name: 'Natrium', value: '430', unit: 'mg', dailyValue: 19 },
    { name: 'Total Karbohidrat', value: '37', unit: 'g', dailyValue: 13 },
    { name: 'Serat Pangan', value: '4', unit: 'g', dailyValue: 14 },
    { name: 'Total Gula', value: '1', unit: 'g' },
    { name: 'Termasuk Gula Tambahan', value: '0', unit: 'g', dailyValue: 0 },
    { name: 'Protein', value: '8', unit: 'g', dailyValue: 16 },
    { name: 'Vitamin D', value: '0', unit: 'mcg', dailyValue: 0 },
    { name: 'Kalsium', value: '200', unit: 'mg', dailyValue: 15 },
    { name: 'Zat Besi', value: '6', unit: 'mg', dailyValue: 35 },
    { name: 'Kalium', value: '235', unit: 'mg', dailyValue: 6 },
  ],
};

export const mockOCRText = `
Informasi Nilai Gizi
Ukuran Sajian 1 mangkok (228g)
Jumlah Sajian Per Kemasan sekitar 2

Jumlah Per Sajian
Kalori 240       Kalori dari Lemak 45

% AKG*
Total Lemak 5g             6%
  Lemak Jenuh 2g          10%
  Lemak Trans 0g
Kolesterol 5mg             2%
Natrium 430mg            19%
Total Karbohidrat 37g     13%
  Serat Pangan 4g         14%
  Total Gula 1g
    Termasuk 0g Gula Tambahan  0%
Protein 8g                16%

Vitamin D 0mcg             0%
Kalsium 200mg            15%
Zat Besi 6mg             35%
Kalium 235mg              6%

* Persen AKG berdasarkan kebutuhan energi 2.000 kkal
`;