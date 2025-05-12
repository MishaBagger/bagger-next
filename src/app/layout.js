import { Geist_Mono } from "next/font/google";
import "../scss/globals.css";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Bagger-Next",
  description: "Bagger Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
          <Header />

        {children}
      </body>
    </html>
  );
}
