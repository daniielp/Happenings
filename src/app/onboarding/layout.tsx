import React from "react";
import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Onboarding - Happenings",
  description: "Følg instrukserne for at komme i gang med Happenings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full" lang="da">
      <body className="min-h-full min-w-full flex justify-center items-center bg-slate-100">
        {children}
      </body>
    </html>
  );
}
