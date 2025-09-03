import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { CiMicrophoneOn, CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import image from "../assets/logo-new.webp";
import { UserContext } from "./Contextapi/contextapi";

export default function Navbar() {
    const navigate = useNavigate();
    const {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        showLoginModal,
        setShowLoginModal,
        selectedProduct,
        setSelectedProduct,
        searchQuery,
        setSearchQuery,
        signup,
        signin,
        signout,
    } = useContext(UserContext);

    const [isSignup, setIsSignup] = useState(true);
    const [showSearch, setShowSearch] = useState(false);

    // form state
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("registeredUser"));
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (loggedIn && currentUser) {
            setUser(currentUser);
            setIsLoggedIn(true);
        }
    }, [setUser, setIsLoggedIn]);

    const handleLogout = () => {
        signout();
        navigate("/");
    };

    const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

    // 🔑 handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            signup({ name: formName, email: formEmail, password: formPassword });
        } else {
            const success = signin({ email: formEmail, password: formPassword });
            if (!success) return; // stop if login failed
        }
        setShowLoginModal(false);
        setFormName("");
        setFormEmail("");
        setFormPassword("");
    };

    return (
        <div className="flex items-center justify-between top-0 z-50 p-3 bg-white relative">
            {/* Left */}
            <div className="flex items-center gap-6">
                <Link to="/">
                    <img src={image} alt="logo" className="h-7" />
                </Link>
            </div>

            {/* Right */}
            <div className="flex items-center gap-8">
                <ul className="flex gap-4 items-center relative">
                    <li>
                        <Link to="/showcards" className="text-black">
                            <IoBag className="text-2xl" />
                        </Link>
                    </li>
                    <li className="cursor-pointer">Offer</li>
                    <Link to="/" className="text-black" style={{ textDecoration: "none" }}>
                        Shop
                    </Link>

                    {/* Search */}
                    <li className="flex items-center gap-2 relative">
                        <CiSearch
                            className="border rounded-2xl border-gray-700 p-2 text-4xl cursor-pointer"
                            onClick={() => {
                                setShowSearch(!showSearch);
                                setSelectedProduct(null);
                                setSearchQuery("");
                            }}
                        />

                        {showSearch && (
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border px-3 py-1 rounded-full focus:outline-none w-64 transition-all duration-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        )}
                    </li>

                    {!isLoggedIn ? (
                        <button
                            className="bg-[#019376] px-3 text-white p-2 rounded-xl"
                            onClick={() => setShowLoginModal(true)}
                        >
                            Register
                        </button>
                    ) : (
                        <Dropdown align="end">
                            <Dropdown.Toggle as="div" className="cursor-pointer flex items-center">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#019376] text-white font-bold">
                                    {userInitial}
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled>{user?.name || "User"}</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}

                    <button className="bg-[#019376] text-white p-2 px-3 rounded-xl">
                        <Link
                            to="/seller"
                            className="text-white"
                            style={{ textDecoration: "none" }}
                        >
                            Become a seller
                        </Link>
                    </button>
                </ul>
            </div>

            {/* Login/Signup Modal */}
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isSignup ? "Signup" : "Login"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        {isSignup && (
                            <input
                                type="text"
                                placeholder="Name"
                                className="border px-3 py-2 rounded"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                required
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="border px-3 py-2 rounded"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border px-3 py-2 rounded"
                            value={formPassword}
                            onChange={(e) => setFormPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#019376] text-white py-2 rounded-lg font-semibold"
                        >
                            {isSignup ? "Signup" : "Login"}
                        </button>
                    </form>

                    {/* Small link at bottom */}
                    <p className="text-center text-sm mt-3">
                        {isSignup ? (
                            <>
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    className="text-blue-600 underline"
                                    onClick={() => setIsSignup(false)}
                                >
                                    Login
                                </button>
                            </>
                        ) : (
                            <>
                                New here?{" "}
                                <button
                                    type="button"
                                    className="text-blue-600 underline"
                                    onClick={() => setIsSignup(true)}
                                >
                                    Signup
                                </button>
                            </>
                        )}
                    </p>
                </Modal.Body>
            </Modal>

        </div>
    );
}
