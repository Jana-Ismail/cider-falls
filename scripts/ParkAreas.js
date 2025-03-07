// Import the ParkAreas, Services, ParkAreaServices, and Guests getter functions from `database.js`
import { getGuests, getParkAreaServices, getParkAreas, getServices } from "./database.js"
import { findParkAreaServices, getServicesData } from "./ParkAreaServices.js"

// Call getParkAreas, getParkAraServices, and getServices and store each returned array of objects copy in a new variable
const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()
const services = getServices()

// Define and export a function to generate html sections for each ParkArea entity in the `database` object
export const ParkAreaSections = () => {
    // Map through the parkAreas array,
    // generating html for each Park Area title + its Park Area Services, and join it into a single string of html.
    let html = ""

    html += parkAreas.map(parkArea => {
        // Call findParkAreaServices() to find the services for the current parkArea being mapped
        const foundParkAreaServices = findParkAreaServices(parkArea.id, parkAreaServices)

        // Call getServicesData() to get the full object for each service with the serviceId in the parkAreaServicesArr returned by the findParkAreaServices function
        const parkAreaServicesData = getServicesData(services, foundParkAreaServices)
        return `
        <section class="park-area-section" id="${parkArea.id}">
            <h3 class="park-area-title"
                data-type="parkAreaTitle"
                data-park-area-id="${parkArea.id}"
            >${parkArea.title}</h3>
            <ul class="park-area-services-list">
                ${parkAreaServicesData.map(service => `<li id="${service.id}">${service.name}</li>`).join("")}
            </ul>
        </section>
        `
    }).join("")
    
    // Return the string of html.
    return html
}

document.addEventListener(
    "click",
    (clickEvent => {
        const clickTarget = clickEvent.target
        
        const guests = getGuests()

        if (clickTarget.dataset.type === "parkAreaTitle") {
            const parkAreaId = parseInt(clickTarget.dataset.parkAreaId)
            const guestCount = guests.filter(guest => guest.parkAreaId === parkAreaId).length
            window.alert(`There are ${guestCount} guests in this area`)
        }
    })
)