import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeSlug(slug: string) {
  if (typeof slug !== "string") return "";
  try {
    return decodeURIComponent(slug).trim();
  } catch {
    return slug.trim();
  }
}
