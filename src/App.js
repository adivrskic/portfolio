import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" exact element={<Banner />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/games"  element={< Games />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
