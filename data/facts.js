export const facts = [
  {
    id: 1,
    title: "Montreal is a city of bridges",
    description: "Montreal has more bridges than any other city in North America. Their total number exceeds 40.",
    category: "infrastructure",
    // image: require("../assets/images/facts/bridges.jpg"),
  },
  {
    id: 2,
    title: "Montreal is a great cultural capital",
    description: "Montreal is home to more than 100 festivals a year, including some of the largest in the world: the Montreal International Jazz Festival and Just for Laughs.",
    category: "culture",
    // image: require("../assets/images/facts/festivals.jpg"),
  },
  {
    id: 3,
    title: "A city in two languages",
    description: "Most Montrealers speak French, but the city also has a rich English-speaking heritage, and many people are bilingual.",
    category: "culture",
    // image: require("../assets/images/facts/languages.jpg"),
  },
  {
    id: 4,
    title: "Montreal is one of the largest underground cities",
    description: "Montreal has a huge underground network called RESO or La Ville Souterraine. This is one of the largest complexes of underground shopping and residential areas in the world.",
    category: "infrastructure",
    // image: require("../assets/images/facts/underground.jpg"),
  },
  {
    id: 5,
    title: "The first circus in the world 'Cirque du Soleil'",
    description: "Montreal became home to Cirque du Soleil, which was founded here in 1984. Since then, he has become world famous.",
    category: "entertainment",
    // image: require("../assets/images/facts/cirque.jpg"),
  },
  {
    id: 6,
    title: "Montreal is one of the greenest cities",
    description: "More than 20% of the city's territory is occupied by parks, in particular the famous Mount Royal — a must-have place for recreation and walks in the fresh air.",
    category: "environment",
    // image: require("../assets/images/facts/parks.jpg"),
  },
  {
    id: 7,
    title: "Montreal is the birthplace of heavy metal music",
    description: "Montreal is considered one of the cradles of music genres such as punk and hard rock. The city also became a center of popularity for heavy metal.",
    category: "culture",
    // image: require("../assets/images/facts/music.jpg"),
  },
  {
    id: 8,
    title: "A city with a unique winter style",
    description: "Thanks to the harsh winters, Montreal is known for its excellent winter fashion: the locals are very skilled at combining style and warmth.",
    category: "lifestyle",
    // image: require("../assets/images/facts/winter.jpg"),
  },
  {
    id: 9,
    title: "Montreal — 'the capital of the French language in Canada'",
    description: "Although Montreal is a multilingual city, French is the official language here. This is a city where French culture is actively reviving.",
    category: "culture",
    // image: require("../assets/images/facts/french.jpg"),
  },
  {
    id: 10,
    title: "Diversity of architecture",
    description: "Montreal is famous for its combination of old European architecture with modern skyscrapers, which creates a unique look of the city.",
    category: "architecture",
    // image: require("../assets/images/facts/architecture.jpg"),
  },
];

export const categories = [
  { id: 1, name: "culture", color: "#FF6B6B" },
  { id: 2, name: "infrastructure", color: "#4ECDC4" },
  { id: 3, name: "entertainment", color: "#FFD93D" },
  { id: 4, name: "environment", color: "#95E1D3" },
  { id: 5, name: "lifestyle", color: "#A8E6CF" },
  { id: 6, name: "architecture", color: "#DFE6E9" },
];

export const getFactsByCategory = (categoryName) => {
  return facts.filter(fact => fact.category === categoryName);
};

export const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};