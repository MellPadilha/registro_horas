import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HourTable from './HourTable';
import RegisterPage from './RegisterPage';
import EditRegisterPage from './EditRegisterPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hourTable" element={<HourTable />} />
        <Route path="/register/:id" element={<RegisterPage />} />
        <Route path="/editHour/:id" element={<EditRegisterPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
