/**
 * Day in the Life Videos
 *
 * HOW TO ADD A VIDEO:
 * 1. Upload your video to YouTube (unlisted or public)
 * 2. Get the YouTube video ID from the URL:
 *    youtube.com/watch?v=<VIDEO_ID>  OR  youtu.be/<VIDEO_ID>
 * 3. Add a new entry to the VIDEOS array below with type: "youtube"
 *
 * For locally hosted videos:
 * 1. Place your .mp4 file in /public/videos/  (e.g. /public/videos/pm-day.mp4)
 * 2. Add an entry with type: "local" and src: "/videos/pm-day.mp4"
 *
 * FIELDS:
 *   id          – unique slug
 *   roleId      – must match an id in roles.ts (used for cross-linking)
 *   title       – display title
 *   description – 1-2 sentence description shown under the card
 *   type        – "youtube" | "local"
 *   src         – YouTube video ID or local path (e.g. "/videos/my-video.mp4")
 *   thumbnail   – optional custom thumbnail URL; auto-generated for YouTube if omitted
 *   duration    – e.g. "8 min"
 *   tags        – searchable tags
 *   uploadedAt  – ISO date string
 *   featured    – show in "featured" section on the videos homepage
 */

export interface CareerVideo {
  id: string;
  roleId: string;
  title: string;
  description: string;
  type: "youtube" | "local";
  src: string; // YouTube video ID or local /videos/file.mp4 path
  thumbnail?: string; // optional; YouTube auto-thumbnail used if omitted
  duration: string;
  tags: string[];
  uploadedAt: string;
  featured?: boolean;
}

export const VIDEOS: CareerVideo[] = [
  // ── TEMPLATE — copy this block to add a new video ──────────────────────────
  // {
  //   id: "pm-day-in-life",
  //   roleId: "product-manager",
  //   title: "A Day in the Life of a Product Manager at a Bangalore Startup",
  //   description: "Follow a PM through standups, PRD writing, stakeholder sync, and an unplanned production incident.",
  //   type: "youtube",
  //   src: "dQw4w9WgXcQ",  // <-- replace with real YouTube video ID
  //   duration: "12 min",
  //   tags: ["product", "startup", "bangalore"],
  //   uploadedAt: "2026-04-21",
  //   featured: true,
  // },
];

export const getVideosByRole = (roleId: string): CareerVideo[] =>
  VIDEOS.filter((v) => v.roleId === roleId);

export const getFeaturedVideos = (): CareerVideo[] =>
  VIDEOS.filter((v) => v.featured);

export const getYouTubeThumbnail = (videoId: string): string =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
