import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
  } from "react-router-dom";
  import Login from "./Login";
  import Home from "../pages/Home";
  import ProtectedRoute from "./ProtectedRoute";
  import AddProducts from "../pages/AddProducts";
  
  const AllRoutes = () => {
  
    // const getData = (cart) =>{
    //   console.log(cart);
    // }
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/allProducts" element={<AddProducts />} />
          <Route
            path="/home"
            element={<ProtectedRoute Component={Home} /> }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AllRoutes;
  