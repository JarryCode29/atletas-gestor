import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "@/app/ui/globals.css";
import { Footer } from "./ui/footer";
export const metadata: Metadata = {
  title: "Volibol JP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer />
      </body>
    </html>
  );
}
