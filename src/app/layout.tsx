import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Meu Portifólio",
  description: "meu primeiro portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={twMerge(
          inter.variable,
          poppins.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <div className="relative h-screen">
          {}
          <StarsBackground className="z-0" />
          <ShootingStars className="z-0" />
          {}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
