import type { Metadata } from "next";
import { montserrat } from "../fonts/font";
import "../styles/globals.css";
import MainNavBarComponent from "./components/common/mainNav/navBar";
import ProviderComponent from "./provider";

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
        <ProviderComponent>
          <MainNavBarComponent />
          <div className="mt-24 block w-full pb-5">{children}</div>
        </ProviderComponent>
      </body>
    </html>
  );
}
