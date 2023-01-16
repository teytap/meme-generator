import React from "react";
export default function Main() {
  return (
    <main className="Main">
      <form>
        <input placeholder="Shut up" className="first-text" />
        <input placeholder="and take my money" className="secondText" />
        <button>Get a new meme image 🖼</button>
      </form>
      <img src="/images/memeimg.png" alt="meme-img" />
    </main>
  );
}
