import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BootstrapWrapper from "./BootstrapWrapper";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury but affordable Disney Area Vacation Rental by MyOrlandoStay | MyOrlandoy Stay",
  description: "Find affordable luxury rooms for your Disney vacation at MyOrlando Stay. Book now for comfort, convenience, pet-friendly and budget-friendly rates!",
  keywords: ['Orlando vacation rental florida', 'Orlando properties in florida', '3 bed Vacation home for rent in orlando', 'orlando 3 bed home in florida', 'budget friendly home in orlando florida', 'cheappest vacation home in orlando florida', 'vacaion townhome for rent in orlndo fl', 'florida budget friendly homes', 'orlando vacation homes', 'vacation homes in Orlando fl', 'Disney vacation rental home in Florida', '3 bed room Disney home, vacation home in Disney Orlando'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          precedence="default"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapWrapper>
         
          <Header/>

          <main>{children}</main>

        <Footer/>
        </BootstrapWrapper>
      </body>
    </html>
  );
}
