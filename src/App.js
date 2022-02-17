import { useState, useEffect } from "react";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Games from "./components/Games";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MOBILE_BREAKPOINT } from "./constants.js";

function App() {
  const mobileBreakpoint = MOBILE_BREAKPOINT;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <div className="app">
      <div id="top"></div>

      {width > mobileBreakpoint && <Header />}
      {width <= mobileBreakpoint && <MobileHeader />}

      <main className="main">
        <Banner />
        <Profile />
        <Work />
        <Games />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
