import React from 'react';
import Converter from '../components/Converter';
import styles from './ConverterPage.module.css';

const ConverterPage = () => {
  return (
    <div className={styles.page}>
      <h1>Конвертер валют</h1>
      <p>Введите сумму и валюты для конвертации (пример: 100 usd in rub)</p>
      <Converter />
    </div>
  );
};

export default ConverterPage;
