import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 mb-4">
      <h1 className="mb-4">Privacy Policy</h1>
      <p>
        Your privacy is important to us. It is FoodWeb's policy to respect your
        privacy regarding any information we may collect from you across our
        website.
      </p>

      <p>
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent.
      </p>

      {/* Add more privacy policy information as needed */}

      <p>
        If you have any questions about our Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
