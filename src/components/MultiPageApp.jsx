import React from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";

const Home = () => <p>Welcome to the Home Page!</p>;
const About = () => <p>This is an app demonstrating React Router DOM.</p>;
const Contact = () => (
  <form>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
);

const MultiPageApp = () => {
  return (
    <>
    <h1>Not done</h1>
    {/* <div className="app-container">
      <nav>
        <Link to="/multi-page/home">Home</Link>
        <Link to="/multi-page/about">About</Link>
        <Link to="/multi-page/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/multi-page" element={<Navigate to="/multi-page/home" />} />
        <Route path="/multi-page/home" element={<Home />} />
        <Route path="/multi-page/about" element={<About />} />
        <Route path="/multi-page/contact" element={<Contact />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div> */}
    </>
  );
};

export default MultiPageApp;