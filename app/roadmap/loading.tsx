import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";

export default function RoadmapLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-80" />
        </div>
        {/* Role selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-32 rounded-xl" />
          ))}
        </div>
        {/* Role header card */}
        <div className="rounded-2xl border border-border bg-card p-6 mb-6">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl flex-shrink-0" />
            <div className="space-y-1.5">
              <Skeleton className="h-5 w-56" />
              <Skeleton className="h-3 w-40" />
            </div>
          </div>
        </div>
        {/* Tab bar */}
        <div className="flex gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-28 rounded-lg" />
          ))}
        </div>
        {/* Week cards */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="ml-11 space-y-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-3 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
