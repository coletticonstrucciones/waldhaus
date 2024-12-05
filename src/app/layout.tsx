import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Waldhaus",
  description: "Estudio de arquitectura especializado en diseño sostenible y contemporáneo. Transformamos espacios con un enfoque innovador y respetuoso con el medio ambiente.",
  keywords: ["arquitectura", "diseño sostenible", "estudio de arquitectura", "diseño contemporáneo", "proyectos arquitectónicos"],
  authors: [{ name: "Waldhaus" }],
  creator: "Waldhaus",
  publisher: "Waldhaus",
  robots: "index, follow",
  openGraph: {
    title: "Waldhaus | Estudio de Arquitectura",
    description: "Estudio de arquitectura especializado en diseño sostenible y contemporáneo",
    url: "https://waldhaus.com",
    siteName: "Waldhaus",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waldhaus | Estudio de Arquitectura",
    description: "Estudio de arquitectura especializado en diseño sostenible y contemporáneo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
