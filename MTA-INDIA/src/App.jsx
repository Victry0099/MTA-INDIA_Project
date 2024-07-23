import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Footer = lazy(() => import("./components/Footer/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
