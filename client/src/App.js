import "./App.css";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import MediaCard from "./Components/Card/BasicCard";
import HeroSection from "./Components/Hero/HeroSection";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <HeroSection />
      <MediaCard />
      
    </div>
  );
}

export default App;
