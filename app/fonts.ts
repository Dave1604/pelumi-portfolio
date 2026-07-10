import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";

export const serif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
