import { FaBed, FaChair, FaCouch, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductGrid from "./Card";

export default function Sidebar() {
  const categories = [
    { name: "Bed", icon: <FaBed size={40} />, path: "/bedgrid" },
    { name: "Chair", icon: <FaChair size={40} />, path: "/chair" },
    { name: "Sofa", icon: <FaCouch size={40} />, path: "/sofa" },
    { name: "Table", icon: <FaTable size={40} />, path: "/productgrid" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 bg-transparent w-94">
      {categories.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="flex bg-white flex-col items-center justify-center border rounded-lg px-16 py-8 cursor-pointer hover:border-green-600 hover:shadow-md transition"
        style={{textDecoration: "none"}}
        >
          <div className="text-black">{item.icon}</div>
          <p className="mt-2 text-sm font-medium text-gray-800">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
