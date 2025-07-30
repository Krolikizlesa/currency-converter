import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import CurrencySelector from '../components/CurrencySelector';
import RatesTable from '../components/RatesTable';
import styles from './RatesPage.module.css';

const RatesPage = () => {
  const { baseCurrency } = useContext(CurrencyContext);

  return (
    <div className={styles.page}>
      <h1>Текущие курсы валют</h1>
      <div className={styles.controls}>
        <CurrencySelector />
      </div>
      <RatesTable baseCurrency={baseCurrency} />
    </div>
  );
};

export default RatesPage;