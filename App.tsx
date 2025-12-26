
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import DailyLog from './views/DailyLog';
import MonthlyReview from './views/MonthlyReview';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex justify-center bg-gray-900 min-h-screen">
        <div className="w-full max-w-[480px] bg-background-dark shadow-2xl min-h-screen relative overflow-x-hidden">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/log" element={<DailyLog />} />
            <Route path="/admin" element={<MonthlyReview />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
