import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
// import HeroSection from "./Components/Hero/HeroSection";
import Favourites from "./Components/Favorites/Favorites";
// import MediaCard from "./Components/Card/MediaCard";
//import Footer from "./Components/Footer/Footer";
// import PhotoG from "./Components/Gallery/PhotoG";
import HomePage from "./Components/HomePage";
import Description from "./Components/Description/Description";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <DrawerAppBar />
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/favorites" element={<Favourites />} />
          <Route path="/plants/:id" element={<Description />}/>
          
          <Route path="/favorites/:id" element={<Description />}/>
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;
