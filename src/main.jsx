import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./features/ContextProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);