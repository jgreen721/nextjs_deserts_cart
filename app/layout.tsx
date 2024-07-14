import { AppProvider } from "@/context/AppContext";
import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Text({ subsets: ["latin"], weight:["400","600","700"] });

export const metadata: Metadata = {
  title: "Desert Products",
  description: "Desert Products Design by Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redhat.className} bg-main-bg`}>
      <AppProvider>
        {children}
        <div className="text-center font-semibold py-2">
          <a href="https://jgreen721dev.com" target="_blank">
          <span className="bg-bronze rounded-md">JG</span>Dev721
          </a>
        </div>
      </AppProvider>
      </body>
    </html>
  );
}
