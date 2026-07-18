import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";

export default function MarketLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="flex gap-2 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-32 rounded-lg" />
          ))}
        </div>
        {/* Table skeleton */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30">
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-4 border-b border-border last:border-0">
              <div className="grid grid-cols-7 gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0" />
                  <Skeleton className="h-4 w-24" />
                </div>
                {Array.from({ length: 6 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-full rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
