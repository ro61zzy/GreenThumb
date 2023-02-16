import "./App.css";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import HeroSection from "./Components/Hero/HeroSection"
import MediaCard from "./Components/Card/BasicCard"
import Footer from "./Components/Footer/Footer"





function App() {
  return <div className="App">
    <DrawerAppBar />
    <HeroSection />
    <MediaCard />
    <Footer />
  </div>;
}

export default App;
