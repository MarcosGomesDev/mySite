import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/contexts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marcos Gomes | Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcosgomesdev.netlify.app/",
    title: "Marcos Gomes | Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack",
    images: "https://marcosgomesdev.netlify.app/web.png",
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
