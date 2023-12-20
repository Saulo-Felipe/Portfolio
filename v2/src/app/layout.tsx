import type { Metadata } from "next";
import "./globals.css";
// import { Header } from "@/components/Header";
import { UbuntuFont } from "@/Fonts";
import { twJoin } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Portfólio - Saulo Felipe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={twJoin(
        UbuntuFont.className,
        "bg-black-1 overflow-x-hidden"
      )}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
