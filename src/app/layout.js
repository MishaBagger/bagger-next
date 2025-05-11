import { Geist_Mono } from "next/font/google";
import "../scss/globals.css";

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
        {children}
      </body>
    </html>
  );
}
