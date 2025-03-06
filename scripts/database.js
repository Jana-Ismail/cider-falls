// Database will be an object stored in a `database` const variable,
// with each Resource as a key, and each key will have an array of objects
// as a value. Each object will have properties describing individual
// instances of that resource

// This module will define and export a getter function for each Resource that
// returns a copy of the array of objects
// There will be four getter functions: 1 for ParkAreas, 1 for Services, 1 for ParkAreaServices, and 1 for Guests
// Each getter function will have no parameters, and it will reference the `database` object inside the body of the function