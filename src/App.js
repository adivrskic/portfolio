import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { StateProvider } from "./context/StateProvider";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <div className="app">
          <Header />

          <main className="main">
            <Routes>
              <Route path="/" exact element={<Banner />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<Work />} />
              {/* <Route path="/games"  element={< Games />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
