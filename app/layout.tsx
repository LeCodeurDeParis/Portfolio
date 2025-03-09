import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/menu";
import type { Metadata } from 'next';
import Footer from "./components/footer/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Paul Boisaubert-Baillion - Fullstack Developer',
  description: 'Portfolio de Paul Boisaubert-Baillion, développeur Fullstack spécialisé dans le développement web.',
  keywords: ['développeur fullstack', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Paul Boisaubert-Baillion' }],
  openGraph: {
    title: 'Paul Boisaubert-Baillion - Fullstack Developer',
    description: 'Portfolio de Paul Boisaubert-Baillion, développeur Fullstack.',
    type: 'website',
    images: ['/Paul.jpg'],
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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-full `}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
