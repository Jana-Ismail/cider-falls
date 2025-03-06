// This module will define and export a function that generates
// html for the Guest resources in the `database` object

// The module will import the Guests getter function from `database.js`,
// and it will invoke that function, storing it in a new variable
import { getGuests } from "./database.js";

const guests = getGuests()

export const GuestList = () => {
    // Declare and initialize an html variable to an <aside> container
    let html = ``

    // Map through guests array of objects, generating html for the first and last name properties
    // of the current guest being iterated, join the new array of html strings into a single string of html, 
    // and append to the html variable
    html += guests.map(guest => {
        return `
            <li class="guest-list-item" id="${guest.id}">${guest.firstName} ${guest.lastName}</li>
        `
    }).join("")

    return html
}