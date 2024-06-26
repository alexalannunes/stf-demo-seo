import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STF - Supremo Tribunal Federal",
  description:
    "O Supremo Tribunal Federal (STF) é a instância superior ou última instância do poder judiciário brasileiro; a que acumula tanto competências típicas de uma suprema corte, ou seja, um tribunal de última instância (popularmente conhecida como terceira instância), como as de um tribunal constitucional, ou seja, aquele que julga questões de constitucionalidade independentemente de litígios concretos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="aEdmSv4Liad52ujAs70aLu_5IVpNmPWCcRTuAj34SjQ"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
