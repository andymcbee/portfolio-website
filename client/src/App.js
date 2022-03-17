import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Portfolio from "./routes/Portfolio"



function App() {
  return (
    <div className="App">

        <div>
              <Router>
                  <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                  </Routes>
              </Router>
        </div>
     
    </div>

  );
}

export default App;
