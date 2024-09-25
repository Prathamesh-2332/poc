// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridTable from './GridTable';
import DetailPage from './DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridTable />} />
        <Route path="/details/:name" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
