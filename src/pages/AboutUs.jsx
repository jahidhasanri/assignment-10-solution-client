import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
        <div className="min-h-screen mt-[70px] bg-gray-100 py-10 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg  rounded-lg overflow-hidden">
                <div className="bg-blue-800 text-white py-8 px-6">
                    <h1 className="text-4xl font-bold text-center">About Us</h1>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Sports Zone!</h2>
                    <p className="text-gray-700 leading-7 mb-6">
                        At Sports Zone, we are passionate about sports and the active lifestyle it promotes.
                        Our mission is to provide sports enthusiasts with the highest quality equipment, 
                        apparel, and accessories to fuel their passion. From professional athletes to 
                        weekend warriors, we cater to everyone who shares our love for the game.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-7 mb-6">
                        <li>Wide range of sports equipment for every discipline.</li>
                        <li>Top-quality gear from trusted brands.</li>
                        <li>Affordable pricing with exclusive discounts.</li>
                        <li>Expert advice to help you make the right choice.</li>
                        <li>Fast and reliable delivery services.</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
                    <p className="text-gray-700 leading-7 mb-6">
                        We aim to become the go-to platform for all sports enthusiasts by fostering a community 
                        of like-minded individuals who share the same passion for sports and fitness. Together, 
                        we can inspire healthier and more active lifestyles for people of all ages.
                    </p>
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">Join us in celebrating the spirit of sports!</p>
                        <p className="text-gray-700 mt-4">
                            <em>“Sports do not build character. They reveal it.”</em> – Heywood Broun
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>

        </div>
    );
};

export default AboutUs;
