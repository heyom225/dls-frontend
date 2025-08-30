import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M2 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 7L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <span className="font-headline text-xl font-bold tracking-tight">Techtonic Edge</span>
    </div>
  );
}
