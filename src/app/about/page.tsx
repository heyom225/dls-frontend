import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About Techtonic Edge</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          We are a team of tech enthusiasts, designers, and engineers dedicated to bringing you the most innovative and useful gadgets on the market. We believe technology should be both powerful and accessible.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20 text-center">
        <Card className="bg-card">
          <CardHeader>
            <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            To source and create exceptionally designed, high-quality smart tools and devices that enhance everyday life and empower creators.
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
              <Rocket className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            To be at the forefront of the consumer tech revolution, making the future tangible and accessible for everyone, from hobbyists to professionals.
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            A diverse group of tinkerers, innovators, and dreamers united by a passion for technology that solves real-world problems.
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-4">From Garage Project to Global Vision</h2>
          <p className="text-foreground/80 mb-4">
            Techtonic Edge started as a passion project in a small workshop, born from a desire for better, smarter tools. We were tired of the compromise between functionality and design. Why couldn't our tools be as smart and as beautiful as the things we were creating with them?
          </p>
          <p className="text-foreground/80">
            Today, that simple idea has grown into a curated marketplace for the best IoT gadgets and smart tools from around the world. We rigorously test every product, ensuring it meets our high standards for performance, durability, and design. Welcome to the edge of technology.
          </p>
        </div>
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <Image
            src="https://picsum.photos/600/400"
            alt="A modern workshop with electronic components"
            data-ai-hint="modern workshop"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
