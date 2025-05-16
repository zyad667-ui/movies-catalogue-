import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/home/home';
import Section from './pages/home/partiels/sections';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="logo">
            🎬 MovieApp
          </NavLink>

          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Accueil
            </NavLink>
            {/* Ajoute d'autres liens si besoin */}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/:id" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;
// Le code ci-dessus est un exemple de structure de navigation pour une application React utilisant React Router.