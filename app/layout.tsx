import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مركز إدامة | علاج طبيعي وتأهيل طبي",
  description:
    "نقدم برامج علاج طبيعي وإعادة تأهيل مخصصة تهدف إلى تقليل الألم، واستعادة الحركة، ودعم التعافي طويل الأمد في بريدة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${inter.variable} ${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}