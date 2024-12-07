import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-10-solution-server.vercel.app/equepment/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>; 

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex justify-center items-center p-4 mt-[150px]">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
                    {/* Product Image */}
                    <div>
                    <img
                        src={product.img} 
                        alt={product.itemName}
                        className="w-full h-[350px]  object-contain"
                    />

                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.itemName}</h2>
                        <p className="text-lg text-gray-600 mb-2"><strong>Category:</strong> {product.categoryName}</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Price:</strong> ${product.price}</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Rating:</strong> {product.rating} ⭐</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Description:</strong> {product.description}</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Customization:</strong> {product.customization}</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Processing Time:</strong> {product.processingTime}</p>
                        <p className="text-lg text-gray-600 mb-2"><strong>Stock Status:</strong> {product.stockStatus}</p>
                    </div>

                    {/* Footer with Button */}
                    
                </div>
            </div>
            <Footer>
                        <div className="p-4 flex justify-center">
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </Footer>
        </div>
    );
};

export default ViewDetails;
