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
  title: "COLETTI | Waldhaus Residences | San Pablo - Tucumán",
  description: "Nuevo emprendimiento residencial linea Premium",
  keywords: ["arquitectura", "diseño sostenible", "estudio de arquitectura", "diseño contemporáneo", "proyectos arquitectónicos"],
  authors: [{ name: "Waldhaus" }],
  creator: "Waldhaus",
  publisher: "Waldhaus",
  robots: "index, follow",
  alternates: {
    canonical: "https://waldhaus.ar",
  },
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
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification=wzace8cf1tXdOx0UP3bNCGOyclNnwUkqDkkrKzzRDj8", 
  },
  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
