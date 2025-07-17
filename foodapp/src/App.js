import "./App.css";
import "./styles/modern-styles.css"; // Add this line
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import SignUp from "./Screens/SignUp.jsx";
import { CartProvider } from "./Components/ContextReducer.jsx";
import MyOrder from "./Screens/MyOrder.jsx";
import AboutUs from "./Screens/AboutUs.jsx";
import TermsOfService from "./Screens/TermsOfService.jsx";
import ContactUs from "./Screens/ContactUs.jsx";
import PrivacyPolicy from "./Screens/PrivacyPolicy.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registerUser" element={<SignUp />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/terms" element={<TermsOfService />} />
            <Route exact path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
