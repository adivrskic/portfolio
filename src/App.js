import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles/animations.scss";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />

      <main className="main">
        {/* <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade"> */}
        <Routes>
          <Route path="/" exact element={<Banner />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/games"  element={< Games />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </main>
    </div>
  );
}

export default App;
