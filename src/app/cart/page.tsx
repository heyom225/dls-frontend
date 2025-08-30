"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { products } from '@/lib/data';
import { MinusCircle, PlusCircle, Trash2, Gift } from 'lucide-react';

// Mock cart data
const cartItems = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 2 },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = subtotal > 100 ? 0 : 15;
const total = subtotal + shipping;

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Shopping Cart</h1>
        <p className="mt-2 text-lg text-foreground/80">Your gateway to the future. Review your items.</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] hidden md:table-cell">Product</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map(item => (
                      <TableRow key={item.id}>
                        <TableCell className="hidden md:table-cell">
                          <Image src={item.images[0]} alt={item.name} data-ai-hint={item.dataAiHint} width={80} height={80} className="rounded-md object-cover" />
                        </TableCell>
                        <TableCell>
                          <Link href={`/products/${item.id}`} className="font-medium hover:text-primary">{item.name}</Link>
                          <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="ghost" size="icon" className="h-7 w-7"><MinusCircle className="h-4 w-4" /></Button>
                            <span>{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-7 w-7"><PlusCircle className="h-4 w-4" /></Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-7 w-7">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
                </div>
                 <div className="flex justify-between border-t pt-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button size="lg" className="w-full text-lg">Proceed to Checkout</Button>
                <p className="text-xs text-muted-foreground text-center">Shipping and taxes calculated at checkout.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-card rounded-lg flex flex-col items-center">
            <Gift className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">Your Cart is Empty</h3>
            <p className="text-muted-foreground mt-2 mb-6">Fill it with wonders from our collection.</p>
            <Button asChild>
                <Link href="/products">Start Shopping</Link>
            </Button>
        </div>
      )}
    </div>
  );
}
