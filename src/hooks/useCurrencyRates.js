import { useState, useEffect } from 'react';
import { fetchRates } from '../services/api';

export const useCurrencyRates = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRates = async () => {
      try {
        setLoading(true);
        const data = await fetchRates(baseCurrency);
        setRates(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRates();
  }, [baseCurrency]);

  return { rates, loading, error };
};
