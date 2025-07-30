import React, { useState, useContext } from 'react';
import { parseInput } from '../utils/parseInput';
import { fetchRates } from '../services/api';
import { CurrencyContext } from '../context/CurrencyContext';
import styles from './Converter.module.css';

const Converter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const { baseCurrency } = useContext(CurrencyContext);

  const handleConvert = async () => {
    setError('');
    setResult('');
    
    const parsed = parseInput(input);
    if (!parsed) {
      setError('Неверный формат. Пример: 15 usd in rub');
      return;
    }

    try {
      // Если конвертируем из базовой валюты
      if (parsed.from === baseCurrency) {
        const rates = await fetchRates(baseCurrency);
        const rate = rates[parsed.to];
        if (!rate) throw new Error('Валюта не найдена');
        setResult(`${(parsed.amount * rate).toFixed(2)} ${parsed.to}`);
      } 
      // Если конвертируем в базовую валюту
      else if (parsed.to === baseCurrency) {
        const rates = await fetchRates(parsed.from);
        const rate = rates[baseCurrency];
        if (!rate) throw new Error('Валюта не найдена');
        setResult(`${(parsed.amount * rate).toFixed(2)} ${baseCurrency}`);
      } 
      // Конвертация между двумя не базовыми валютами
      else {
        const ratesFromBase = await fetchRates(baseCurrency);
        const rateToBase = 1 / ratesFromBase[parsed.from]; // Сколько базовой валюты в 1 единице исходной
        const amountInBase = parsed.amount * rateToBase;
        const resultAmount = amountInBase * ratesFromBase[parsed.to];
        setResult(`${resultAmount.toFixed(2)} ${parsed.to}`);
      }
    } catch (err) {
      setError('Ошибка конвертации: ' + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`100 ${baseCurrency} in EUR`}
          className={styles.input}
        />
        <button onClick={handleConvert} className={styles.button}>
          Конвертировать
        </button>
      </div>
      
      {error && <div className={styles.error}>{error}</div>}
      {result && <div className={styles.result}>{result}</div>}
    </div>
  );
};

export default Converter;