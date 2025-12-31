import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SchemaJsonLD } from "@/seo";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ["monospace", "Courier New"],
  adjustFontFallback: true,
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
    "strony internetowe",
    "Jakub Urbański",
    "bielsko biała",
    "bielsko biala",
    "polska",
    "Programista",
  ],
  authors: [{ name: "Jakub Urbański" }],
  openGraph: {
    title: "Jakub Urbański | Front-End Developer",
    description:
      "Portfolio Front-End Developera specjalizującego się w React i Next.js.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="-pjPr6VbbsPnN41MFojOfpUmDguiWvGxCHEvwF2VU3g"
        />
        <SchemaJsonLD />
      </head>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
