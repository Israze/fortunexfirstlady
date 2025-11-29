import React, { createContext, useState, useContext, useEffect } from 'react';

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState(() => {
    return localStorage.getItem('selectedPlan') || 'FortuneX Starter';
  });
  const [price, setPrice] = useState(() => {
    return localStorage.getItem('selectedPrice') || '7,500';
  });

  useEffect(() => {
    localStorage.setItem('selectedPlan', plan);
  }, [plan]);

  useEffect(() => {
    localStorage.setItem('selectedPrice', price);
  }, [price]);

  const value = {
    plan,
    setPlan,
    price,
    setPrice,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};
