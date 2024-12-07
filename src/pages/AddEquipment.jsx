import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../AuthProvider";
import { data, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();

  const handleAddEquipment = (e) => {
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
   const useremail= user?.email;
   const username=user?.displayName;
   const allinformation={img,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,useremail,username}
   fetch('https://assignment-10-solution-server.vercel.app/equepment',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(allinformation)
   })
   .then((res)=> res.json())
   .then((data)=>{
    if(data.insertedId){
      toast.success('data added successfully')
      form.reset();
      setTimeout(() => {
        navigate('/myequipment');
      }, 2000);
    }
   })
  };

  return (
    <div className="flex flex-col min-h-screen">
     
      <Header />

      <div className="w-11/12 mx-auto  flex-grow text-black mt-[150px] p-4">
      <h2 className="text-3xl font-bold text-center mb-3 text-black">Add Equipment</h2>
        <div className="card  bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleAddEquipment} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email || ""}
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
                value={user?.displayName || ""}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddEquipment;
