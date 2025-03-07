// Database will be an object stored in a `database` const variable.
// Each key represents an entity in the ERD 
// Each key will store an array of objects,
// and each array will contain objects representing instances of that entity.

const database = {
    parkAreas: [
      { id: 1, title: "The Lodge" },
      { id: 2, title: "Lost Wolf Hiking Trail" },
      { id: 3, title: "Chamfort River" },
      { id: 4, title: "Gander River" },
      { id: 5, title: "Campgrounds" },
      { id: 6, title: "Pine Bluff Trails" }
    ],
    services: [
      { id: 1, name: "Lodging" },
      { id: 2, name: "Parking" },
      { id: 3, name: "Information" },
      { id: 4, name: "Picnicking" },
      { id: 5, name: "Hiking" },
      { id: 6, name: "Rock Climbing" },
      { id: 7, name: "Rafting" },
      { id: 8, name: "Canoeing" },
      { id: 9, name: "Fishing" },
      { id: 10, name: "Zip Lines" }
    ],
    parkAreaServices: [
      { id: 1, parkAreaId: 1, serviceId: 1 }, // The Lodge - Lodging
      { id: 2, parkAreaId: 1, serviceId: 2 }, // The Lodge - Parking
      { id: 3, parkAreaId: 1, serviceId: 3 }, // The Lodge - Information
      { id: 4, parkAreaId: 1, serviceId: 4 }, // The Lodge - Picnicking
      { id: 5, parkAreaId: 2, serviceId: 5 }, // Lost Wolf Hiking Trail - Hiking
      { id: 6, parkAreaId: 2, serviceId: 4 }, // Lost Wolf Hiking Trail - Picnicking
      { id: 7, parkAreaId: 2, serviceId: 6 }, // Lost Wolf Hiking Trail - Rock Climbing
      { id: 8, parkAreaId: 3, serviceId: 7 }, // Chamfort River - Rafting
      { id: 9, parkAreaId: 3, serviceId: 8 }, // Chamfort River - Canoeing
      { id: 10, parkAreaId: 3, serviceId: 9 }, // Chamfort River - Fishing
      { id: 11, parkAreaId: 4, serviceId: 9 }, // Gander River - Fishing
      { id: 12, parkAreaId: 4, serviceId: 5 }, // Gander River - Hiking
      { id: 13, parkAreaId: 5, serviceId: 3 }, // Campgrounds - Information
      { id: 14, parkAreaId: 5, serviceId: 1 }, // Campgrounds - Lodging
      { id: 15, parkAreaId: 5, serviceId: 2 }, // Campgrounds - Parking
      { id: 16, parkAreaId: 6, serviceId: 5 }, // Pine Bluff Trails - Hiking
      { id: 17, parkAreaId: 6, serviceId: 4 }, // Pine Bluff Trails - Picnicking
      { id: 18, parkAreaId: 6, serviceId: 10 } // Pine Bluff Trails - Zip Lines
    ],
    guests: [
      { id: 1, firstName: "Alice", lastName: "Smith", parkAreaId: 3 },
      { id: 2, firstName: "Bob", lastName: "Johnson", parkAreaId: 1 },
      { id: 3, firstName: "Charlie", lastName: "Davis", parkAreaId: 5 },
      { id: 4, firstName: "Diana", lastName: "Brown", parkAreaId: 6 },
      { id: 5, firstName: "Ethan", lastName: "Wilson", parkAreaId: 2 },
      { id: 6, firstName: "Fiona", lastName: "Taylor", parkAreaId: 4 },
      { id: 7, firstName: "George", lastName: "Anderson", parkAreaId: 3 },
      { id: 8, firstName: "Hannah", lastName: "Thomas", parkAreaId: 1 },
      { id: 9, firstName: "Isaac", lastName: "Martinez", parkAreaId: 6 },
      { id: 10, firstName: "Julia", lastName: "Harris", parkAreaId: 5 },
      { id: 11, firstName: "Kevin", lastName: "Clark", parkAreaId: 2 },
      { id: 12, firstName: "Laura", lastName: "Rodriguez", parkAreaId: 4 },
      { id: 13, firstName: "Michael", lastName: "Lewis", parkAreaId: 3 },
      { id: 14, firstName: "Nina", lastName: "Walker", parkAreaId: 1 },
      { id: 15, firstName: "Oliver", lastName: "Hall", parkAreaId: 1 },
      { id: 16, firstName: "Paula", lastName: "Allen", parkAreaId: 5 },
      { id: 17, firstName: "Quinn", lastName: "Young", parkAreaId: 2 },
      { id: 18, firstName: "Rachel", lastName: "King", parkAreaId: 4 },
      { id: 19, firstName: "Samuel", lastName: "Wright", parkAreaId: 3 },
      { id: 20, firstName: "Tina", lastName: "Scott", parkAreaId: 1 },
      { id: 21, firstName: "Umar", lastName: "Green", parkAreaId: 6 },
      { id: 22, firstName: "Victoria", lastName: "Adams", parkAreaId: 4 },
      { id: 23, firstName: "William", lastName: "Baker", parkAreaId: 2 },
      { id: 24, firstName: "Xena", lastName: "Nelson", parkAreaId: 4 },
      { id: 25, firstName: "Yusuf", lastName: "Carter", parkAreaId: 4 },
      { id: 26, firstName: "Zara", lastName: "Mitchell", parkAreaId: 1 },
      { id: 27, firstName: "Adam", lastName: "Perez", parkAreaId: 4 },
      { id: 28, firstName: "Bella", lastName: "Roberts", parkAreaId: 5 },
      { id: 29, firstName: "Caleb", lastName: "Gonzalez", parkAreaId: 2 },
      { id: 30, firstName: "Daisy", lastName: "Flores", parkAreaId: 4 }
    ]
  };

// Define and export a getter function for each entity
// Each getter function will return a copy of the array of objects
// Each getter function will have no parameters, and it will reference the `database` object inside the body of the function

// parkAreas getter function
export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

// services getter function
export const getServices = () => {
    return database.services.map(service => ({...service}))
}

// guests getter function
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaService => ({...parkAreaService}))
}