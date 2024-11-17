const randomValueFromArray = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export async function handler(event, context) {
  
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

  let weight = 300;
  let temperature = 94;
  const unit = event.queryStringParameters.unit || 'us';

  if (unit === "uk") {
    weight = Math.round(weight / 14) + " stone";
    temperature = Math.round((temperature - 32) * (5 / 9)) + " centigrade";
  } else {
    weight += " pounds";
    temperature += " fahrenheit";
  }

  const storyText = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${event.queryStringParameters.name || "Bob"} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;

  return {
    statusCode: 200, //こうしないと動きませんでした。
    body: JSON.stringify({ story: storyText }),
  };
};
