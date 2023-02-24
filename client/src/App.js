import "./App.css";
import React from "react";
import LogIn from "./Components/SignIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import Favourites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage";
import Description from "./Components/Description/Description";
// import MediaCard from "./Components/Card/MediaCard";
// import PhotoG from "./Components/Gallery/PhotoG";
//import HeroSection from "./Components/Hero/HeroSection";

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
          <Route path="/login" element={<LogIn />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );

//   return <div className="App">
//    <MediaCard favorites={favorites} setFavorites={setFavorites} />

//   </div>;
}

export default App;
