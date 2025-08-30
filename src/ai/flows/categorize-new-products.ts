'use server';
/**
 * @fileOverview AI-powered product category suggestion flow.
 *
 * - suggestCategory - A function that suggests a category for a new product.
 * - SuggestCategoryInput - The input type for the suggestCategory function.
 * - SuggestCategoryOutput - The return type for the suggestCategory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCategoryInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
});
export type SuggestCategoryInput = z.infer<typeof SuggestCategoryInputSchema>;

const SuggestCategoryOutputSchema = z.object({
  suggestedCategory: z
    .string()
    .describe(
      'The AI-suggested category for the product, chosen from: IoT Gadgets, Home Automation Devices, Macropads, Mini Electric Screwdrivers, Smart Tools.'
    ),
  confidenceScore: z
    .number()
    .min(0)
    .max(1)
    .describe(
      'A score between 0 and 1 indicating the confidence level of the category suggestion.'
    ),
});
export type SuggestCategoryOutput = z.infer<typeof SuggestCategoryOutputSchema>;

export async function suggestCategory(input: SuggestCategoryInput): Promise<SuggestCategoryOutput> {
  return suggestCategoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCategoryPrompt',
  input: {schema: SuggestCategoryInputSchema},
  output: {schema: SuggestCategoryOutputSchema},
  prompt: `You are an AI product categorization expert for an e-commerce website called Techtonic Edge, which sells IoT gadgets, home automation devices, macropads, mini electric screwdrivers, and other smart tools.

  Given the following product name and description, suggest the most appropriate category for the product. You must pick one of the following categories:
  - IoT Gadgets
  - Home Automation Devices
  - Macropads
  - Mini Electric Screwdrivers
  - Smart Tools

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}

  In addition to the category, also provide a confidence score between 0 and 1 indicating how confident you are in the suggestion.
  `,
});

const suggestCategoryFlow = ai.defineFlow(
  {
    name: 'suggestCategoryFlow',
    inputSchema: SuggestCategoryInputSchema,
    outputSchema: SuggestCategoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
