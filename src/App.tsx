import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {LoginPage} from "./pages/Login";
import {VendingMachine} from "./pages/VendingMachine";
import {NotFound} from "./pages/NotFound";

import './App.css';
import Box from "@mui/material/Box";

function App() {
  return (
	  <Box>
		<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<LoginPage/>} />
	      <Route path="/products" element={<VendingMachine/>} />
          <Route path="*" element={<NotFound />} />
	    </Routes>
		</BrowserRouter>
	  </Box>
  );
}

export default App;
