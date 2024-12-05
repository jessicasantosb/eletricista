import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const outfit = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valdir Marques - Eletricista",
  description:
    "Especialista em serviços de eletricidade em Belo Horizonte! Profissional experiente e treinado, oferecendo atendimento de excelência na capital mineira. Soluções completas para instalações elétricas, manutenções, e reparos com segurança, qualidade e eficiência. Confie em quem entende de energia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
