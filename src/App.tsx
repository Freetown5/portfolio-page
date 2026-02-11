import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import OldPage from './Components/OldPage/OldPage.tsx';
import RedesignA from './Components/RedesignA/RedesignA.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<RedesignA />} />
            {/* <Route path="/testpageA" element={<RedesignB />} /> */}
        </Routes>
    )
}

export default App