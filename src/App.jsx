import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Background Animation */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[1200px] h-[1200px] -left-[300px] -top-[200px] rounded-full blur-[80px] opacity-20 animate-float bg-gradient-radial from-blue-400 to-transparent"></div>
          <div className="absolute w-[1200px] h-[1200px] -right-[300px] -bottom-[200px] rounded-full blur-[80px] opacity-20 animate-float-slow bg-gradient-radial from-purple-400 to-transparent"></div>
        </div>

        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
