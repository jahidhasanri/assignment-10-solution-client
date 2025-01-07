import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const users = useLoaderData(); // Initial data
    const [sortedUsers, setSortedUsers] = useState(users); // Sorted data state
    const [sortOrder, setSortOrder] = useState('asc'); // Sort order state

    // Sorting function
    const toggleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        const sortedData = [...users].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.price - b.price; // Ascending order
            } else {
                return b.price - a.price; // Descending order
            }
        });
        setSortedUsers(sortedData);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Main Content */}
            <div className="flex-grow text-black w-full mt-[135px] p-4">
                <h2 className="text-3xl font-semibold mb-10 text-center">
                    All Equipment ({users.length})
                </h2>

                {/* Sort Button */}
                <div className="text-center mb-12">
                    <button
                        onClick={toggleSort}
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                        Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                    </button>
                </div>

                {/* Cards Section */}
                <div className="container mx-auto pb-11 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sortedUsers.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-95"
                        >
                            <img
                                src={product.img}
                                alt={product.itemName}
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.itemName}</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    Category: {product.categoryName}
                                </p>
                                <p className="text-sm text-gray-800 font-semibold mb-2">
                                    Price: ${product.price}
                                </p>
                                <p className="text-sm text-yellow-500 mb-4">
                                    Rating: {product.rating} ⭐
                                </p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    <a href={`/viewdetails/${product._id}`}>View Details</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AllEquipment;
