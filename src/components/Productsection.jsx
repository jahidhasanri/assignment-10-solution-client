import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const [products, setProducts] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('http://localhost:5000/equepment')
            .then((res) => res.json()) // Correctly handle JSON response
            .then((data) => {
                setProducts(data); // Set the data to state
            })
            .catch((error) => {
                console.error("Error fetching data:", error); // Handle errors
            });
    }, []);

    return (
        <div className="py-12 bg-gray-50  className={`p-4 ${darkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Product Section</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="border rounded-lg shadow-lg overflow-hidden">
                                <div>
                                    <img
                                        src={product.img} // Assuming the image URL is in product.img
                                        alt={product.name} // Assuming the name is in product.name
                                        className="w-full h-[300px] p-4 rounded-2xl"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-800">${product.price}</span>
                                        <Link to={`/viewdetails/${product._id}`} className="bg-blue-600 text-white py-2 px-4 rounded">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
