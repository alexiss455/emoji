import React from "react";

export default function emoji(props) {
  return (
    <div className="emoji_content">
      <h1> {props.iconEmoji} </h1>
      <h3> {props.nameEmoji} </h3>
      <p> {props.descriptionEmoji} </p>
    </div>
  );
}
