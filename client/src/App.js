import "./App.css";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import MediaCard from "./Components/Card/BasicCard";
import Footer from "./Components/Footer/footer";
import HeroSection from "./Components/Hero/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Components/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <DrawerAppBar />
      <HeroSection />
      <Routes>
         
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      <MediaCard />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
