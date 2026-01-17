
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Wines from './pages/Wines';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-gray-200">
      {!isAdminRoute && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          
          {/* Admin routes */}
          <Route path="/login" element={<Login onLogin={() => setIsAdmin(true)} />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
