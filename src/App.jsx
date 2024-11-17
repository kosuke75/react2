import { useEffect, useState } from "react";

export default function App() {
  const [story, setStory] = useState("");
  useEffect(() => {
    const fetchStory = async () => {
      const response = await fetch("/.netlify/functions/hello");
      const story = await response.json();
      setStory(story.message);  
    };
    fetchStory();
  }, []);
  
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
