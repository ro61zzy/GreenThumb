import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/SignIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import Favourites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/Hero/HeroSection";
import MediaCard from "./Components/Card/MediaCard";
import Description from "./Components/Description/Description";
import Plants from "./Admin/Plants";

function App() {
  const [favorites, setFavorites] = React.useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <MediaCard favorites={favorites} setFavorites={setFavorites} />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <MediaCard favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route exact path="/" element={<DrawerAppBar />} />
          <Route exact path="/favorites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// export default App;

// import "./App.css";
// import React from "react";
// import MediaCard from "./Components/Card/MediaCard";

// function App() {
//   const [favorites, setFavorites] = React.useState([]);
//   return (
//     <BrowserRouter>
//       <div className="App">

//         <Routes>
//         <Route exact path="/home" element={<MediaCard favorites={favorites} setFavorites={setFavorites} />} />
//         <Route exact path="/" element={<DrawerAppBar />} />

//           <Route exact path="/favorites" element={<Favourites />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
