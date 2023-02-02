import { appState } from "../AppState.js";

class HousesService { 
    setActiveHouse(houseid){
        const house = appState.houses.find(home => home.id == houseid)
        appState.house = house
        console.log('sup from the service', appState.house);
    }
}

// singleton pattern more on this later
export const housesService = new HousesService()