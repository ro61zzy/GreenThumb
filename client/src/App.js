import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/SignIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import Favourites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/Hero/HeroSection";
import MediaCard from "./Components/Card/BasicCard";
import Description from "./Components/Description/Description";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <DrawerAppBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/plants" element={<MediaCard />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/description" element={<Description />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
