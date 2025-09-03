import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Contextapi/contextapi";

export default function ShowCards() {
  const [cartItems, setCartItems] = useState([]);
  const { user, isLoggedIn, setShowLoginModal } = useContext(UserContext);

  // ✅ Get a unique key for each user's cart
  const getCartKey = () => (user?.email ? `cart_${user.email}` : "cart_guest");

  // ✅ Load cart items from localStorage on mount or when user changes
  useEffect(() => {
    const savedCart = localStorage.getItem(getCartKey());
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      setCartItems([]);
    }
  }, [user]);

  // ✅ Save cart changes to localStorage
  const updateLocalStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem(getCartKey(), JSON.stringify(updatedCart));
  };

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    updateLocalStorage(updatedCart);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].count += 1;
    updatedCart[index].totalPrice =
      updatedCart[index].price * updatedCart[index].count;
    updateLocalStorage(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      updatedCart[index].totalPrice =
        updatedCart[index].price * updatedCart[index].count;
      updateLocalStorage(updatedCart);
    } else {
      // ✅ If count reaches 0 → remove item
      handleRemove(index);
    }
  };

  // 🚨 Require login to access cart
  if (!isLoggedIn) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 mb-4">⚠️ Please log in to view your cart.</p>
        <button
          className="px-4 py-2 bg-[#019376] text-white rounded-lg"
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </button>
      </div>
    );
  }

  // 🛒 Empty cart
  if (cartItems.length === 0) {
    return <p className="p-6">🛒 Your cart is empty.</p>;
  }

  // 💰 Calculate grand total
  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-2xl font-bold mb-6">🛍 Your Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="relative border p-4 rounded-lg shadow-md"
          >
            {/* ❌ Remove button */}
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
            >
              &times;
            </button>

            {/* 📦 Item */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-3"
            />
            <h4 className="text-lg font-bold">{item.name}</h4>
            <p>Price: ${item.price}.00</p>

            {/* ➕➖ Counter */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => handleDecrement(index)}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                onClick={() => handleIncrement(index)}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <p className="font-semibold text-[#019376] mt-2">
              Total: ${item.totalPrice}.00
            </p>
          </div>
        ))}
      </div>

      {/* 💰 Grand total */}
      <div className="mt-8 p-4 border-t border-[#019376]">
        <h3 className="text-xl font-bold">
          Total Amount: <span className="text-[#019376]">${grandTotal}.00</span>
        </h3>
      </div>
    </div>
  );
}
