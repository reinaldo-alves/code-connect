import type { Metadata } from "next";
import { Prompt } from 'next/font/google';
import "./globals.css";
import { Aside } from "@/components/Aside";
import { SearchBar } from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para desenvolvedores",
};

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div className="main-content">
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
