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
  metadataBase: new URL('https://walterretke.com'), // Replace with your domain
  title: {
    default: "Walter Manske | Senior Software Engineer",
    template: "%s | Walter Manske"
  },
  description: "Senior Software Engineer specialized in Java, Spring Boot, and Next.js. Architecting high-performance distributed systems and global enterprise solutions.",
  keywords: ["Software Engineer", "Senior Java Engineer", "Spring Boot Architect", "Next.js Specialist", "Cloud-Native Microservices", "Software Architecture Brazil"],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
    },
  },
  authors: [{ name: "Walter Manske" }],
  creator: "Walter Manske",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walterretke.com",
    siteName: "Walter Manske Portfolio",
    title: "Walter Manske | Senior Software Engineer",
    description: "Architecting global systems for enterprise scale. Specialist in high-concurrency Java backends.",
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Walter Manske",
    "url": "https://walterretke.com",
    "jobTitle": "Senior Software Engineer",
    "sameAs": [
      "https://github.com/walterretke",
      "https://www.linkedin.com/in/walter-retke/"
    ],
    "description": "Senior Software Engineer specialized in high-performance distributed systems, Java, and Next.js.",
    "knowsAbout": ["Java", "Spring Boot", "Next.js", "Software Architecture", "Microservices", "Cloud Computing"]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-gradient-mesh transition-colors duration-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
