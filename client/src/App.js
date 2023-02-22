import "./App.css";
import React from "react";
import { BrowserRouter} from "react-router-dom";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
// import HeroSection from "./Components/Hero/HeroSection";
// import Favourites from "./Components/Favorites/Favorites";
// import MediaCard from "./Components/Card/MediaCard";
import Footer from "./Components/Footer/Footer";
// import PhotoG from "./Components/Gallery/PhotoG";
import HomePage from "./Components/HomePage";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <DrawerAppBar />
        <HomePage />
        {/* <Routes>
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
        </Routes> */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
