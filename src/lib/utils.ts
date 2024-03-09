import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "F94144",
  "F3722C",
  "F8961E",
  "F9C74F",
  "90BE6D",
  "43AA8B",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId:number): string{
  return COLORS[connectionId % COLORS.length];
}