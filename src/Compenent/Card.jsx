import { Link } from "react-router-dom";
import image1 from "../assets/CardPics/image1.webp";
import image2 from "../assets/CardPics/image2.webp";
import image3 from "../assets/CardPics/image3.webp";
import image4 from "../assets/CardPics/image4.webp";
import image5 from "../assets/CardPics/image5.webp";
import image6 from "../assets/CardPics/image1.webp";
import CardBody from "../Compenent/CardBody"

export default function ProductGrid() {
    const products = [
        {
            id: 1,
            name: "Aidan 6 Seater Dining Table",
            price: 720,
            oldPrice: 800,
            discount: "10%",
            image: image1,
        },
        {
            id: 2,
            name: "Diamond 8 Seater Dining Table",
            price: 810,
            oldPrice: 900,
            discount: "10%",
            image: image2,
        },
        {
            id: 3,
            name: "Greyson Dining Table",
            price: 740,
            image: image3,
        },
        {
            id: 4,
            name: "Wooden 6 Seater Dining",
            price: 680,
            oldPrice: 750,
            discount: "9%",
            image: image4,
        },
        {
            id: 5,
            name: "Glass Dining Set",
            price: 820,
            oldPrice: 880,
            discount: "7%",
            image: image5,
        },
        {
            id: 6,
            name: "Modern Dining Table",
            price: 650,
            image: image6,
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-6 p-6 flex-1">
            {products.map((product) => (
                <Link
                    key={product.id}
                    to="/cardbody"
                    state={{product}}
                    className="no-underline text-inherit"
                    style={{textDecoration: "none"}}
                >
                    <div className="relative border rounded-lg p-4 bg-white hover:shadow-lg transition cursor-pointer">
                        {/* Discount Badge */}
                        {product.discount && (
                            <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                                {product.discount}
                            </span>
                        )}

                        {/* Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-40 mx-auto object-contain"
                        />

                        {/* Title */}
                        <p className="mt-3 text-sm text-center font-semibold text-gray-800"
                        style={{textDecoration : 'underline-none'}}
                        >
                            {product.name}
                        </p>

                        {/* Price */}
                        <div className="mt-2 text-center">
                            <span className="text-gray-600 font-bold"
                            style={{textDecoration : 'underline'}}
                            >${product.price}</span>
                            {product.oldPrice && (
                                <span className="ml-2 text-center text-gray-400 line-through"
                                
                                >
                                    ${product.oldPrice}
                                </span>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
