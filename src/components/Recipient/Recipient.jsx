// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Recipient.css";
import downArrow from "../../assets/down-arrow.png";
import downRightArrow from "../../assets/down-right-arrow.png";

const Recipient = () => {
  // State to hold transaction data
  const [transactionData, setTransactionData] = useState({
    name: "Muhammad Hamza Amin",
    amount: "120.00 CAD",
    currency: "23,772.00 PKR",
    bankDetails: "Meezan Bank",
    referenceNumber: "R60182573589",
  });

  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const name = localStorage.getItem("name") || "Muhammad Hamza Amin";
    const amount = localStorage.getItem("amount") || "120.00 CAD";
    const currency = localStorage.getItem("currency") || "23,772.00 PKR";
    const bankDetails = localStorage.getItem("bankDetails") || "Meezan Bank";
    const referenceNumber =
      localStorage.getItem("referenceNumber") || "R60182573589";

    setTransactionData({
      name,
      amount,
      currency,
      bankDetails,
      referenceNumber,
    });
  }, []);

  // Get the current date and time
  const getCurrentTime = () => {
    const now = new Date();

    // Specify options to get the date in the desired format
    const options = {
      weekday: "short", // For short weekday name (e.g., 'Mon')
      day: "2-digit", // For 2-digit day (e.g., '18')
      month: "short", // For abbreviated month name (e.g., 'Nov')
      hour: "2-digit", // For 2-digit hour (e.g., '13')
      minute: "2-digit", // For 2-digit minute (e.g., '12')
      hour12: false, // Use 24-hour format
      timeZone: "America/Toronto", // Set the timezone to Toronto
      timeZoneName: "short", // To get the timezone abbreviation (e.g., 'EST')
    };

    return now.toLocaleString("en-CA", options);
  };

  return (
    <div className="container">
      <div className="cross">&times;</div>
      <div className="content">
        <div>
          <div className="header-section">
            <div className="header">{transactionData.name}</div>
            <div className="amount-section">
              <div className="amount">
                {transactionData.amount}
                <span className="cad"> CAD</span>
              </div>
              <div className="currency">{transactionData.currency} PKR</div>
            </div>
          </div>
          <div className="ref">
            <div className="sub-header">Reference number</div>
            <div className="reference-number">
              {transactionData.referenceNumber}
            </div>
          </div>

          <div className="delivered">
            <img src={downRightArrow} alt="Delivered" />
            <span>Delivered</span>
          </div>
          <hr />

          <p className="message">
            <strong>
              We have confirmed funds were deposited to your recipient's{" "}
              <span className="bank-details">
                {transactionData.bankDetails}
              </span>{" "}
              account.
            </strong>{" "}
            Your transaction is complete, and we hope to see you again.
          </p>

          <div className="timeline">
            <div>Your debit card</div>
            <div>Remitly</div>
            <div>Recipient's bank</div>
            <div>Recipient's account</div>
          </div>
          <div className="success-main">
            <p className="success">Success! Your deposit has been confirmed.</p>
            <p className="time">{getCurrentTime()}</p>
          </div>
        </div>
        <div>
          <div className="note">
            <strong>Keep in mind</strong> It may take your recipient’s bank up
            to 3 business days to make the money available.
          </div>
          <div className="transfer">
            <hr />
            <div className="transfer-details">
              Transfer Details
              <span className="arrow-icon">
                <img src={downArrow} alt="" />
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipient;
