import "./App.scss";
import Carousel from "./components/Carousel/Carousel";
import CreamSection from "./components/CreamSection/CreamSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SmallSection from "./components/SmallSeection/SmallSection";
import { Data } from "./data/Data";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SmallSection />
      <CreamSection />
      <Carousel slides={Data} />
      <Footer/>
    </div>
  );
}

export default App;
