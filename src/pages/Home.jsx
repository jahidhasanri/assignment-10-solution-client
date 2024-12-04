import React from 'react';
import Header from '../components/Header';
import Slider from '../components/slider';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';
import CategoriesSection from '../components/CategoriesSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Productsection></Productsection>
            <CategoriesSection></CategoriesSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;