function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }
  
  export default async () => {
    const xItem = randomValueFromArray([
      "Willy the Goblin",
      "Big Daddy",
      "Father Christmas",
    ]);
    const yItem = randomValueFromArray([
      "the soup kitchen",
      "Disneyland",
      "the White House",
    ]);
    const zItem = randomValueFromArray([
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away",
    ]);
    
    const weight = 300;
    const temperature = 94;
  
    const story = `It was ${temperature} fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs ${weight} pounds, and it was a hot day.`;
  
    return new Response(JSON.stringify({ story }));
  };
  