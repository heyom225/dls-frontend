import Link from "next/link";
import { Logo } from "../icons/Logo";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0 text-foreground/80">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="GitHub"><Github className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" /></Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Domestic Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
