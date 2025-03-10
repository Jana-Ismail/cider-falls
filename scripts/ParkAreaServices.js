// Import ParkAreas, Services, and ParkAreaServices getter functions from database.js
// import { getServices, getParkAreaServices } from "./database.js";

// Define and export a function that takes in the id of one Park Area and the copy of the parkAreaServicesArr as parameters
// that will filter out all parkAreaService objects that have a parkAreaId value that matches the parkAreaId passed in
export const findParkAreaServicesFromParkAreaId = (parkAreaId, parkAreaServicesArr) => {
    const foundParkAreaServices = parkAreaServicesArr.filter(parkAreaService => parkAreaId === parkAreaService.parkAreaId)

    return foundParkAreaServices
}

export const findParkAreaServicesFromServiceId = (serviceId, parkAreaServicesArr) => {
    const foundParkAreaServices = parkAreaServicesArr.filter(parkAreaService => parkAreaService.serviceId === serviceId)

    return foundParkAreaServices
}

export const getServicesData = (servicesArr, foundParkAreaServicesArr) => {
    const parkAreaServiceData = []

    for (const parkAreaService of foundParkAreaServicesArr) {
        for (const service of servicesArr) {
            if (parkAreaService.serviceId === service.id) {
                parkAreaServiceData.push(service)
            }
        }
    }

    return parkAreaServiceData
}

export const getParkAreasData = (parkAreasArr, foundParkAreaServicesArr) => {
    const parkAreaServiceData = []

    for (const parkAreaService of foundParkAreaServicesArr) {
        for (const parkArea of parkAreasArr) {
            if (parkAreaService.parkAreaId === parkArea.id) {
                parkAreaServiceData.push(parkArea)
            }
        }
    }

    return parkAreaServiceData
}