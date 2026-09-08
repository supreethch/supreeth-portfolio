import type { MetadataRoute } from "next";

const origin = "https://supreethchittaluri.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${origin}/`, changeFrequency: "monthly", priority: 1 }];
}
