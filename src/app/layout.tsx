import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const ddag = localFont({
  src: "./fonts/ddag.ttf",
  display: "swap",
  variable: "--font-ddag",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>
        <div className="w-full flex justify-center">
          <main className="max-w-[600px] w-full h-screen bg-frame-image bg-cover">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
