import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

const description =
  "Sady Sai Kiran Reddy — software engineer in Hyderabad working on backend systems, distributed workflows and identity infrastructure.";

export const metadata: Metadata = {
  title: "Sai Kiran Reddy — Software Engineer",
  description,
  openGraph: {
    title: "Sai Kiran Reddy — Software Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
