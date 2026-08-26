import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRM Landing Page",
  description: "A frontend page for CRM, inspired from dribble",
  openGraph: {
    title: "CRM Landing Page",
    description: "A frontend page for CRM, inspired from dribble",
    type: "website",
    locale: "en_US",
    url: "https://dribble-crm.vercel.app/",
    siteName: "CRM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
