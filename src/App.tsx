import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const Rooms = () => <div>Rooms</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
