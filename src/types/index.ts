export interface NutritionFact {
  name: string;
  value: string;
  unit: string;
  dailyValue?: number;
}

export interface NutritionSummary {
  calories: number;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  nutritionFacts: NutritionFact[];
}

export interface OCRResult {
  text: string;
  nutritionSummary: NutritionSummary | null;
  isLoading: boolean;
  error: string | null;
}