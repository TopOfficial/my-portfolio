import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Suriya Chaubey — AI/ML & Data Engineer",
  description:
    "AI/ML and Data Engineer with hands-on experience building LLM-based systems, NLP pipelines, RAG architectures, and end-to-end data pipelines. Award-winning at IFTH BE Symposium 2025.",
  openGraph: {
    title: "Suriya Chaubey — AI/ML & Data Engineer",
    description:
      "AI/ML and Data Engineer with hands-on experience building LLM systems, RAG architectures, and data pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[--background] text-[--foreground] font-sans">
        {children}
      </body>
    </html>
  );
}
