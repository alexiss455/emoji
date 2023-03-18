import React from "react";
import "./App.css";
import Emojis from "../emojipedis";
import Cradsemoji from "./emojicards";

Emojis.forEach(element => {
  console.log(element.emoji);
});


export default function App() {
  return (
    <div className="contianer">
      <div className="title">
        <h1>Emojipedia</h1>
      </div>
      <div className="emojiontainer">
        {
          Emojis.map(emoji => (
          <Cradsemoji
            key={emoji.id}
            iconEmoji={emoji.emoji}
            nameEmoji={emoji.name}
            descriptionEmoji={emoji.description.substring(0, 120)+"..."}
          />
        ))
        }
      </div>
    </div>
  );
}