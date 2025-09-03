import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ShoppingCart } from 'lucide-react';

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const isOutOfStock = product.stockCount === 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
               <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative">
                        <Image
                          src={src}
                          alt={`${product.name} - image ${index + 1}`}
                          data-ai-hint={product.dataAiHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-2">
            <Badge variant="secondary">{product.category}</Badge>
            <Badge variant={isOutOfStock ? 'destructive' : 'default'}>
              {isOutOfStock ? 'Out of Stock' : 'In Stock'}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary mb-6">₹{product.price.toFixed(2)}</p>
          
          <p className="text-lg text-foreground/80 mb-6">{product.longDescription}</p>

          <Button 
            size="lg" 
            className="w-full md:w-auto text-lg"
            disabled={isOutOfStock}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>

          <div className="mt-10">
            <h2 className="text-2xl font-headline font-semibold mb-4">Specifications</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableBody>
                    {product.specs.map(spec => (
                      <TableRow key={spec.name}>
                        <TableCell className="font-medium">{spec.name}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
