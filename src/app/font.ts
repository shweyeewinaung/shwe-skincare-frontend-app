import { Nunito, Playfair_Display, Montserrat } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});
