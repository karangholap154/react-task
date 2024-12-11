
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CounterApp from "./components/CounterApp";
import TodoApp from "./components/TodoApp";
import FetchData from "./components/FetchData";
import VisibilityToggle from "./components/VisibilityToggle";
import SearchFilter from "./components/SearchFilter";
import MultiPageApp from "./components/MultiPageApp";
import ColorSwitcher from "./components/ColorSwitcher";
import Accordion from "./components/Accordion";
import ImageCarousel from "./components/ImageCarousel";
import AdditionApp from "./components/AdditionApp";
import "./styles.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/toggle" element={<VisibilityToggle />} />
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/multi-page" element={<MultiPageApp />} />
        <Route path="/color-switcher" element={<ColorSwitcher />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/carousel" element={<ImageCarousel />} />
        <Route path="/addition" element={<AdditionApp />} />
      </Routes>
    </Router>
  );
};

export default App;
