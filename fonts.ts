import { DM_Sans, Plus_Jakarta_Sans, Rubik } from "next/font/google";

export const dm_sans = DM_Sans({
  display: "swap",
  variable: "--font-dmsans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const rubik = Rubik({
  display: "swap",
  variable: "--font-rubik",
  weight: ["400", "500"],
  subsets: ["latin"],
});
