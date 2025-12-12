import React, { useState } from 'react';
import uploadimage from '../assets/uploadimage.png';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Addmenu = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("All");

  const OnSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // Reset form
        setName("");
        setDescription("");
        setPrice("");
        setCategory("All");
        setImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={OnSubmitHandler} className="flex flex-col gap-6">

        {/* Upload Image */}
        <div>
          <p className="font-semibold mb-2">Upload Image</p>

          <label
            htmlFor="image"
            className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 cursor-pointer"
          >
            <img
              src={!image ? uploadimage : URL.createObjectURL(image)}
              alt=""
              className="w-full h-full object-cover"
            />
          </label>

          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}
        <div>
          <p className="font-semibold mb-1">Product Name</p>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        {/* Product Description */}
        <div>
          <p className="font-semibold mb-1">Product Description</p>
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        {/* Category + Price */}
        <div className="flex gap-6">
          <div className="flex-1">
            <p className="font-semibold mb-1">Product Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            >
              <option value="All">All</option>
              <option value="Rice">Rice</option>
              <option value="Dessert">Dessert</option>
              <option value="Burger">Burger</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="font-semibold mb-1">Product Price</p>
            <input
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="40"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default Addmenu;


