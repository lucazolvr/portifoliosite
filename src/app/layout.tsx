import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
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
          calistoga.variable,
          "bg-gradient-to-br from-red-500 to-orange-500 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
