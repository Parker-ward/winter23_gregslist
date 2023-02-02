import { appState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawHouse() {
  setText ('listingModalLabel', appState.house.name)
}


export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')
    appState.on('house', _drawHouse)
  }

  show(){
    let houses = appState.houses
    let template = ''
    houses.forEach(house => template += house.template)
    setHTML('listings', template)
  }

  setActiveHouse(houseid){
    try {
      // console.log('am I working', houseid);
      housesService.setActiveHouse(houseid)
    } catch (error) {
      Pop.error(error)
    }
  }
  

}
