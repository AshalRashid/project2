import { useContext } from "react";
import { UserContext } from "../Contextapi/contextapi";

const Seller = () => {
  const {
    isLoggedIn,
    setShowLoginModal,
    showform,
    setShowForm,
    addseller,
    handleAddCard,
    handlechange,
    cards,
    setSelectedProduct,
    deleteCard, // ✅ now included
  } = useContext(UserContext);

  return (
    <div className="p-6">
      {!isLoggedIn ? (
        <div>
          <button onClick={() => setShowLoginModal(true)}>
            Login to continue
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="mb-4 font-bold text-xl">Welcome to Seller Page</h2>
          <button
            className="px-3 py-2 rounded bg-[#019376] text-white"
            onClick={() => setShowForm(true)}
          >
            Add your Card
          </button>

          {/* Form */}
          {showform && (
            <form
              onSubmit={handleAddCard}
              className="mt-6 max-w-md mx-auto p-4 border rounded-xl shadow-md text-left bg-white"
            >
              <div className="mb-3">
                <label className="block mb-1">Card Title</label>
                <input
                  type="text"
                  name="title"
                  value={addseller.title}
                  onChange={handlechange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1">Card Description</label>
                <textarea
                  name="description"
                  value={addseller.description}
                  onChange={handlechange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1">Card Price</label>
                <input
                  type="number"
                  name="price"
                  value={addseller.price}
                  onChange={handlechange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handlechange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#019376] text-white rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {cards.length > 0 && (
            <div className="grid grid-cols-4 gap-5 p-6 mt-6">
              {cards.map((product) => (
                <div
                  key={product.id}
                  className="relative border rounded-lg p-4 bg-white hover:shadow-lg transition cursor-pointer"
                >
                  {/* Delete Button (X) */}
                  <button
                    onClick={() => deleteCard(product.id)}
                    className="absolute top-2 right-2 text-red-500 font-bold hover:text-red-700"
                  >
                    ✕
                  </button>

                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-40 h-40 mx-auto object-contain"
                    />
                  )}
                  <p className="mt-3 text-sm text-center font-semibold text-gray-800">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    {product.description}
                  </p>
                  <div className="mt-2 text-center">
                    <span className="text-gray-600 font-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Seller;
