import React, { useState } from 'react';
import SkipCard from '../layout/SkipCard';
import BottomModal from '../layout/BottomModal';
import skipImg from '/skipImg.jpg';

// Static skip data declared outside component to avoid recreation on each render
const skipData = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20, allowed_on_road: true },
  { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305, vat: 20, allowed_on_road: true },
  { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 375, vat: 20, allowed_on_road: true },
  { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 400, vat: 20, allowed_on_road: false },
  { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 439, vat: 20, allowed_on_road: false },
  { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470, vat: 20, allowed_on_road: false },
  { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496, vat: 20, allowed_on_road: false },
  { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false },
  { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false },
];

const SelectSkip = ({ cStep, setCurrentStep }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggleSelect = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const selectedSkip = skipData.find((skip) => skip.id === selectedId);
  const isModalVisible = !!selectedId && cStep;

  const handleContinue = () => {
    console.log('Proceeding to Step 4');
    console.log('Step:', cStep, 'next step', cStep + 1, 'Selected Skip:', selectedId);
    setCurrentStep(cStep + 1);
  };

  return (
    <>
      <div className="pageHeading">
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs</p>

        <p className='vatNote'>Note: 20% Vat will apply on purhase</p>
      </div>

      <section className="skip-wrapper">
        <div className="skip-grid">
          {skipData.map((skip) => {
            // const fullPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

            return (
              <SkipCard
                key={skip.id}
                imageUrl={skipImg}
                warning={skip.allowed_on_road ? '' : 'Not Allowed On The Road'}
                hirePeriod={`${skip.hire_period_days} day hire period`}
                skipName={`${skip.size} Yard Skip`}
                currentPrice={skip.price_before_vat}
                isSelected={selectedId === skip.id}
                onToggleSelect={() => handleToggleSelect(skip.id)}
              />
            );
          })}
        </div>

        <BottomModal
          skip={selectedSkip}
          show={isModalVisible}
          onContinue={handleContinue}
        />
      </section>
    </>
  );
};

export default SelectSkip;
