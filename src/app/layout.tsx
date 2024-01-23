import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/contexts";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marcos Gomes | Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={poppins.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
