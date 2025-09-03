import { FaBed, FaChair, FaCouch, FaTable } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductGrid from "./Card";
import { CiHome } from "react-icons/ci";

export default function Sidebar() {
  const categories = [
    { name: "Bed", icon: <FaBed size={40} />, path: "/bedgrid" },
    { name: "Chair", icon: <FaChair size={40} />, path: "/chair" },
    {name: "All Items" ,icon: <CiHome size={30}  />, path: "/allproduct" },
    { name: "Table", icon: <FaTable size={40} />, path: "/productgrid" },
    // {name: "Products" ,icon: <CiHome size={30} />, path: "/allproduct" }
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 bg-transparent w-94 text-black">
      {categories.map((item, index) => ( 
        <Link
          key={index}
          to={item.path}
          className="flex bg-white flex-col items-center justify-center border rounded-lg px-10 py-6 cursor-pointer hover:border-green-600 hover:shadow-md transition"
        style={{textDecoration: "none"}}
        >
          <div className="text-black">{item.icon}</div>
          <p className="mt-2 text-sm font-medium text-gray-800 ">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
