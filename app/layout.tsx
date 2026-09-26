import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AwardFlux — Fresh federal award signals",
  description:
    "AwardFlux finds newly funded federal awardees and turns public award data into timely sales opportunities for accounting, compliance, and GovCon service firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
