import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import MainLayout from "@/layouts/main-layout/main.layout";
import { getTheme } from "@/lib/theme";
import { DEFAULT_THEME } from "@/core/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alicia Fernandez | Frontend Developer",
  description: "React · Typescript",

  icons: {
    icon: "./favicon.svg",
  },

  openGraph: {
    title: "Alicia Fernandez | Frontend Developer",
    description:
      "Frontend Developer specialized in React, Next.js, and modern web experiences",
    //url: "https://domaino.com",
    siteName: "Alicia Fernandez Portfolio",
    /*  images: [
      {
        url: "https://domain/preview.png",
        width: 1200,
        height: 630,
      },
    ], */
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('theme='))
                    ?.split('=')[1] || '${DEFAULT_THEME}';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
