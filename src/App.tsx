import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
