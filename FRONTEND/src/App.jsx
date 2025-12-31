import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Service from './Pages/Services';
import Navbar from './Pages/Navbar';
import Privacy from './Pages/Privacy';
import Term from './Pages/Term';
import Footer from './Pages/Footer';
import Login from './Components/Login';
import Registration from './Components/Registration';
function App() {
  return (
    <Router>
      
        <Navbar />
        
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/service"
              element={
                <>
                  <Service />
                  <Footer />
                </>
              }
            />
            <Route
              path="/registration"
              element={
                <>
                  <Registration />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login /> {/* Create Login page when ready */}
                  <Footer />
                </>
              }
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Term />} />
          </Routes>
        
     
    </Router>
  );
}

export default App;