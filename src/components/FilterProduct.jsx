import { useState } from "react";

const filterProduct = ({ products, searchProduct, setSearchProduct }) => {
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");

  const handleFilter = () => {
    const filtered = searchProduct.filter(
      (product) =>
        (!selectedMinPrice || product.price >= parseFloat(selectedMinPrice)) &&
        (!selectedMaxPrice || product.price <= parseFloat(selectedMaxPrice))
    );
    setSearchProduct(filtered);
  };

  const clearFilter = () => {
    setSelectedMinPrice("");
    setSelectedMaxPrice("");
    setSearchProduct(products);
  }

  return (
    <div className="filter p-6 border border-gray-300 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-center my-5 md:text-xl font-bold">Filter by Price</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <label
            htmlFor="minPrice"
            className="mb-2 text-gray-700 font-semibold"
          >
            Min Price:
          </label>
          <select
            id="minPrice"
            value={selectedMinPrice}
            onChange={(e) => setSelectedMinPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Any</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label
            htmlFor="maxPrice"
            className="mb-2 text-gray-700 font-semibold"
          >
            Max Price:
          </label>
          <select
            id="maxPrice"
            value={selectedMaxPrice}
            onChange={(e) => setSelectedMaxPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Any</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
          </select>
        </div>
      </div>

      <div className="btn flex flex-col">
      <button
        onClick={handleFilter}
        className="mt-4 text-md py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Apply Filter
      </button>
      <button
        className="mt-4 text-md py-1  bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        onClick={clearFilter}
      >
        Clear filter
      </button>
      </div>
    </div>
  );
};

export default filterProduct;
