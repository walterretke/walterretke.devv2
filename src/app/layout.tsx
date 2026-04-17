import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "../styles/globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

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
  title: {
    default: "Walter Manske | Software Engineer",
    template: "%s | Walter Manske"
  },
  description: "Senior Software Engineer specialized in high-performance distributed systems, Java backends, and premium Next.js experiences. Exploring architectural decisions and scalable enterprise solutions.",
  keywords: ["Software Engineer", "Java", "Spring Boot", "Next.js", "Software Architecture", "Distributed Systems", "Web Development"],
  authors: [{ name: "Walter Manske" }],
  creator: "Walter Manske",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walterretke.com", // Replace with your actual domain
    siteName: "Walter Manske Portfolio",
    title: "Walter Manske | Software Engineer",
    description: "Architecting global systems for enterprise scale. Senior Engineer specialized in Java and Next.js.",
    images: [
      {
        url: "/perfi-s-fundo.png",
        width: 1200,
        height: 630,
        alt: "Walter Manske - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walter Manske | Software Engineer",
    description: "Architecting global systems for enterprise scale.",
    images: ["/perfi-s-fundo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-gradient-mesh transition-colors duration-500">
        <I18nProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
