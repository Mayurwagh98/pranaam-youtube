const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Arrays of message components
const subjects = [
  "Success",
  "Happiness",
  "Growth",
  "Learning",
  "Discipline",
  "Motivation",
  "Teamwork",
  "Creativity",
  "Mindfulness",
  "Innovation",
];

const verbs = [
  "comes from",
  "is driven by",
  "is achieved through",
  "depends on",
  "thrives with",
  "is fueled by",
  "is shaped by",
  "is enhanced by",
  "requires",
  "leads to",
];

const objects = [
  "hard work and dedication.",
  "a positive mindset.",
  "collaboration and support.",
  "clear goals and focus.",
  "continuous improvement.",
  "embracing challenges.",
  "staying consistent.",
  "thinking outside the box.",
  "effective communication.",
  "taking the first step.",
];
const emojis = [
  "💪",
  "🌟",
  "🚀",
  "✨",
  "🌈",
  "🔥",
  "🌱",
  "📚",
  "🧠",
  "❤️",
  "🤝",
  "🎯",
  "🛠️",
  "🏆",
  "🔑",
  "🌍",
  "⚡",
  "🎨",
  "🏋️",
  "💡",
];

// Function to generate a random meaningful message
export function generateRandomMessage() {
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];

  // Add a random emoji before and after the message
  const randomEmoji1 = emojis[Math.floor(Math.random() * emojis.length)];
  const randomEmoji2 = emojis[Math.floor(Math.random() * emojis.length)];

  return `${randomEmoji1} ${randomSubject} ${randomVerb} ${randomObject} ${randomEmoji2}`;
}