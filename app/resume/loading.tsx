import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";

export default function ResumeLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-56 mb-2" />
          <Skeleton className="h-4 w-80" />
        </div>
        {/* Upload zone */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-dashed border-border p-12 flex flex-col items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-3 w-36" />
          </div>
          <div className="mt-6 flex justify-center">
            <Skeleton className="h-11 w-48 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
