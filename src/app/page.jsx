// import Image from "next/image";

// import Header from "./components/Header/Header";
// import Footer from "./Footer/Footer";
// import About from "./components/About/About";
import AboutUs from './components/About/AboutUs'
import WhychooseUs from './components/Whychoose/Whychoose'
import Properties from "./components/Proparties/Properties";

import DiscountSection from "./components/Discount/Discount";

import Reservations from "./components/Reservation/Reservations";
import HolidayBanner from "./components/Holiday/HolidayBanner";
// import MainSlider from "./Slider";
// import Footer from "./components/Footer";
// import Slider from "./Slider";

import MainSlider from "./components/Slider/Slider";




export default function Home() {
  return (
    <>
     
        {/* <Header/> */}
        <MainSlider/>
        <AboutUs/>
  
       {/* <About/> */}

       
       <HolidayBanner/>

      
      <Properties/> 
       <WhychooseUs/>
 <br/>

       <DiscountSection/>
       <Reservations/>
{/*        
   <Footer/> */}
    </>
  );
}
