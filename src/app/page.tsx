import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products, posts } from "@/lib/data";
import { ArrowRight, Rss } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Futuristic gadgets on a dark background"
          data-ai-hint="futuristic gadgets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter">
            The Future Is In Your Hands
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Discover the next generation of smart tools and IoT devices. Techtonic Edge brings you the bleeding edge of innovation.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 flex items-center justify-center gap-4"><Rss /> From The Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col bg-background hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="aspect-video relative">
                     <Image src={post.image} alt={post.title} data-ai-hint={post.dataAiHint} fill className="rounded-t-lg object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="font-headline text-xl leading-tight mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="link" className="p-0">
                      <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">Visit The Blog</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
