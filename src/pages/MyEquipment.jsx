import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const MyEquipment = () => {
    const [myEquipment, setMyEquipment] = useState([]);
    const { user, loader, setLoader } = useContext(AuthContext);

    const loggedInUserEmail = user?.email;
    console.log(loggedInUserEmail);

    // Fetch the user's equipment
    useEffect(() => {
        if (loggedInUserEmail) {
            fetch(`http://localhost:5000/myequepment?email=${loggedInUserEmail}`)
                .then((res) => res.json())
                .then((data) => {
                    setMyEquipment(data);
                    setLoader(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoader(false);
                });
        }
    }, [loggedInUserEmail, setLoader]);

    // Handle Delete Equipment
    const handelDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/equepment/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });
                            const remainingEquipment = myEquipment.filter((item) => item._id !== _id);
                            setMyEquipment(remainingEquipment);
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the equipment.",
                                icon: "error"
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting equipment:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-grow text-black w-full mt-[150px] p-4">
                <h1 className="text-3xl font-bold mb-10 text-center">My Equipment</h1>

                {loader ? (
                    <p>Loading equipment...</p>
                ) : myEquipment.length === 0 ? (
                    <p>No equipment found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-11/12 mx-auto">
                        {myEquipment.map((equipment) => (
                            <div
                                key={equipment._id}
                                className="border rounded-lg shadow p-4 flex flex-col justify-between"
                            >
                                <div>
                                    <img
                                        src={equipment.img}
                                        alt={equipment.itemName}
                                        className="w-[450px] h-[350px] mb-4 rounded text-center mx-auto"
                                    />
                                    <h3 className="text-xl font-semibold">{equipment.itemName}</h3>
                                    <p className="text-gray-600">{equipment.description}</p>
                                    <p className="text-gray-800 font-bold">Price: ${equipment.price}</p>
                                    <p className="text-gray-500">Category: {equipment.categoryName}</p>
                                    <p className="text-gray-500">User Name: {equipment.username}</p>
                                    <p className="text-gray-500">User email: {equipment.useremail}</p>
                                
                                </div>
                                <div className="mt-auto flex justify-between items-center gap-5 pt-4">
                                    <Link
                                        to={`/update/${equipment._id}`}
                                        className="bg-blue-600 text-white py-2 px-6 h-10 flex items-center justify-center rounded"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handelDelete(equipment._id)}
                                        className="bg-red-600 text-white py-2 px-6 h-10 flex items-center justify-center rounded"
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
