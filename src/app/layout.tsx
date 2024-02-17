import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NpProgressProviders from "@/components/providers/npprogress-provider";

import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaperAdda",
  description: "Welcome to PaperAdda: Your true partner at Ultimate Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NpProgressProviders>
          {children}
          <Toaster />
        </NpProgressProviders>
      </body>
    </html>
  );
}
