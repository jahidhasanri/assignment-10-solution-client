import React from 'react';

const Offer = () => {
    return (
        <div className="bg-gray-100 py-12 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-6">Exclusive Offers Just for You!</h1>
                <p className="text-gray-700 text-lg mb-10">
                    Take advantage of our limited-time deals on premium sports equipment, apparel, and accessories. 
                    Gear up for your next game without breaking the bank!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 transform hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">⚽ Football Essentials</h2>
                        <p className="text-gray-600 mb-4">
                            Up to <span className="text-blue-600 font-bold">30% off</span> on footballs, boots, and jerseys.
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 transform hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">🏀 Basketball Gear</h2>
                        <p className="text-gray-600 mb-4">
                            Buy 1, Get 1 Free on select basketballs and training kits.
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 transform hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">🏸 Badminton Pro Set</h2>
                        <p className="text-gray-600 mb-4">
                            Flat <span className="text-blue-600 font-bold">20% off</span> on all badminton rackets and shuttlecocks.
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 transform hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">🎾 Tennis Special</h2>
                        <p className="text-gray-600 mb-4">
                            Exclusive <span className="text-blue-600 font-bold">15% off</span> on premium tennis rackets and balls.
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>
                </div>
                <p className="mt-10 text-gray-700">
                    Hurry up! Offers valid till <span className="font-bold text-blue-700">31st January 2025</span>.
                </p>
            </div>
        </div>
    );
};

export default Offer;
