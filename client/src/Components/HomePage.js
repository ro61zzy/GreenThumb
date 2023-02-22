import React, { useState } from "react";
import MediaCard from "./Card/MediaCard";
import PhotoG from "./Gallery/PhotoG";
import HeroSection from "./Hero/HeroSection";

const HomePage = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <HeroSection />
      <MediaCard favorites={favorites} setFavorites={setFavorites} />
      <PhotoG />
    </div>
  )
}

export default HomePage