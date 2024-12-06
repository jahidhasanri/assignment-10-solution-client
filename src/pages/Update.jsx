import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData();

    const handleUpdateEquipment = (e) => {
        e.preventDefault();
        const form=e.target;
   const img=form.image.value;
   const itemName=form.itemName.value; 
   const categoryName=form.categoryName.value; 
   const description=form.description.value; 
   const price=form.price.value; 
   const rating=form.rating.value; 
   const customization=form.customization.value; 
   const processingTime=form.processingTime.value; 
   const stockStatus=form.stockStatus.value; 
   const useremail= user?.useremail;
   const username=user?.username;
   const allinformation={img,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,useremail,username}
   console.log(allinformation);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mt-[120px] p-4">
                <h3 className="text-center font-bold text-3xl mb-6">Update Page</h3>
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleUpdateEquipment} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                className="input input-bordered"
                                defaultValue={user?.img || ''} // Display the user's image URL if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                                className="input input-bordered"
                                defaultValue={user?.itemName || ''} // Display the user's itemName if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input
                                type="text"
                                name="categoryName"
                                placeholder="Category Name"
                                className="input input-bordered"
                                defaultValue={user?.categoryName || ''} // Display the user's categoryName if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="textarea textarea-bordered"
                                defaultValue={user?.description || ''} // Display the user's description if available
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered"
                                defaultValue={user?.price || ''} // Display the user's price if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating (0-5)"
                                className="input input-bordered"
                                step="0.1"
                                min="0"
                                max="5"
                                defaultValue={user?.rating || ''} // Display the user's rating if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input
                                type="text"
                                name="customization"
                                placeholder="e.g., bat with extra grip"
                                className="input input-bordered"
                                defaultValue={user?.customization || ''} // Display the user's customization if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input
                                type="text"
                                name="processingTime"
                                placeholder="Processing Time (e.g., 3-5 days)"
                                className="input input-bordered"
                                defaultValue={user?.processingTime || ''} // Display the user's processingTime if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input
                                type="number"
                                name="stockStatus"
                                placeholder="Available product quantity"
                                className="input input-bordered"
                                defaultValue={user?.stockStatus || ''} // Display the user's stockStatus if available
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                type="email"
                                name="userEmail"
                                value={user?.useremail || ''} // Display the user's email if available
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                name="userName"
                                value={user?.username || ''} // Display the user's displayName if available
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Update Equipment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Update;
