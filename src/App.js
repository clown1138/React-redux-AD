import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Plus from './Plus';
import PlusRedux from './PlusRedux';
import RotateAD from './RotateAD';
import RotateAirplaneAD from './RotateAirplaneAD';
function App() {

  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Plus" element={<Plus />} />
        <Route path="/PlusRedux" element={<PlusRedux />} />
        <Route path="/Q2" element={<RotateAD />} />
        <Route path="/AirplaneAD" element={<RotateAirplaneAD />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
