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
      <body className={redhat.className}>
      <AppProvider>
        {children}
        <div className="text-center font-semibold bg-main-bg py-2">
          <span className="bg-bronze rounded-md">JG</span>Dev721
        </div>
      </AppProvider>
      </body>
    </html>
  );
}
