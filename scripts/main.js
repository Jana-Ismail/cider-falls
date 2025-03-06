// This module will generate the html structure for the main container,
// it will utilize the html component functions to generate and situate html dynamically from the database object,
// it will grab hold of the #main-container in the DOM,
// and it will update the innerHTML of the #main-container with the newly generated html.

import { GuestList } from "./Guests.js";
import { ParkAreaSections } from "./ParkAreas.js";

const mainContainer = document.querySelector("#main-container")
const mainContainerHTML = `
    <h2 class="park-area-sections-header">Park Areas</h2>
        ${ParkAreaSections()}
    <h2 class="guest-list-section">Guests In Park</h2>
        ${GuestList()}
`

mainContainer.innerHTML = mainContainerHTML