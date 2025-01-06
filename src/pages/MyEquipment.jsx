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

    // Fetch the user's equipment
    useEffect(() => {
        if (loggedInUserEmail) {
            fetch(`https://assignment-10-solution-server.vercel.app/myequepment?email=${loggedInUserEmail}`)
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
                fetch(`https://assignment-10-solution-server.vercel.app/equepment/${_id}`, {
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
                    <div className="overflow-x-auto">
                        {/* Table for Equipment */}
                        <table className="min-w-full border-collapse table-auto">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border p-2 text-left">Item Name</th>
                                    <th className="border p-2 text-left">Description</th>
                                    <th className="border p-2 text-left">Price</th>
                                    <th className="border p-2 text-left">Category</th>
                                    <th className="border p-2 text-left">Username</th>
                                    <th className="border p-2 text-left">User Email</th>
                                    <th className="border p-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myEquipment.map((equipment) => (
                                    <tr key={equipment._id} className="odd:bg-gray-50 even:bg-white">
                                        <td className="border p-2">{equipment.itemName}</td>
                                        <td className="border p-2">{equipment.description}</td>
                                        <td className="border p-2">${equipment.price}</td>
                                        <td className="border p-2">{equipment.categoryName}</td>
                                        <td className="border p-2">{equipment.username}</td>
                                        <td className="border p-2">{equipment.useremail}</td>
                                        <td className="border p-2">
                                            <div className="">
                                                <Link
                                                    to={`/update/${equipment._id}`}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Update
                                                </Link>
                                                <button
                                                    onClick={() => handelDelete(equipment._id)}
                                                    className="text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default MyEquipment;
