import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/SignIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import DrawerAppBar from "./Components/Appbar/ElevateAppbar";
import Favourites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <DrawerAppBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<DrawerAppBar />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
