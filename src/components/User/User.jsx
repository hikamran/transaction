// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    currency: "",
    bankDetails: "",
    referenceNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Save to localStorage
    Object.keys(formData).forEach((key) => {
      localStorage.setItem(key, formData[key]);
    });
    // Navigate to Recipient page
    navigate("/recipient");
  };

  return (
    <div className="login-box">
      <p>User Details</p>
      <form>
        <div className="user-box">
          <input
            required
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Name:</label>
        </div>
        <div className="user-box">
          <input
            required
            name="amount"
            type="text"
            value={formData.amount}
            onChange={handleChange}
          />
          <label>Amount (CAD):</label>
        </div>
        <div className="user-box">
          <input
            required
            name="currency"
            type="text"
            value={formData.currency}
            onChange={handleChange}
          />
          <label>Amount (PKR):</label>
        </div>
        <div className="user-box">
          <input
            required
            name="bankDetails"
            type="text"
            value={formData.bankDetails}
            onChange={handleChange}
          />
          <label>Bank Details:</label>
        </div>
        <div className="user-box">
          <input
            required
            name="referenceNumber"
            type="text"
            value={formData.referenceNumber}
            onChange={handleChange}
          />
          <label>Reference Number:</label>
        </div>
        <a type="button" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default User;
