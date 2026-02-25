import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "CELEC Club",
  description: "CELEC Club",
  keywords: ["celec", "club", "usthb", "electronics", "design", "IT", "algeria", "algerie telecom"],
  publisher: "algerie_telecom",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <link rel="icon" href="/celec.png" />
      <body
      >
        {children}
      </body>
    </html>
  );
}
