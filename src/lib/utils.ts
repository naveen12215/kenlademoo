import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeSlug(slug: string): string | null {
  if (typeof slug !== "string" || slug.trim() === "") return null;
  try {
    const decoded = decodeURIComponent(slug).trim();
    return decoded === "" ? null : decoded;
  } catch {
    const fallback = slug.trim();
    return fallback === "" ? null : fallback;
  }
}
