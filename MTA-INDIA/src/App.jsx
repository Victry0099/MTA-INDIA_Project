import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Webdevelopment = lazy(() => import("./Reuseable/Webdevelopment"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PopupForm = lazy(() => import("./components/PopupForm/PopupForm"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {/* <PopupForm /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/courses/web-development"
              element={<Webdevelopment />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
