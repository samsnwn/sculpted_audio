import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "@/components/Header";
import { cn } from "@/utils/cn";
import { gtPressura } from "./styles/fonts";
import Footer from "@/app/sections/Footer";

export const metadata: Metadata = {
  title: "Sculpted Audio",
  description: "Sculpted Audio",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }, // Fallback .ico file
      { url: "/favicon.png", type: "image/png" }, 
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-black lg:mx-auto w-full",
          gtPressura.className
        )}
        id="home"
      >
        <Header />
        <main className="flex flex-col h-full overflow-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
