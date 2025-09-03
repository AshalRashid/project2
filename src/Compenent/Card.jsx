import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Contextapi/contextapi";
import image1 from "../assets/CardPics/image1.webp";
import image2 from "../assets/CardPics/image2.webp";
import image3 from "../assets/CardPics/image3.webp";
import image4 from "../assets/CardPics/image4.webp";
import image5 from "../assets/CardPics/image5.webp";
import image6 from "../assets/CardPics/image6.webp";

export default function ProductGrid() {
  const { setSelectedProduct, searchQuery } = useContext(UserContext);

  const products = [
    { id: 1, name: "Aidan 6 Seater  Table", price: 720, oldPrice: 800, discount: "10%", image: image1 },
    { id: 2, name: "Oslo Coffee Table", price: 299, oldPrice: 350, discount: "15%", image: image2 },
    { id: 3, name: "King Size Bed", price: 999, oldPrice: 1200, image: image3 },
    { id: 4, name: "Modern Sofa Set", price: 1450, oldPrice: 1700, discount: "12%", image: image4 },
    { id: 5, name: "Bookshelf", price: 450, oldPrice: 500, image: image5 },
    { id: 6, name: "Office Chair", price: 199, oldPrice: 250, discount: "20%", image: image6 },
  ];

  // Filter products based on searchQuery
  const filteredProducts = searchQuery
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : products;

  return (
    <div className="grid grid-cols-3 gap-6 p-6 flex-1">
      {filteredProducts.map(product => (
        <Link
          key={product.id}
          to="/cardbody"
          state={{ product }}
          style={{ textDecoration: "none" }}
          className="no-underline text-inherit"
          onClick={() => setSelectedProduct(product)}
        >
          <div className="relative border rounded-lg p-4 bg-white hover:shadow-lg transition cursor-pointer">
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
        </Link>
      ))}
    </div>
  );
}
