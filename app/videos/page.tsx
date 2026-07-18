"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Search, Video, Info, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { VIDEOS, getFeaturedVideos, getYouTubeThumbnail } from "@/lib/data/videos";
import { ROLES } from "@/lib/data/roles";
import { cn } from "@/lib/utils";
import type { CareerVideo } from "@/lib/data/videos";

function VideoCard({ video, big = false }: { video: CareerVideo; big?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const role = ROLES.find((r) => r.id === video.roleId);
  const thumbnail =
    video.thumbnail ??
    (video.type === "youtube" ? getYouTubeThumbnail(video.src) : undefined);

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card overflow-hidden group",
        big && "lg:flex"
      )}
    >
      {/* Video / Thumbnail */}
      <div
        className={cn(
          "relative bg-muted overflow-hidden",
          big ? "lg:w-[55%] aspect-video lg:aspect-auto lg:min-h-64" : "aspect-video"
        )}
      >
        {playing && video.type === "youtube" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : playing && video.type === "local" ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            src={video.src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            controls
          />
        ) : (
          <>
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={video.type === "youtube"}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <Video className="h-12 w-12 text-primary/40" />
              </div>
            )}
            {/* Play overlay */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Play ${video.title}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg">
                <Play className="h-6 w-6 text-primary-foreground ml-1" />
              </div>
            </button>
            {/* Duration badge */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/70 px-1.5 py-0.5">
              <Clock className="h-3 w-3 text-white" />
              <span className="text-[10px] font-medium text-white">{video.duration}</span>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className={cn("p-4", big && "lg:p-6 lg:flex lg:flex-col lg:justify-center")}>
        {role && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm">{role.emoji}</span>
            <Badge variant="secondary" className="text-[10px]">
              {role.title}
            </Badge>
          </div>
        )}
        <h3 className={cn("font-semibold leading-snug mb-1.5", big ? "text-lg" : "text-sm")}>
          {video.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          {video.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        {role && big && (
          <Link href={`/roles/${role.id}`} className="mt-4 inline-flex">
            <Button size="sm" variant="outline" className="gap-1.5 text-xs">
              Explore {role.title} career
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const featured = getFeaturedVideos();
  const rolesWithVideos = Array.from(new Set(VIDEOS.map((v) => v.roleId)))
    .map((id) => ROLES.find((r) => r.id === id))
    .filter(Boolean);

  const filtered = VIDEOS.filter((v) => {
    const matchesRole = !selectedRole || v.roleId === selectedRole;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.tags.some((t) => t.includes(q));
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Play className="h-3.5 w-3.5" />
            Real people, real days
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Day in the Life Videos</h1>
          <p className="text-muted-foreground max-w-2xl">
            Watch real professionals walk through their actual workday — no scripts, no fluff.
            See what a role actually looks like before you commit to it.
          </p>
        </div>

        {/* Empty state */}
        {VIDEOS.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-border p-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mx-auto mb-6">
              <Video className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">Videos coming soon</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              We&apos;re filming day-in-the-life videos for 100+ career paths.
              Check back soon — or contribute your own story.
            </p>
            <div className="rounded-xl bg-muted/50 border border-border p-5 max-w-lg mx-auto text-left">
              <div className="flex items-start gap-3">
                <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold mb-2">How to add videos</p>
                  <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal list-inside">
                    <li>Upload your video to YouTube (unlisted or public)</li>
                    <li>
                      Copy the video ID from the URL:{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-foreground">
                        youtube.com/watch?v=<strong>VIDEO_ID</strong>
                      </code>
                    </li>
                    <li>
                      Open{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-foreground">
                        lib/data/videos.ts
                      </code>{" "}
                      and copy the template block
                    </li>
                    <li>Fill in the fields and set your YouTube video ID as <code className="bg-muted px-1 py-0.5 rounded text-foreground">src</code></li>
                    <li>Save — the video appears here instantly</li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-3">
                    For local MP4 files: place them in{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-foreground">
                      /public/videos/
                    </code>{" "}
                    and use{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-foreground">
                      type: &quot;local&quot;, src: &quot;/videos/filename.mp4&quot;
                    </code>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/roles">
                <Button variant="outline" className="gap-2">
                  Browse Career Roles Instead
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-semibold mb-4">Featured</h2>
                <div className="space-y-4">
                  {featured.slice(0, 2).map((v) => (
                    <VideoCard key={v.id} video={v} big />
                  ))}
                </div>
              </div>
            )}

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search videos…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 h-8 w-52 text-sm"
                />
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                  !selectedRole
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40"
                )}
              >
                All roles
              </button>
              {rolesWithVideos.map((role) =>
                role ? (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id === selectedRole ? null : role.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                      selectedRole === role.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    <span>{role.emoji}</span>
                    {role.title}
                  </button>
                ) : null
              )}
            </div>

            {/* Video grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground text-sm">
                No videos match your search. Try a different keyword.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            )}
          </>
        )}
      </PageWrapper>
    </div>
  );
}
