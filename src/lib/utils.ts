import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface Data {
  height: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAlreadySorted(data: Data[]) {
  return data.every((val, i, arr) => i === 0 || arr[i - 1].height <= val.height)
}
