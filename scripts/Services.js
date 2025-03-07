import { getServices } from "./database.js";

const services = getServices()

export const ServicesList = () => {
    let html = `<div class="services-list">Park Services: `

    html += services.map(service => service.name).join(", ")

    html += `</div>`

    return html
}