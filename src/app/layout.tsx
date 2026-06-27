import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "APEX Auto Spa | Premium Car Detailing & Paint Protection Film",
  description:
    "Experience the pinnacle of automotive care. Premium PPF installation, ceramic coating, paint correction, and full detailing services for luxury and exotic vehicles.",
  keywords: [
    "car detailing",
    "PPF",
    "paint protection film",
    "ceramic coating",
    "auto spa",
    "luxury car care",
    "paint correction",
    "window tinting",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "APEX Auto Spa | Premium Car Detailing & PPF",
    description:
      "Where Perfection Meets Protection. Premium automotive detailing services for discerning vehicle owners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}