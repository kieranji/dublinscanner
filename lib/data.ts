export type Place = {
  id: number;
  name: string;
  category: string;
  area: string;
  price: string;
  budgetLevel: number;
  description: string;
  address: string;
  tags: string[];
  mapsUrl: string;
  sourceUrl: string;
};

export const places: Place[] = [
  {
    id: 1,
    name: "Cheap Ramen near TCD",
    category: "Food",
    area: "City Centre",
    price: "Under €15",
    budgetLevel: 2,
    description:
      "A student-friendly ramen spot close to Trinity. Good for a quick dinner after lectures or before a night out.",
    address: "City Centre, Dublin",
    tags: ["Asian food", "Cheap", "Near TCD"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
  },
  {
    id: 2,
    name: "Study Café near Trinity",
    category: "Café",
    area: "Near TCD",
    price: "Under €10",
    budgetLevel: 1,
    description:
      "A quiet café suitable for studying, coffee breaks and small group work near campus.",
    address: "Near Trinity College Dublin",
    tags: ["Study spot", "Coffee", "Quiet"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
  },
  {
    id: 3,
    name: "Free Comedy Night",
    category: "Event",
    area: "Temple Bar",
    price: "Free",
    budgetLevel: 0,
    description:
      "A free evening comedy event in central Dublin. Good for students looking for something affordable to do at night.",
    address: "Temple Bar, Dublin",
    tags: ["Comedy", "Nightlife", "Free"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
  },
  {
    id: 4,
    name: "Student Friendly Pub",
    category: "Pub",
    area: "Camden",
    price: "Under €20",
    budgetLevel: 2,
    description:
      "A casual pub option for groups, drinks and late evening plans around Camden.",
    address: "Camden Street, Dublin",
    tags: ["Drinks", "Group-friendly", "Open late"],
    mapsUrl: "https://www.google.com/maps",
    sourceUrl: "https://www.google.com",
  },
];

// 0 = Free
//1 = Under €10
//2 = Under €20
//9 = Any