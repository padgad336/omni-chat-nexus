
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * @param {...string} inputs - Class names to combine
 * @returns {string} - Combined class name string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
