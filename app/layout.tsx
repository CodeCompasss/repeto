import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Consolidated metadata without images/icons
export const metadata: Metadata = {
  metadataBase: new URL("https://codecompasss.github.io/repeto/"),
  title: {
    default: "Repeto – Curated Internships & Opportunities",
    template: "%s | Repeto",
  },
  description:
    "Discover curated internships, research programs, hackathons, and scholarships. Filter by department, year, and more.",
  applicationName: "Repeto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://codecompasss.github.io/repeto/",
    siteName: "Repeto",
    title: "Repeto – Curated Internships & Opportunities",
    description:
      "Find internships, research programs, hackathons, and scholarships tailored to you.",
  },
  twitter: {
    card: "summary",
    site: "@your_handle",
    creator: "@your_handle",
    title: "Repeto – Curated Internships & Opportunities",
    description:
      "Find internships, research programs, hackathons, and scholarships tailored to you.",
  },
  keywords: [
    "internships",
    "research",
    "hackathon",
    "scholarship",
    "CSE",
    "ECE",
    "EEE",
    "IT",
    "engineering",
    "college opportunities",
  ],
  category: "education",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// ✅ Keep viewport separate
export const viewport: Viewport = {
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
