import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const Root = () => (
  <BrowserRouter basename="/Netflix-Clone"> 
    <App />
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<Root />);
