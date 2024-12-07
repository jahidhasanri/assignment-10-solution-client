import React, { useState } from "react";
import Header from "../components/Header";
import Slider from "../components/slider";
import Footer from "../components/Footer";
import Productsection from "../components/Productsection";
import CategoriesSection from "../components/CategoriesSection";
import TopSellingProduct from "../components/TopSellingProduct";
import CustomerTestimonials from "../components/CustomerTestimonials";

const Home = () => {
  // State to store current theme
  const [homeTheme, setHomeTheme] = useState("light");

  return (
    <div className={`bg-${homeTheme === 'dark' ? 'gray-900 text-white' : 'white text-gray-900'}`}>
      <Header setHomeTheme={setHomeTheme} />
      <Slider />
      <Productsection />
      <CategoriesSection darkTheme={homeTheme === 'dark'} />
      <TopSellingProduct />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
