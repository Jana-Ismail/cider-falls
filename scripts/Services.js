import { findParkAreaServicesFromServiceId, getParkAreasData } from "./ParkAreaServices.js";
import { getParkAreaServices, getParkAreas, getServices } from "./database.js";

const services = getServices()

export const ServicesList = () => {
    let html = `<div class="services-list">Park Services: `

    html += services.map(service => {
        return `<span class="service-list-item"
                        data-type="service"
                        data-service-id="${service.id}"
                        data-service-name="${service.name}"
        >${service.name}</span>`
    }).join(", ")

    html += `</div>`

    return html
}

document.addEventListener(
    "click",
    (clickEvt) => {
        const clickTarget = clickEvt.target

        const parkAreas = getParkAreas()
        const parkAreaServices = getParkAreaServices()

        if (clickTarget.dataset.type === "service") {
            // console.log("clicked!")
            // First, get the id of the park service that was clicked on
            // which is stored in meta-data, and store it in a variable
            const serviceId = parseInt(clickTarget.dataset.serviceId)
            const serviceName = clickTarget.dataset.serviceName

            // Then, call and store the array of parkAreaServices objects with its getter function
            const parkAreaServices = getParkAreaServices()
            const parkAreas = getParkAreas()

            // Then, filter out the parkAreaServices with the same serviceId property as the service that was clicked on
            const foundParkAreaServices = findParkAreaServicesFromServiceId(serviceId, parkAreaServices)

            // Then, get the parkArea data from the foundParkAreaServices
            const parkAreasData = getParkAreasData(parkAreas, foundParkAreaServices)

            // Map through the parkArea data and join the titles of each park area object into a single comma-separated string
            const parkAreaTitles = parkAreasData.map(parkAreaObj => parkAreaObj.title).join(", ")
            
            // Set a window alert to list the park areas offering the service that is clicked on to the user
            window.alert(`${serviceName} is offered in ${parkAreaTitles}`)
        }
    }
)