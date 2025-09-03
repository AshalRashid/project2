import { createContext, useEffect, useMemo, useState } from "react";

export const UserContext = createContext({
  selectedProduct: null,
  setSelectedProduct: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  showLoginModal: false,
  setShowLoginModal: () => {},
  signup: () => {},
  signin: () => {},
  signout: () => {},
  showform: false,
  setShowForm: () => {},
  addseller: { title: "", description: "", price: "", image: "" },
  setAddSeller: () => {},
  handleAddCard: () => {},
  handlechange: () => {},
  cards: [],
  setCards: () => {},
  deleteCard: () => {},
});

export function UserProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showform, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  const [addseller, setAddSeller] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  //  Handle input changes
  const handlechange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddSeller({ ...addseller, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setAddSeller({ ...addseller, [name]: value });
    }
  };

  //  Delete card
const deleteCard = (id) => {
  setCards((prev) => prev.filter((card) => card.id !== id));
};


  //  Add card
  const handleAddCard = (e) => {
    e.preventDefault();
    const newCard = { ...addseller, id: Date.now() };
    setCards((prev) => [...prev, newCard]);

    setAddSeller({ title: "", description: "", price: "", image: "" });
    setShowForm(false);
  };

  //  Load saved state
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("registeredUser");
      const savedLogin = localStorage.getItem("isLoggedIn");
      const savedCards = localStorage.getItem("sellerCards");

      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedLogin === "true") setIsLoggedIn(true);
      if (savedCards) {
        const parsedCards = JSON.parse(savedCards);
        if (Array.isArray(parsedCards)) setCards(parsedCards);
      }
    } catch (e) {
      console.error("Failed to read state:", e);
      localStorage.clear();
    }
  }, []);

  //  Save cards
  useEffect(() => {
    localStorage.setItem("sellerCards", JSON.stringify(cards));
  }, [cards]);

  //  Save user/login
  useEffect(() => {
    if (user) {
      localStorage.setItem("registeredUser", JSON.stringify(user));
    }
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [user, isLoggedIn]);

  //  Signup
  const signup = ({ name, email, password }) => {
    const newUser = { name, email, password };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");
  };

  //  Signin
  const signin = ({ email, password }) => {
    const savedUser = localStorage.getItem("registeredUser");
    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return false;
    }
    const parsedUser = JSON.parse(savedUser);
    if (parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);
      setIsLoggedIn(true);
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  };

  //  Signout
  const signout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const value = useMemo(
    () => ({
      selectedProduct,
      setSelectedProduct,
      searchQuery,
      setSearchQuery,
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
      showLoginModal,
      setShowLoginModal,
      signup,
      signin,
      signout,
      showform,
      setShowForm,
      addseller,
      setAddSeller,
      handleAddCard,
      handlechange,
      cards,
      setCards,
      deleteCard,
    }),
    [selectedProduct, searchQuery, user, isLoggedIn, showLoginModal, showform, addseller, cards]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
