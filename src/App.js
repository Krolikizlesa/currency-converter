import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage';
import RatesPage from './pages/RatesPage';
import Navigation from './components/Navigation';
import styles from './App.module.css'; // Импорт из App.module.css

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<ConverterPage />} />
          <Route path="/rates" element={<RatesPage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Конвертер валют</p>
      </footer>
    </div>
  );
}

export default App;
