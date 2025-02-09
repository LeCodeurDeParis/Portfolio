import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Light from "./components/ui/light";
import Menu from "./menu/menu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        <Light size={10} top={10} left={10} color="012A61" className="absolute rounded-full blur-[80px] -z-10"/>
        <Light size={10} top={50} left={50} color="012A61" className="absolute rounded-full blur-[80px] -z-10"/>
        <Light size={10} top={10} left={80} color="012A61" className="absolute rounded-full blur-[80px] -z-10 hidden lg:block"/>
        {children}
      </body>
    </html>
  );
}
