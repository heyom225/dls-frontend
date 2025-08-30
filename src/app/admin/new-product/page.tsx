"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleSuggestCategory } from "./actions";
import type { SuggestCategoryOutput } from "@/ai/flows/categorize-new-products";
import { Sparkles, Bot, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  productName: z.string().min(2, { message: "Product name must be at least 2 characters." }),
  productDescription: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

export default function NewProductAdminPage() {
  const { toast } = useToast();
  const [suggestion, setSuggestion] = useState<SuggestCategoryOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSuggestion(null);
    const result = await handleSuggestCategory(values);
    if (result.suggestion) {
      setSuggestion(result.suggestion);
      toast({
        title: "Category Suggestion Ready",
        description: "AI has analyzed the product details.",
      });
    } else {
      toast({
        title: "Error",
        description: result.error || "An unknown error occurred.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold flex items-center justify-center gap-4">
          <Sparkles className="text-primary" /> AI Product Categorization
        </h1>
        <p className="mt-2 text-lg text-foreground/80">Enter new product details to get an AI-powered category suggestion.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">New Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., QuantumDrive Screwdriver" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the product's features and benefits..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Analyzing..." : "Suggest Category"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="sticky top-24 h-fit">
            <Card className="bg-card">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><Bot /> AI Suggestion</CardTitle>
                    <CardDescription>The suggested category will appear here for your review.</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[200px] flex items-center justify-center">
                    {form.formState.isSubmitting ? (
                        <div className="text-center">
                            <Sparkles className="h-10 w-10 text-primary mx-auto animate-pulse" />
                            <p className="mt-2 text-muted-foreground">AI is thinking...</p>
                        </div>
                    ) : suggestion ? (
                        <div className="w-full space-y-4 text-center">
                            <p className="text-muted-foreground">Suggested Category:</p>
                            <h3 className="text-3xl font-bold font-headline text-primary">{suggestion.suggestedCategory}</h3>
                            <div className="pt-2">
                                <p className="text-sm text-muted-foreground mb-2">Confidence Score:</p>
                                <Progress value={suggestion.confidenceScore * 100} className="w-full" />
                                <p className="text-lg font-semibold mt-1">{(suggestion.confidenceScore * 100).toFixed(1)}%</p>
                            </div>
                            <div className="pt-4 flex justify-center gap-4">
                                <Button variant="default"><CheckCircle className="mr-2 h-4 w-4"/> Accept</Button>
                                <Button variant="outline">Manual Override</Button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-muted-foreground">Awaiting product details...</p>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
