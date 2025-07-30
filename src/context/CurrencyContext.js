import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  
  useEffect(() => {
    const savedCurrency = localStorage.getItem('baseCurrency');
    if (savedCurrency) {
      setBaseCurrency(savedCurrency);
    } else {
      // Определение валюты по языку браузера
      const userLanguage = navigator.language || 'en-US';
      const currencyMap = {
        'ru-RU': 'RUB',
        'en-US': 'USD',
        'de-DE': 'EUR',
        'fr-FR': 'EUR',
        'es-ES': 'EUR',
        'it-IT': 'EUR'
      };
      setBaseCurrency(currencyMap[userLanguage] || 'USD');
    }
  }, []);

  const updateBaseCurrency = (currency) => {
    setBaseCurrency(currency);
    localStorage.setItem('baseCurrency', currency);
  };

  return (
    <CurrencyContext.Provider value={{ baseCurrency, updateBaseCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};