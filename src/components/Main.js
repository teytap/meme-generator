import React, { useState, useEffect } from "react";

export default function Main() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "and take my money!",
    randomImage: "/images/memeimg.png",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    event.preventDefault();

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
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
          Get a new meme image
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
