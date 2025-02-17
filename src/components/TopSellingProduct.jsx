import React from 'react';

const TopSellingProduct = () => {
    return (
        <div className="py-12 mb-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold  mb-11 mt-1">
                    Top Selling Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-3 ml-4">
                    {/* Product 1 */}
                    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-white">
                        <div>
                            <img
                                src="https://i.ibb.co/18gTYfH/pngtree-green-transparent-sports-shoes-png-image-6687298.png"
                                alt="Top Seller 1"
                                className="w-full h-[300px] p-2"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Sports Shoes
                            </h3>
                            <p className="text-gray-600">
                                Durable and comfortable for any sport
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">$49.99</span>
                                <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-white">
                        <div>
                            <img
                                src="https://i.ibb.co/rykpx0L/0e9ed7a401e6559716d613fa35a374df.jpg"
                                alt="Top Seller 2"
                                className="w-full h-[300px] p-2 rounded-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Cricket Bat
                            </h3>
                            <p className="text-gray-600">
                                High-performance bat for pros
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">$69.99</span>
                                <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-white">
                        <div>
                            <img
                                src="https://i.ibb.co/PC51FGC/6621843ab480e820450d08d2-personalised-football-kit-for-kids-mens.jpg"
                                alt="Top Seller 3"
                                className="w-full h-[300px] p-2 rounded-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Football Kit
                            </h3>
                            <p className="text-gray-600">
                                Complete set for every football player
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">$89.99</span>
                                <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl bg-white">
                        <div>
                            <img
                                src="https://i.ibb.co/9qbYGNN/Bab-102435.jpg"
                                alt="Top Seller 4"
                                className="w-full h-[300px] p-2 rounded-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Tennis Racket
                            </h3>
                            <p className="text-gray-600">
                                Precision and power for serious players
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">$99.99</span>
                                <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;
