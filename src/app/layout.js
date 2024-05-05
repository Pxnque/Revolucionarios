import { Smythe } from "next/font/google";
import "./globals.css";

const smythe = Smythe({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Los Revolucionarios",
  description: "Restaurante 100% familiar con tematica de la Revolución Mexicana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={smythe.className}>{children}</body>
    </html>
  );
}
