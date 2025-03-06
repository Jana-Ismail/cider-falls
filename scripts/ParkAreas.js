// Import the ParkAreas getter function from `database.js`
import { getParkAreas } from "./database.js"

// Call getParkAreas and store return value in a new variable
const parkAreas = getParkAreas()

// Define and export a function to generate html for the ParkArea resources in the `database` object
const ParkAreaSections = () => {
    // The function will map through the parkAreas array,
    // generating html for each Park Area title as well as its Park Area Services, and join it into a single string of hmtl.
    let html = `<section class"park-area-section">`

    html += parkAreas.map(parkArea => {
        // Each parkArea will need to map through the Park Area Services to find
        // the services with the same parkAreaId
        // Logic will go here, and returned below
        return `
            <h2 class="park-area-title">${parkArea.title}</h2>
        `
    }).join("")

    html += `</section>`
    
    // The function will return the string of html.
    return html
}