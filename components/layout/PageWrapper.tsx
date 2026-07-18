import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function PageWrapper({
  children,
  className,
  narrow = false,
}: PageWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </main>
  );
}
