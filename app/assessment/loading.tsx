import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";

export default function AssessmentLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {/* Progress bar */}
      <div className="sticky top-14 z-40 border-b border-border/60 bg-background/95 py-3 px-4">
        <Skeleton className="h-1.5 w-full rounded-full mb-2" />
        <div className="flex gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-20 rounded-full" />
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <Skeleton className="h-10 w-10 rounded-full mx-auto mb-3" />
            <Skeleton className="h-6 w-48 mx-auto mb-2" />
            <Skeleton className="h-4 w-72 mx-auto" />
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex justify-between mb-6">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-4/5 mb-8" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-border p-4 flex items-center gap-4">
                  <Skeleton className="h-9 w-9 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
