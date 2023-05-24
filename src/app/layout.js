import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Lit Log",
  description:"Something IDK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
