import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const MyEquipment = () => {
    const [myEquipment, setMyEquipment] = useState([]);
    const { user, loader, setLoader } = useContext(AuthContext);
    
    const loggedInUserEmail = user?.email; 
    console.log(loggedInUserEmail);

    useEffect(() => {
        if (loggedInUserEmail) {
            fetch(`http://localhost:5000/myequepment?email=${loggedInUserEmail}`)
                .then((res) => res.json())
                .then((data) => {
                    setMyEquipment(data);
                    setLoader(false); 
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoader(false); 
                });
        }
    }, [loggedInUserEmail, setLoader]); 

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-grow text-black w-full mt-[150px] p-4">
                <h1 className="text-3xl font-bold mb-6">My Equipment</h1>

                {loader ? (
                    <p>Loading equipment...</p> 
                ) : myEquipment.length === 0 ? (
                    <p>No equipment found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {myEquipment.map((equipment) => (
                            <div key={equipment._id} className="border rounded-lg shadow p-4">
                              <div>
                                <img
                                    src={equipment.img}
                                    alt={equipment.itemName}
                                    className="w-full h-[350px] mb-4 rounded"
                                />
                              </div>
                                <h3 className="text-xl font-semibold">{equipment.itemName}</h3>
                                <p className="text-gray-600">{equipment.description}</p>
                                <p className="text-gray-800 font-bold">Price: ${equipment.price}</p>
                                <p className="text-gray-500">Category: {equipment.categoryName}</p>
                                <div className="mt-4 flex justify-between">
                                    <Link
                                        to={`/updateequipment/${equipment._id}`}
                                        className="bg-blue-600 text-white py-2 px-4 rounded"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => setDeleteId(equipment._id)} // Add deletion logic here
                                        className="bg-red-600 text-white py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default MyEquipment;
