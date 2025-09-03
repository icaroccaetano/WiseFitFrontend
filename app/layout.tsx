// app/layout.tsx

import type { Metadata } from "next";
// 1. Importe as fontes necessárias
import { Inter } from 'next/font/google'

import "./globals.css";
import Footer from '@/components/Footer';
import { version } from '../package.json'; // Se você estiver usando a versão no rodapé

// 2. Declare a constante da fonte
const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "WiseFit",
  description: "Sua jornada para uma vida mais saudável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 3. Use a classe da fonte e a classe do layout flexível */}
      <body className={`${inter.className} flex-layout`}>
        <main className="flex-content">
          {children}
        </main>
        <Footer appVersion={version} />
      </body>
    </html>
  );
}