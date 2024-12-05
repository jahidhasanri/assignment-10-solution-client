import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const users=useLoaderData();
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow text-black w-full mt-[150px] p-4">
                <h2>
                   allequipment {users.length}
                </h2>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );

};

export default AllEquipment;