import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './pages/Rooms';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
