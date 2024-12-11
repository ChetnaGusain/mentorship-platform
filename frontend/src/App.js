import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import ProfileSetup from './components/ProfileSetup';
import UserDiscovery from './components/UserDiscovery';
import Matchmaking from './components/Matchmaking';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/user-discovery" element={<UserDiscovery />} />
          <Route path="/matchmaking" element={<Matchmaking />} />
          {/* Default Route */}
          <Route path="/" element={<UserDiscovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
