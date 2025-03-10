// This module will generate the html structure for the main container,
// it will utilize the html component functions to generate and situate html dynamically from the database object,
// it will grab hold of the #main-container in the DOM,
// and it will update the innerHTML of the #main-container with the newly generated html.

import { GuestList } from "./Guests.js";
import { ParkAreaSections } from "./ParkAreas.js";
import { ServicesList } from "./Services.js";

const mainContainer = document.querySelector("#main-container")

const mainContainerHTML = `
    <section class="services-list-section">
        ${ServicesList()}
    </section>
    <div class="container">
        <section class="park-areas-section">
            <h2 class="park-areas-section-header">Park Areas</h2>
            <div class="park-area-sections">
                ${ParkAreaSections()}
            </div>
        </section>
        <section class="guest-list-section">
            <h2 class="guest-list-header">Guests In Park</h2>
            <div class="guest-list">
                ${GuestList()}
            </div>
        </section>
    </div>
`


mainContainer.innerHTML = mainContainerHTML