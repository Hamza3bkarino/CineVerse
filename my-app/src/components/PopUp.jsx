import React, { useState } from "react";
import '../components/PopUp.css'

export default function PopUp({ isOpen, onClose }) {
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (email) {
      alert(`Registered email: ${email}`);
      setEmail("");
      onClose();
    } else {
      alert("Please enter your email!");
    }
  };

  const handleCancel = () => {
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Join CineVerse</h2>
        <p>Enter your email to register and get updates!</p>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="popup-buttons">
          <button className="register-btn" onClick={handleRegister}>
            Subscribe
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
