import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../AuthProvider';

const ProductSection = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        fetch('https://assignment-10-solution-server.vercel.app/equepment')
            .then((res) => res.json()) 
            .then((data) => {
                setProducts(data); 
            })
            .catch((error) => {
                console.error("Error fetching data:", error); 
            });
    }, []);

    const handleViewDetails = (id) => {
        if (user) {
            
            navigate(`/viewdetails/${id}`);
        } else {
            
            navigate('/login');
        }
    };

    return (
        <div className="p-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Product Section</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="p-4 flex flex-col justify-between border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-90 hover:shadow-xl">
                                <div>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-[380px] p-4 rounded-2xl"
                                    />
                                </div>
                                <div className="p-4 text-start">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-800">${product.price}</span>
                                        <button
                                            onClick={() => handleViewDetails(product._id)} 
                                            className="bg-blue-600 text-white py-2 px-4 rounded"
                                            data-tooltip-id={`tooltip-${product._id}`}
                                            data-tooltip-content="Click to see product details"
                                        >
                                            View Details
                                        </button>
                                        {/* Tooltip Component */}
                                        <Tooltip id={`tooltip-${product._id}`} />
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
