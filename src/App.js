import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StateProvider } from "./context/StateProvider";

function App() {
  return (
    <StateProvider>
      <div className="app">
        <Header />

        <main className="main">
          <Banner />
          <Profile />
          <Work />
          {/* <Games /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
