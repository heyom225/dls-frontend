import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Domestic Labs Insights</h1>
        <p className="mt-2 text-lg text-foreground/80">News, tutorials, and tips from the edge of technology.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Card key={post.slug} className="flex flex-col bg-card hover:border-primary transition-all duration-300">
            <CardHeader className="p-0">
               <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.dataAiHint}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
               </Link>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <div className="mb-2">
                <Badge variant="outline">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
              </div>
              <CardTitle className="font-headline text-2xl leading-tight mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="link" className="p-0">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
