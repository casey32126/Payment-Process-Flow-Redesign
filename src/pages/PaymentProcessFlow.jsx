import React, { useState } from 'react';
import StepIndicator from '../components/layout/StepIndicator';

import Postcode from '../components/ui/Postcode';
import WasteType from '../components/ui/WasteType';
import SelectSkip from '../components/ui/SelectSkip';
import PermitCheck from '../components/ui/PermitCheck';
import ChooseDate from '../components/ui/ChooseDate';
import Payment from '../components/ui/Payment';

const steps = [
  'Postcode',
  'Waste Type',
  'Select Skip',
  'Permit Check',
  'Choose Date',
  'Payment'
];

const PaymentProcessFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Postcode cStep={currentStep} />;
      case 2:
        return <WasteType />;
      case 3:
        return <SelectSkip cStep={currentStep} setCurrentStep={setCurrentStep} />;
      case 4:
        return <PermitCheck />;
      case 5:
        return <ChooseDate />;
      case 6:
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="stepIndicatorSection">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepChange}
        />
      </div>

      <div style={{ margin: '5rem 0 5rem 0' }}>
        {renderStepComponent()}
      </div>
    </div>
  );
};

export default PaymentProcessFlow;
