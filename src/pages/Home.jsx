import React, { useState } from 'react';
import Header from '../components/Header';
import Slider from '../components/slider';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';
import CategoriesSection from '../components/CategoriesSection';
import TopSellingProduct from '../components/TopSellingProduct';
import CustomerTestimonials from '../components/CustomerTestimonials';

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Header darkTheme={darkTheme} />
      <div className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
        >
          {darkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <Slider darkTheme={darkTheme} />
      <Productsection darkTheme={darkTheme} />
      <CategoriesSection darkTheme={darkTheme} />
      <TopSellingProduct darkTheme={darkTheme} />
      <CustomerTestimonials darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
};

export default Home;
