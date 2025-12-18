import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OldPage from './Components/OldPage/OldPage.tsx';
import RedesignA from './Components/RedesignA/RedesignA.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<OldPage />} />
            <Route path="/testpageA" element={<RedesignA />} />
        </Routes>
    )
}

export default App