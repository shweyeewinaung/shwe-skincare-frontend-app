import type { Metadata } from "next";
import { montserrat } from "./font";
import "./globals.css";
import MainNavBarComponent from "./components/common/mainNav/navBar";

export const metadata: Metadata = {
  title: "Shwe Skincare",
  description:
    "Next.js-powered frontend for seamless skincare shopping. Features product catalog, cart, checkout & intuitive UX design. Testing with JEST.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative`}>
        <MainNavBarComponent />
        {children}
      </body>
    </html>
  );
}
