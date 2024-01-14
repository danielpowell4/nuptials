const fs = require("fs");
const path = require("path");

// Define the data
const activities = [
  {
    name: "Rabbit Ears to Idaho",
    slug: "rabbit-ears-to-idaho",
    category: "From Door",
    position: 7,
  },
  {
    name: "Rainbow Trail",
    slug: "rainbow-trail",
    category: "From Door",
    position: 8,
  },
  {
    name: "Mushroom Trail",
    slug: "mushroom-trail",
    category: "From Door",
    position: 9,
  },
  {
    name: "Boulder Gulch",
    slug: "boulder-gulch",
    category: "From Door",
    position: 10,
  },
  {
    name: "San Juan Skyway",
    slug: "san-juan-skyway",
    category: "From Door",
    position: 11,
  },
  {
    name: "Memorial Park",
    slug: "memorial-park",
    category: "From Door",
    position: 12,
  },
  {
    name: "Molas Lake",
    slug: "molas-lake",
    category: "Lakes",
    position: 1,
  },
  {
    name: "Little Molas",
    slug: "little-molas",
    category: "Lakes",
    position: 2,
  },
  {
    name: "Ice Lakes Basin",
    slug: "ice-lakes-basin",
    category: "Lakes",
    position: 3,
  },
  {
    name: "Columbine Lake",
    slug: "columbine-lake",
    category: "Lakes",
    position: 4,
  },
  {
    name: "Ptarmigan Lake",
    slug: "ptarmigan-lake",
    category: "Lakes",
    position: 5,
  },
  {
    name: "Highland Mary",
    slug: "highland-mary",
    category: "Lakes",
    position: 6,
  },
  {
    name: "Hematite",
    slug: "hematite",
    category: "Lakes",
    position: 7,
  },
  {
    name: "Silver Lake",
    slug: "silver-lake",
    category: "Lakes",
    position: 8,
  },
  {
    name: "Porphyry basin",
    slug: "porphyry-basin",
    category: "Lakes",
    position: 9,
  },
  {
    name: "Woodchuck basin",
    slug: "woodchuck-basin",
    category: "Lakes",
    position: 10,
  },
  {
    name: "Velocity basin",
    slug: "velocity-basin",
    category: "Lakes",
    position: 11,
  },
  {
    name: "Crystal lake",
    slug: "crystal-lake",
    category: "Lakes",
    position: 12,
  },
  {
    name: "Lake Emma",
    slug: "lake-emma",
    category: "Lakes",
    position: 13,
  },
  {
    name: "Kendall",
    slug: "kendall",
    category: "Peaks",
    position: 1,
  },
  {
    name: "Turk / Sultan",
    slug: "turk-sultan",
    category: "Peaks",
    position: 2,
  },
  {
    name: "Anvil",
    slug: "anvil",
    category: "Peaks",
    position: 3,
  },
  {
    name: "Ohio",
    slug: "ohio",
    category: "Peaks",
    position: 4,
  },
  {
    name: "Red Mountain 3, 2, 1",
    slug: "red-mountain-3-2-1",
    category: "Peaks",
    position: 5,
  },
  {
    name: "Tower",
    slug: "tower",
    category: "Peaks",
    position: 6,
  },
  {
    name: "Handies",
    slug: "handies",
    category: "Peaks",
    position: 7,
  },
  {
    name: "King Solomon / Little Giant",
    slug: "king-solomon-little-giant",
    category: "Peaks",
    position: 8,
  },
  {
    name: "Round Mountain",
    slug: "round-mountain",
    category: "Peaks",
    position: 9,
  },
  {
    name: "Galena",
    slug: "galena",
    category: "Peaks",
    position: 10,
  },
  {
    name: "Treasure Mountain",
    slug: "treasure-mountain",
    category: "Peaks",
    position: 11,
  },
  {
    name: "Colorado Trail",
    slug: "colorado-trail",
    category: "Notable Mentions",
    position: 1,
  },
  {
    name: "Richmond Trail ➡️ Camp Bird ➡️ Hayden",
    slug: "richmond-trail-camp-bird-hayden",
    category: "Notable Mentions",
    position: 2,
  },
  {
    name: "Hardrock 100",
    slug: "hardrock-100",
    category: "Notable Mentions",
    position: 3,
  },
  {
    name: "Animas Forks",
    slug: "animas-forks",
    category: "Notable Mentions",
    position: 4,
  },
  {
    name: "Outdoor Planetarium",
    slug: "outdoor-planetarium",
    category: "Notable Mentions",
    position: 5,
  },
  {
    name: "Greene St",
    slug: "greene-st",
    category: "Funnel Cakes",
    position: 1,
  },
  {
    name: "Blair St",
    slug: "blair-st",
    category: "Funnel Cakes",
    position: 2,
  },
  {
    name: "Train Arrival",
    slug: "train-arrival",
    category: "Funnel Cakes",
    position: 3,
  },
  {
    name: "Durango",
    slug: "durango",
    category: "Funnel Cakes",
    position: 4,
  },
];

// Function to create markdown files
function createMarkdown(activity) {
  const { name, slug, category, position } = activity;
  const content = `---
name: "${name}"
slug: "${slug}"
category: "${category}"
position: ${position}
---

Copy goes here
`;

  const dirPath = path.join(__dirname, "src/app/stuff-to-do/activities");
  const filePath = path.join(dirPath, `${slug}.md`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing file for ${name}:`, err);
    } else {
      console.log(`Created ${filePath}`);
    }
  });
}

// Create markdown files for each activity
activities.forEach(createMarkdown);
