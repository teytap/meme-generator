import React, { useState } from "react";
import MemesData from "../MemesData";
console.log(MemesData);
export default function Main() {
  const [memeImage, setMemeImage] = useState("/images/memeimg.png");
  function getMemeImage(event) {
    event.preventDefault();
    setMemeImage(MemesData.data.memes[Math.floor(Math.random() * 100)].url);
  }

  return (
    <main className="Main">
      <form>
        <input placeholder="Shut up" className="first-text" />
        <input placeholder="and take my money" className="secondText" />
        <button onClick={getMemeImage} id="image-btn">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} alt="meme-img" id="meme-image-place" />
      <h1>Meme text</h1>
    </main>
  );
}
