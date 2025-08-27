import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Compenent/Navbar";
import Layout from "./Compenent/Layout/layout";
import CardBody from "./Compenent/CardBody";
import BedGrid from "./Compenent/Bed";
import Sidebar from "./Compenent/Sidebar";
import ProductGrid from "./Compenent/Card";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <Router>
      {/* Navbar will always stay */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<h1 className="p-6">About Page</h1>} />
        <Route path="/cardbody" element={<CardBody />} />

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


      </Routes>
    </Router>
</div>
  );
}

export default App;
