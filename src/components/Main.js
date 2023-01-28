import React, { useState } from "react";
import MemesData from "../MemesData";
console.log(MemesData);
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/images/memeimg.png",
  });

  function getMemeImage(event) {
    event.preventDefault();

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: MemesData.data.memes[Math.floor(Math.random() * 100)].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }
  return (
    <main className="Main">
      <form>
        <input
          type="text"
          placeholder="Top text"
          className="first-text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="secondText"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} id="image-btn">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="meme-img" id="meme-image-place" />

        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
