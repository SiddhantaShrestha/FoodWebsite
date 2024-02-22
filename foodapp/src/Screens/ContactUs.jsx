import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <p>
        Have questions, suggestions, or just want to say hello? We'd love to
        hear from you! Reach out to us using the contact information below.
      </p>

      <div className="my-4">
        <p>Email: info@foodweb.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

      <p>
        Alternatively, you can connect with us on social media for the latest
        updates and delicious content:
      </p>

      {/* Add social media links or icons as needed */}

      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default ContactUs;
