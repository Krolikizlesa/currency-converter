import axios from 'axios';

const API_URL = 'https://api.exchangerate-api.com/v4/latest';

// Кэширование запросов
const cache = {};

export const fetchRates = async (base = 'USD') => {
  const cacheKey = `rates-${base}`;
  
  // Проверка кэша
  if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < 10 * 60 * 1000) {
    return cache[cacheKey].data;
  }

  try {
    const { data } = await axios.get(`${API_URL}/${base}`);
    const rates = data.rates;
    
    // Сохранение в кэш
    cache[cacheKey] = {
      data: rates,
      timestamp: Date.now()
    };
    
    return rates;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch exchange rates');
  }
};
