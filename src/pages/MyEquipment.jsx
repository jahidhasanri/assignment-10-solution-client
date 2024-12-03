import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyEquipment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow text-black w-full mt-[150px] p-4">
        <h1>
         myequipment
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyEquipment;
