import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import styles from './CurrencySelector.module.css';

const CurrencySelector = () => {
  const { baseCurrency, updateBaseCurrency } = useContext(CurrencyContext);
  const currencies = ['USD', 'EUR', 'GBP', 'RUB', 'JPY', 'CNY', 'CAD'];

  return (
    <div className={styles.container}>
      <label htmlFor="currency-select">Базовая валюта:</label>
      <select
        id="currency-select"
        value={baseCurrency}
        onChange={(e) => updateBaseCurrency(e.target.value)}
        className={styles.select}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
