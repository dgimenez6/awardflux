import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AwardFlux — Post-award need intelligence",
  description:
    "AwardFlux turns fresh federal awards into verified sales signals for accounting, compliance, and GovCon service firms — with the evidence behind every why-now.",
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
