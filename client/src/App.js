import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import HeroSection from "./Components/Hero/HeroSection";
import Favourites from "./Components/Favorites/Favorites";
import MediaCard from "./Components/Card/MediaCard";
import Footer from "./Components/Footer/Footer";
import PhotoG from "./Components/Gallery/PhotoG";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <DrawerAppBar />
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
          <Route
            exact
            path="/"
            element={
              <MediaCard favorites={favorites} setFavorites={setFavorites} />
            }
          />

          <Route exact path="/favorites" element={<Favourites />} />
          <Route element={<PhotoG />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
