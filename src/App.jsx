import React, { useState } from "react";
import "./style.css";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}


export default function App() {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("us");
  const [story, setStory] = useState("");

  const generateStory = async () => {
    const response = await fetch("./hello");
    const data = await response.json();
    setStory(data.story);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          id="customname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          id="us"
          value="us"
          checked={unit === "us"}
          onChange={() => setUnit("us")}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          id="uk"
          value="uk"
          checked={unit === "uk"}
          onChange={() => setUnit("uk")}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {story && <p>{story}</p>}
    </>
  );
}
