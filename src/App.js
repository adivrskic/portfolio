import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Banner />
        <Work />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
