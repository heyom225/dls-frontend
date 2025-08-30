import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full group bg-card hover:border-primary transition-all duration-300">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block aspect-square relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            data-ai-hint={product.dataAiHint}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <CardTitle className="text-lg font-headline leading-tight">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
              {product.name}
            </Link>
          </CardTitle>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-xl font-semibold">₹{product.price.toFixed(2)}</p>
        <Button asChild size="sm">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
