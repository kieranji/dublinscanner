# DublinScanner Data Collection Template

This file is used to collect real Dublin places, events, deals and student-friendly activities before moving the data into a database.

## Required Fields

Each item should include:

- id
- name
- category
- area
- price
- budgetLevel
- distanceFromTcdKm
- latitude
- longitude
- description
- address
- tags
- mapsUrl
- sourceUrl
- sourceName

## Category Options

Use one of:

- Food
- Café
- Event
- Pub
- Study
- Outdoor
- Deal

## Budget Level

Use:

- 0 = Free
- 1 = Under €10
- 2 = Under €20
- 3 = Under €30
- 9 = Any / unknown

## Source Name Options

Use one of:

- Google Maps
- Eventbrite
- Instagram
- Official website
- Manual curated

## Tag Ideas

Useful tags:

- Near TCD
- Cheap
- Free
- Study spot
- Quiet
- Open late
- Group-friendly
- Date spot
- Rainy day
- Outdoor
- Weekend
- Asian food
- Coffee
- Culture
- Nightlife
- Student-friendly

## Example Item

```ts
{
  id: 11,
  name: "Example Dublin Place",
  category: "Food",
  area: "City Centre",
  price: "Under €20",
  budgetLevel: 2,
  distanceFromTcdKm: 0.8,
  latitude: 53.3438,
  longitude: -6.2646,
  description:
    "Short description of why this place is useful for Dublin students.",
  address: "City Centre, Dublin",
  tags: ["Cheap", "Near TCD", "Group-friendly"],
  mapsUrl: "https://www.google.com/maps",
  sourceUrl: "https://example.com",
  sourceName: "Google Maps",
}