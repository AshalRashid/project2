import { Outlet } from "react-router-dom";
import  Card  from "../Card";
import ProductPage from "../CardBody";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      <div className="sidebar ">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <Card/>

        <Outlet/>
      </div>

    </div>
  );
}
