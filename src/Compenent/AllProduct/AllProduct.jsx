import { useContext, useState } from "react";
import { UserContext } from "../Contextapi/contextapi"; // adjust path if needed
import image1 from "../../assets/Bedpics/image1.webp";
import image2 from "../../assets/Bedpics/image2.webp";
import image3 from "../../assets/Bedpics/image3.webp";
import image4 from "../../assets/Bedpics/image4.webp";
import image5 from "../../assets/Bedpics/image5.webp";
import image6 from "../../assets/Bedpics/image1.webp";
import image7 from "../../assets/CardPics/image1.webp";
import image8 from "../../assets/CardPics/image2.webp";
import image9 from "../../assets/CardPics/image3.webp";
import image10 from "../../assets/CardPics/image4.webp";
import image11 from "../../assets/CardPics/image5.webp";
import image12 from "../../assets/CardPics/image6.webp";

const AllProduct = () => {
  const { searchQuery } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const products = [
    { id: 1, name: "Aidan 6 Seater Table", price: 720, oldPrice: 800, discount: "10%", image: image1 },
    { id: 2, name: "Oslo Coffee Table", price: 299, oldPrice: 350, discount: "15%", image: image2 },
    { id: 3, name: "King Size Bed", price: 999, oldPrice: 1200, image: image3 },
    { id: 4, name: "Modern Sofa Set", price: 1450, oldPrice: 1700, discount: "12%", image: image4 },
    { id: 5, name: "Bookshelf", price: 450, oldPrice: 500, image: image5 },
    { id: 6, name: "Office Chair", price: 199, oldPrice: 250, discount: "20%", image: image6 },
    { id: 7, name: "Ash double bed", price: 350, image: image7 },
    { id: 8, name: "Brown Hardwood bed", price: 220, oldPrice: 250, discount: "12%", image: image8 },
    { id: 9, name: "Delux Mahagony bed", price: 400, image: image9 },
    { id: 10, name: "Supreem ok double bed", price: 680, oldPrice: 750, discount: "9%", image: image10 },
    { id: 11, name: "Partex Coushoned bed", price: 250, oldPrice: 300, discount: "13%", image: image11 },
    { id: 12, name: "Vince ottaman table", price: 250, oldPrice: 300, discount: "12%", image: image12 },
  ];

  const filteredProducts = searchQuery
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : products;


    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg p-4 bg-white hover:shadow-lg transition cursor-pointer"
          >
            {product.discount && (
              <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                {product.discount}
              </span>
            )}
            <img src={product.image} alt={product.name} className="w-40 h-40 mx-auto object-contain" />
            <p className="mt-3 text-sm text-center font-semibold text-gray-800">{product.name}</p>
            <div className="mt-2 text-center">
              <span className="text-gray-600 font-bold">${product.price}</span>
              {product.oldPrice && <span className="ml-2 text-gray-400 line-through">${product.oldPrice}</span>}
            </div>
          </div>
        ))}
      </div>


      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded ${page === currentPage ? "bg-[#019376] text-white" : "bg-white border"}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
