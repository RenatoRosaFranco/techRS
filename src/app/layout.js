// Imports
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.scss";

// Components
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Banner } from "./components/Banner";

// Configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechRS | Tecnologia para o futuro do RS",
  description: "O TechRS ensina programação no Rio Grande do Sul, democratizando o acesso ao conhecimento tecnológico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/5165849ba2.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Banner />
        <Header />
        {children}

        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
