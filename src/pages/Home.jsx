import React, { useState, useEffect, createContext } from "react";
import Spinner from "../components/Spinner";
import FilterProduct from "../components/FilterProduct";
import Header from "../components/Header";
import Cart from "../components/Cart"

const Home = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [searchProduct, setSearchProduct] = useState(products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setSearchProduct(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const searchHandle = (e) => {
    const searchTerm = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );

    setSearchProduct(searchTerm);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full">
      
      <Header searchHandle={searchHandle} cartCount={cartCount} />

      <Cart cart={cart} setCart={setCart} />
      
      <div className="flex">
        <FilterProduct
          products={products}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />

        <div className="grid md:grid-cols-3 md:grid-flow-row w-[85%] mx-auto relative">
          {isLoading ? (
            <Spinner />
          ) : (
            searchProduct?.map((product) => (
              <div
                key={product.id}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 shadow-md"
              >
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover"
                    src={product.thumbnail}
                    alt="product image"
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {product.title}
                    </h5>
                    <h6 className="text-[0.7rem] tracking-tight text-gray-500">
                      {product.description}
                    </h6>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {product.rating}
                        <i className="fa-solid fa-star text-gray-600 ms-1"></i>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={()=> handleAddToCart(product)}
                    href="#"
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
