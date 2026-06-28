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
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
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
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
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
    sourceUrl: "https://www.google.com",
    sourceName: "Manual curated",
  },
];

// 0 = Free
//1 = Under €10
//2 = Under €20
//9 = Any