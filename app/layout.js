import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Beatrice Commons | New Duplex Homes for Sale in Beatrice, Nebraska",
  description:
    "Beatrice Commons is a community of 32 new-construction duplex homes at 401 S 22nd St in Beatrice, Nebraska. Single-level living, attached garages, priced from the mid $200Ks. Join the reservation list.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
