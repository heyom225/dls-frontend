"use server";

import { suggestCategory, type SuggestCategoryInput } from '@/ai/flows/categorize-new-products';

export async function handleSuggestCategory(data: SuggestCategoryInput) {
  try {
    // Add a small delay to simulate network latency and show loading state
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = await suggestCategory(data);
    return { suggestion: result };
  } catch (error) {
    console.error("Error in handleSuggestCategory:", error);
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: "An unexpected error occurred while suggesting a category." };
  }
}
