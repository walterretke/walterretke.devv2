import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "../styles/globals.css";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walter Manske | Software Engineer",
  description: "Portfolio of Walter M. R. Manske, Software Engineer focused on scalable products and technical leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-gradient-mesh">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
