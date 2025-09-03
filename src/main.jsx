import React from "react";
import ReactDOM from "react-dom/client"; // ✅ this import was missing
import App from "./App";
import { UserProvider } from "./Compenent/Contextapi/contextapi"; // ✅ adjust path carefully

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
