import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import { cn } from "@/utils/cn";
import { prGrotesk, gtPressura, gtPressuraMono } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Sculpted Audio",
  description: "Sculpted Audio",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // Fallback .ico file
      { url: '/favicon.png', type: 'image/png' },    // Your PNG file
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-black lg:mx-auto w-full max-w-[1880px]",
          gtPressura.className
        )}
      >
        <Header />
        <main className="flex flex-col p-2 md:p-4 h-full">{children}</main>
      </body>
    </html>
  );
}
