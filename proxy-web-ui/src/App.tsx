import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EnhancedTable from './components/detections';
import AboutUs from './components/aboutus';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        {/*  redirect to /detections */}
        <Route path="/" element={<EnhancedTable />} />
        <Route path="/detections" element={<EnhancedTable />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
