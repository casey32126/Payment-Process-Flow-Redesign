import React from "react";

// Icon for selected state
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Icon for unselected state
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// SkipCard Component
const SkipCard = ({
  imageUrl,
  warning,
  hirePeriod,
  currentPrice,
  skipName,
  isSelected,
  onToggleSelect,
}) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent bubbling up to parent click handler
    onToggleSelect();
  };

  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""}`}
      onClick={onToggleSelect}
    >
      <div className="skip-card-image-container image-container">
        <img src={imageUrl} alt={skipName} className="skip-image" />

        {warning && <div className="warning">{warning}</div>}

        <button
          className={`favorite-button ${
            isSelected ? "selected-button" : ""
          }`}
          aria-label="Toggle Select"
          onClick={handleClick}
        >
          {isSelected ? <CheckIcon /> : <PlusIcon />}
        </button>
      </div>

      <div className="skip-card-details">
        <div className="card-details">
          <div className="skip-price">
            <span className="current-price">£{currentPrice}</span>
          </div>
          
          <p className="skip-name">{skipName}</p>
        </div>

        <div className="skip-info-header">
          <p className="skip-hirePeriod">{hirePeriod}</p>
        </div>

                
      </div>
    </div>
  );
};

export default SkipCard;
