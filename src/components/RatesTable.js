import React from 'react';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import styles from './RatesTable.module.css';

const RatesTable = ({ baseCurrency }) => {
  const { rates, loading, error } = useCurrencyRates(baseCurrency);

  if (loading) return <div className={styles.loading}>Загрузка курсов...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  // Фильтруем базовую валюту и сортируем по коду валюты
  const filteredRates = Object.entries(rates)
    .filter(([currency]) => currency !== baseCurrency)
    .sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс относительно {baseCurrency}</th>
          </tr>
        </thead>
        <tbody>
          {filteredRates.map(([currency, rate]) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rate.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RatesTable;
