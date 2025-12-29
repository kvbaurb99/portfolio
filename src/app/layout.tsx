import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jakub Urbański | Front-End Developer",
  description:
    "Portfolio Front-End Developera specjalizującego się w React i Next.js. Tworzę nowoczesne, responsywne i wydajne aplikacje webowe.",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Jakub Urbański",
  ],
  authors: [{ name: "Jakub Urbański" }],
  openGraph: {
    title: "Jakub Urbański | Front-End Developer",
    description:
      "Portfolio Front-End Developera specjalizującego się w React i Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
