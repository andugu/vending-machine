import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Login} from "./pages/Login";
import {VendingMachine} from "./pages/VendingMachine";
import {NotFound} from "./pages/NotFound";

import './App.css';
import Box from "@mui/material/Box";

function App() {
  return (
	  <Box sx={{padding: 2}}>
		<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Login/>} />
	      <Route path="/products" element={<VendingMachine/>} />
          {/* <Route path="/products/:id" element={<VendingMachineDetailPage/>} /> */}
          <Route path="*" element={<NotFound />} />
	    </Routes>
		</BrowserRouter>
	  </Box>
  );
}

export default App;
