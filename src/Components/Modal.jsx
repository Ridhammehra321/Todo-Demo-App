import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Invalid Data</h2>
        <p>Please fill in all fields before saving.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
);
}
