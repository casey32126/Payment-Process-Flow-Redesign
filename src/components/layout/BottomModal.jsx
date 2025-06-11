import React from "react";

export default function BottomModal({ skip, onContinue, show }) {
  // Don't render the modal if no skip is selected
  if (!skip) return null;

  const { size, price_before_vat, vat } = skip;
  const priceWithVAT = (price_before_vat * (1 + vat / 100)).toFixed(2);

  return (
    <div className={`bottom-modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <div>
          <h2>{size} Yard Skip</h2>
          <p> <span>Total:</span> £{priceWithVAT} <em className="vatApplied">20% vat applied</em></p>
        </div>
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
