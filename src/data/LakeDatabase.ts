import type { Lake } from "../models/Lake";

export const LakeDatabase: Lake[] = [
  {
    id: "lake_st_louis",
    name: "Lake St. Louis",

    latitude: 45.3816,
    longitude: -73.9458,

    species: [
      "Walleye",
      "Northern Pike",
      "Smallmouth Bass",
      "Largemouth Bass",
      "Yellow Perch",
      "Channel Catfish",
    ],

    shoreFishing: true,
    parking: true,

    averageDepth: 7,

    bottomType: "Mixed",

    weeds: "Moderate",

    current: "Slow",

    bestMonths: [4, 5, 6, 7, 8, 9, 10],

    bestWindDirections: ["W", "SW", "NW"],

    techniques: [
      "Slip Float",
      "Jig",
      "Drop Shot",
      "Crankbait",
    ],

    recommendedLures: [
      "Paddle Tail",
      "Minnow",
      "Tube Jig",
      "Curly Tail Grub",
    ],

    notes: "Excellent shore fishing around Pointe-des-Cascades.",

    accessPoints: [
      {
        id: "pdc_east_pier",
        name: "Pointe-des-Cascades East Pier",

        latitude: 45.3318,
        longitude: -73.9606,

        parking: true,

        walkingDistance: 60,

        shoreType: "Rock",

        structure: [
          "Pier",
          "Current",
          "Drop-off",
        ],

        castDirections: [
          "NW",
          "W",
        ],

        averageDepth: 3.5,

        species: [
          "Walleye",
          "Smallmouth Bass",
          "Yellow Perch",
        ],

        techniques: [
          "Slip Float",
          "Jig",
        ],

        recommendedLures: [
          "Paddle Tail",
          "Minnow",
        ],

        notes:
          "Excellent dawn and evening location.",
      },
    ],
  },

  {
    id: "lac_des_deux_montagnes",
    name: "Lac des Deux Montagnes",

    latitude: 45.4867,
    longitude: -74.0025,

    species: [
      "Walleye",
      "Northern Pike",
      "Muskie",
      "Smallmouth Bass",
      "Yellow Perch",
    ],

    shoreFishing: true,

    parking: true,

    averageDepth: 8,

    bottomType: "Mixed",

    weeds: "Moderate",

    current: "Slow",

    bestMonths: [5, 6, 7, 8, 9, 10],

    bestWindDirections: ["W", "NW"],

    techniques: [
      "Slip Float",
      "Jig",
      "Spinner",
    ],

    recommendedLures: [
      "Paddle Tail",
      "Twister Tail",
      "Minnow",
    ],

    notes: "Excellent spring and fall walleye fishing.",

    accessPoints: [],
  },

  {
    id: "ottawa_river",
    name: "Ottawa River",

    latitude: 45.4678,
    longitude: -74.0420,

    species: [
      "Walleye",
      "Northern Pike",
      "Muskie",
      "Channel Catfish",
      "Smallmouth Bass",
    ],

    shoreFishing: true,

    parking: true,

    averageDepth: 10,

    bottomType: "Rock",

    weeds: "Light",

    current: "Moderate",

    bestMonths: [5, 6, 7, 8, 9, 10],

    bestWindDirections: ["SW", "W"],

    techniques: [
      "Bottom Jig",
      "Slip Float",
      "Crankbait",
    ],

    recommendedLures: [
      "Paddle Tail",
      "Minnow",
      "Deep Diver",
    ],

    notes: "Very productive around current seams.",

    accessPoints: [],
  },

  {
    id: "ste_anne_canal",
    name: "Sainte-Anne-de-Bellevue Canal",

    latitude: 45.4064,
    longitude: -73.9478,

    species: [
      "Walleye",
      "Yellow Perch",
      "Smallmouth Bass",
    ],

    shoreFishing: true,

    parking: true,

    averageDepth: 4,

    bottomType: "Rock",

    weeds: "Light",

    current: "Moderate",

    bestMonths: [4, 5, 6, 9, 10],

    bestWindDirections: ["W"],

    techniques: [
      "Slip Float",
      "Jig",
    ],

    recommendedLures: [
      "Minnow",
      "Tube Jig",
    ],

    notes: "Excellent evening fishing.",

    accessPoints: [],
  },

  {
    id: "cap_st_jacques",
    name: "Cap-Saint-Jacques",

    latitude: 45.4895,
    longitude: -73.8778,

    species: [
      "Northern Pike",
      "Smallmouth Bass",
      "Yellow Perch",
    ],

    shoreFishing: true,

    parking: true,

    averageDepth: 5,

    bottomType: "Sand",

    weeds: "Heavy",

    current: "None",

    bestMonths: [5, 6, 7, 8, 9],

    bestWindDirections: ["SW"],

    techniques: [
      "Spinnerbait",
      "Texas Rig",
    ],

    recommendedLures: [
      "Spinnerbait",
      "Paddle Tail",
    ],

    notes: "Very good pike location.",

    accessPoints: [],
  },
];