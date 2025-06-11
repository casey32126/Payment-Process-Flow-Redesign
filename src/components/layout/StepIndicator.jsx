import React from "react";

// SVG Checkmark Icon (can be reused)
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StepIndicator = ({ steps = [], currentStep = 1, onStepClick }) => {
  return (
    <div className="step-progress">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        const stepClasses = [
          "step",
          isCompleted && "completed",
          isActive && "active",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={`${label}-${stepNumber}`}
            className={stepClasses}
            onClick={() => onStepClick?.(stepNumber)}
            role="button"
            tabIndex={0}
            aria-current={isActive ? "step" : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onStepClick?.(stepNumber);
              }
            }}
          >
            <div className="step-number">
              {isCompleted ? <CheckIcon /> : stepNumber}
            </div>
            <div className="step-label">{label}</div>
            {stepNumber !== steps.length && <div className="step-bar" />}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
