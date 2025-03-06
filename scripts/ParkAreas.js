// Import the ParkAreas getter function from `database.js`
import { getParkAreaServices, getParkAreas, getServices } from "./database.js"
import { findParkAreaServices, getServicesData } from "./ParkAreaServices.js"

// Call getParkAreas, getParkAraServices, and getServices and store each returned array of objects copy in a new variable
const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()
const services = getServices()

// Define and export a function to generate html sections for each ParkArea entity in the `database` object
const ParkAreaSections = () => {
    // The function will map through the parkAreas array,
    // generating html for each Park Area title as well as its Park Area Services, and join it into a single string of hmtl.
    let html = `<section class"park-area-section">`

    html += parkAreas.map(parkArea => {
        // Call findParkAreaServices() to find the services for the current parkArea being mapped
        const foundParkAreaServices = findParkAreaServices(parkArea.id, parkAreaServices)

        // Call getServicesData() to get the full object for each service with the serviceId in the parkAreaServicesArr returned by the findParkAreaServices function
        const parkAreaServicesData = getServicesData(services, foundParkAreaServices)
        return `
            <h2 class="park-area-title">${parkArea.title}</h2>
            <ul class="park-area-services-list>
                ${parkAreaServicesData.map(service => `<li>${service.name}</li>`)}
            </ul>
            
        `
    }).join("")

    html += `</section>`
    
    // The function will return the string of html.
    return html
}