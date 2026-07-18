import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";

export default function ResultsLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: role cards */}
          <div className="lg:col-span-2 space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start gap-4 mb-4">
                  <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-3 w-72" />
                  </div>
                  <Skeleton className="h-8 w-16 rounded-full flex-shrink-0" />
                </div>
                <Skeleton className="h-2 w-full rounded-full mb-3" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-28 rounded-full" />
                </div>
              </div>
            ))}
          </div>
          {/* Right: radar chart + dimensions */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Skeleton className="h-5 w-36 mb-4" />
              <Skeleton className="h-56 w-full rounded-xl" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
              <Skeleton className="h-5 w-40 mb-2" />
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <Skeleton className="h-1.5 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
