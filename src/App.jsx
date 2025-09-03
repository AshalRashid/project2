import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Compenent/Navbar";
import Layout from "./Compenent/Layout/layout";
import CardBody from "./Compenent/CardBody";
import BedGrid from "./Compenent/Bed";
import Sidebar from "./Compenent/Sidebar";
import ProductGrid from "./Compenent/Card";
import ShowCards from "./Compenent/ShowCards/ShowCards";
import AllProduct from "./Compenent/AllProduct/AllProduct";
import Seller from "./Compenent/Seller/Seller";


function App() {
  return (
    <div className="bg-gray-100 h-full">
    <Router>
      {/* Navbar will always stay */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<h1 className="p-6">About Page</h1>} />
        <Route path="/cardbody" element={<CardBody />} />
        <Route path="/seller" element={<Seller/>} />
        {/* BedGrid  */}
        <Route
          path="/bedgrid"
          element={
            <div className="flex h-94 ">
              <Sidebar />
              <div className="flex-1 p-6">
                <BedGrid />
              </div>
            </div>
          }
        />

        {/* BedGrid  */}
        <Route
          path="/allproduct"
          element={
            <div className="flex h-94 ">
              <Sidebar />
              <div className="flex-1 p-6">
                <AllProduct />
              </div>
            </div>
          }
        />


        {/* table grid */}
        <Route
          path="/productgrid"
          element={
            <div className="flex h-94 ">
              <Sidebar />
              <div className="flex-1 p-6">
                <ProductGrid />
              </div>
            </div>
          }
        />
        <Route
        path="/showcards"
        element={<ShowCards/>}
        />

      </Routes>
    </Router>
</div>
  );
}

export default App;
