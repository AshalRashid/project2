import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";

export default function CardBody() {
  const { state } = useLocation();
  const product = state?.product;

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setPrice(price + product.price);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(price - product.price);
    }
  };

  if (!product) {
    return <p className="p-6">No product selected.</p>;
  }

  return (
    <div className="min-h-screen bg-white p-8 relative">
      {count > 0 && (
        <div className="fixed right-0 top-1/2 bg-[#019376] text-white rounded-lg shadow-lg px-3 py-3 flex flex-col items-center">
          <span className="text-sm font-medium flex gap-2">
            <IoBagOutline size={22} className="mb-2" /> {count} Item
          </span>
          <span className="font-bold px-1 py-1 bg-white text-[#019376]">
            ${price}.00
          </span>
        </div>
      )}

      {/* Product Image + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        <div>
          {product.discount && (
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md text-sm font-semibold">
              {product.discount} OFF
            </span>
          )}

          <h4 className="text-2xl font-bold mt-3">{product.name}</h4>

          <p className="text-gray-600 mt-5"> A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things. </p>

          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#019376] text-3xl font-bold">
              ${product.price}.00
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-lg">
                ${product.oldPrice}.00
              </span>
            )}
          </div>

          {/* Cart Control */}
          <div className="mt-10">
            {count === 0 ? (
              <button
                onClick={increase}
                className="bg-[#019376] hover:bg-green-700 text-white w-full py-3 rounded-lg font-semibold shadow-md"
              >
                Add To Shopping Cart
              </button>
            ) : (
              <div className="flex items-center justify-center gap-4 border rounded-lg py-3">
                <button
                  onClick={decrease}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-lg font-bold hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                  onClick={increase}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-lg font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-12">
            <p className="border border-white p-2">Categrious</p>
            <p className="border border-gray-300 p-2">table</p>
            <p className="border border-gray-300 p-2">dining table</p>

          </div>
        </div>
      </div>
    </div>
  );
}
