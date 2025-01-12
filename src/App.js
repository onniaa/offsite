import React from "react";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <HashRouter basename="/">
    <div className="App">
      <nav>
        <Link to="/modern-philosophy">Modern Philosophy</Link>
        <Link to="/advanced-philosophy">Advanced Philosophy</Link>
      </nav>

      <Routes>
        <Route path="/modern-philosophy" element={<ModernPhilosophy />} />
        <Route path="/advanced-philosophy" element={<AdvancedPhilosophy />} />
      </Routes>
    </div>
  </HashRouter>
  );
};

const ModernPhilosophy = () => (
  <div>
    <h2>Modern Philosophy Course</h2>
    <p>Details about the modern philosophy course.</p>
  </div>
);

const AdvancedPhilosophy = () => (
  <div>
    <h2>Advanced Philosophy Course</h2>
    <p>Details about the advanced philosophy course.</p>
  </div>
);

export default App;
