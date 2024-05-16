import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Combines classnames with tailwindcss and handles conflicts (last one wins)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Creates a slug from a string
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "")
}