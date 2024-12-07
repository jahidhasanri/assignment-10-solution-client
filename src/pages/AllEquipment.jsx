import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const users = useLoaderData();
    const [sortedUsers, setSortedUsers] = useState(users);
    const [sortOrder, setSortOrder] = useState('asc'); // default sort order

    // Function to toggle sort order and sort users by price
    const toggleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        const sortedData = [...users].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.price - b.price; // ascending order
            } else {
                return b.price - a.price; // descending order
            }
        });
        setSortedUsers(sortedData);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow text-black w-full mt-[150px] p-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    All Equipment ({users.length})
                </h2>

                {/* Sort Button */}
                <button
                    onClick={toggleSort}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-2 text-left">Item Name</th>
                                <th className="border p-2 text-left">Category</th>
                                <th className="border p-2 text-left">Price</th>
                                <th className="border p-2 text-left">Rating</th>
                                <th className="border p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedUsers.map((product) => (
                                <tr key={product._id} className="odd:bg-gray-50 even:bg-white">
                                    <td className="border p-2">{product.itemName}</td>
                                    <td className="border p-2">{product.categoryName}</td>
                                    <td className="border p-2">${product.price}</td>
                                    <td className="border p-2">{product.rating} ⭐</td>
                                    <td className="border p-2">
                                        <Link
                                            to={`/viewdetails/${product._id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AllEquipment;
