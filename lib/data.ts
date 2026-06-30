export type Place = {
  id: number;
  name: string;
  category: string;
  area: string;
  price: string;
  budgetLevel: number;
  distanceFromTcdKm: number;
  latitude: number;
  longitude: number;
  description: string;
  address: string;
  tags: string[];
  mapsUrl: string;
  sourceUrl: string;
  sourceName: string;
};

export const places: Place[] = [
  {
    id: 1,
    name: "Cheap Ramen near TCD",
    category: "Food",
    area: "City Centre",
    price: "Under €15",
    budgetLevel: 2,
    distanceFromTcdKm: 0.8,
    latitude: 53.3438,
    longitude: -6.2646,
    description:
      "A student-friendly ramen spot close to Trinity. Good for a quick dinner after lectures or before a night out.",
    address: "City Centre, Dublin",
    tags: ["Asian food", "Cheap", "Near TCD"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com/maps",
    sourceName: "Google Maps",
  },
  {
    id: 2,
    name: "Study Café near Trinity",
    category: "Café",
    area: "Near TCD",
    price: "Under €10",
    budgetLevel: 1,
    distanceFromTcdKm: 0.3,
    latitude: 53.3445,
    longitude: -6.2589,
    description:
      "A quiet café suitable for studying, coffee breaks and small group work near campus.",
    address: "Near Trinity College Dublin",
    tags: ["Study spot", "Coffee", "Quiet"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
  },
  {
    id: 3,
    name: "Free Comedy Night",
    category: "Event",
    area: "Temple Bar",
    price: "Free",
    budgetLevel: 0,
    distanceFromTcdKm: 0.9,
    latitude: 53.3456,
    longitude: -6.2642,
    description:
      "A free evening comedy event in central Dublin. Good for students looking for something affordable to do at night.",
    address: "Temple Bar, Dublin",
    tags: ["Comedy", "Nightlife", "Free"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.eventbrite.ie",
    sourceName: "Eventbrite",
  },
  {
    id: 4,
    name: "Student Friendly Pub",
    category: "Pub",
    area: "Camden",
    price: "Under €20",
    budgetLevel: 2,
    distanceFromTcdKm: 1.5,
    latitude: 53.3368,
    longitude: -6.2651,
    description:
      "A casual pub option for groups, drinks and late evening plans around Camden.",
    address: "Camden Street, Dublin",
    tags: ["Drinks", "Group-friendly", "Open late"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.instagram.com",
    sourceName: "Instagram",
  },
  {
    id: 5,
    name: "Free Museum Afternoon",
    category: "Event",
    area: "City Centre",
    price: "Free",
    budgetLevel: 0,
    distanceFromTcdKm: 0.7,
    latitude: 53.3419,
    longitude: -6.2522,
    description:
      "A free cultural activity idea for students who want something low-cost to do during the afternoon.",
    address: "City Centre, Dublin",
    tags: ["Free", "Culture", "Rainy day"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
  },
  {
    id: 6,
    name: "Late Night Pizza Spot",
    category: "Food",
    area: "Temple Bar",
    price: "Under €20",
    budgetLevel: 2,
    distanceFromTcdKm: 1.0,
    latitude: 53.3451,
    longitude: -6.2668,
    description:
      "A casual late-night food option for students after events, pubs or society nights.",
    address: "Temple Bar, Dublin",
    tags: ["Open late", "Cheap", "Group-friendly"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com/maps",
    sourceName: "Google Maps",
  },
  {
    id: 7,
    name: "Weekend Food Market",
    category: "Event",
    area: "Smithfield",
    price: "Under €10",
    budgetLevel: 1,
    distanceFromTcdKm: 2.0,
    latitude: 53.3489,
    longitude: -6.2782,
    description:
      "A weekend market idea for food, small bites and casual exploring with friends.",
    address: "Smithfield, Dublin",
    tags: ["Weekend", "Food", "Outdoor"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.eventbrite.ie",
    sourceName: "Eventbrite",
  },
  {
    id: 8,
    name: "Quiet Study Library Spot",
    category: "Café",
    area: "Near TCD",
    price: "Free",
    budgetLevel: 0,
    distanceFromTcdKm: 0.2,
    latitude: 53.3439,
    longitude: -6.2546,
    description:
      "A quiet study-friendly spot near campus for focused work, reading and revision.",
    address: "Near Trinity College Dublin",
    tags: ["Study spot", "Free", "Quiet"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
  },
  {
    id: 9,
    name: "Rainy Day Board Game Café",
    category: "Café",
    area: "Rathmines",
    price: "Under €20",
    budgetLevel: 2,
    distanceFromTcdKm: 2.5,
    latitude: 53.3243,
    longitude: -6.2657,
    description:
      "A cosy rainy-day idea for students who want something social but not too expensive.",
    address: "Rathmines, Dublin",
    tags: ["Rainy day", "Group-friendly", "Coffee"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.instagram.com",
    sourceName: "Instagram",
  },
  {
    id: 10,
    name: "Outdoor Walk and Picnic Spot",
    category: "Event",
    area: "City Centre",
    price: "Free",
    budgetLevel: 0,
    distanceFromTcdKm: 1.2,
    latitude: 53.3391,
    longitude: -6.2601,
    description:
      "A free outdoor plan idea for sunny days, short walks and low-budget student meetups.",
    address: "City Centre, Dublin",
    tags: ["Free", "Outdoor", "Date spot"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
  },
  {
  id: 11,
  name: "Kaph",
  category: "Café",
  area: "City Centre",
  price: "Under €10",
  budgetLevel: 1,
  distanceFromTcdKm: 0.7,
  latitude: 53.3427,
  longitude: -6.2635,
  description:
    "A city-centre coffee shop near Trinity with upstairs seating, useful for solo study sessions, coffee breaks and light work.",
  address: "31 Drury St, Dublin 2, D02 Y684",
  tags: ["Study spot", "Coffee", "Near TCD", "City Centre"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kaph%2031%20Drury%20Street%20Dublin",
  sourceUrl: "https://kaph.ie/",
  sourceName: "Official website",
},
{
  id: 12,
  name: "The Buttery",
  category: "Food",
  area: "Near TCD",
  price: "Under €10",
  budgetLevel: 1,
  distanceFromTcdKm: 0.1,
  latitude: 53.3439,
  longitude: -6.2565,
  description:
    "A convenient on-campus food option for Trinity students, useful for quick meals between lectures and affordable campus lunches.",
  address: "Trinity College Dublin, College Green, Dublin 2",
  tags: ["Student-friendly", "Cheap", "Near TCD", "Campus food"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The%20Buttery%20Trinity%20College%20Dublin",
  sourceUrl: "https://www.tcd.ie/about/return-to-campus/whats-open/",
  sourceName: "Official website",
},
{
  id: 13,
  name: "National Gallery of Ireland",
  category: "Event",
  area: "City Centre",
  price: "Free",
  budgetLevel: 0,
  distanceFromTcdKm: 0.8,
  latitude: 53.3409,
  longitude: -6.2527,
  description:
    "A free city-centre gallery near Trinity, useful for rainy days, solo visits, casual cultural plans and low-budget student activities.",
  address: "Merrion Square West, Dublin 2",
  tags: ["Free", "Culture", "Rainy day", "Near TCD"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=National%20Gallery%20of%20Ireland%20Merrion%20Square%20West%20Dublin",
  sourceUrl: "https://www.nationalgallery.ie/",
  sourceName: "Official website",
},
];

// 0 = Free
//1 = Under €10
//2 = Under €20
//9 = Any