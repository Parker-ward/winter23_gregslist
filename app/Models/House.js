import { generateId } from "../Utils/generateId.js"


export class House {
    constructor(year, name, bedrooms, bathrooms, sqft, price, description, imgUrl){
        this.id = generateId()
        this.year = year
        this.name = name
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.sqft = sqft
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }

    get template(){
        return /*html*/`
        <div class="col-4">
        <div class="card" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
        <img class="img-fluid" src="${this.imgUrl}" alt="House">
        <span>$${this.price}</span><span>${this.name}</span><span>${this.year}</span>
        </div>
    </div>
        `
    }
}
