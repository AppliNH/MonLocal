import Stall from "../../_models/StallModel";

import FishMan from "../../assets/fishman.png"
import MeatMan from "../../assets/meatman.png"
import Fish from "../../assets/fish.png"
import Chicken from "../../assets/chicken.png"

import { UPDATE_ARTICLES_STAGE } from "../actionTypes";

const initialState = {
  stageNumber: 0,
  stalls: [{
    id: 123,
    name: "",
    color: "",
    backgroundImage: "",
    items: []
  },
  {
    id: 0,
    name: "Poissonier",
    color: "#3583be",
    backgroundImage: FishMan,
    categories: [{ id: 'A', name: "Poissons" }, { id: 'B', name: "Crustacés" },],
    items: [
      {
        id: 1,
        categoryID: "A",
        name: "Saumon",
        price: 2.30,
        image: Fish
      },
      {
        id: 2,
        categoryID: "A",
        name: "Colin",
        price: 2.15,
        image: Fish
      },
      {
        id: 3,
        categoryID: "A",
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        id: 78,
        categoryID: "A",
        name: "Cabillaud",
        price: 25.15,
        image: Fish
      },
      {
        id: 4,
        categoryID: "B",
        name: "Crabe",
        price: 5,
        image: "https://media.istockphoto.com/photos/crab-picture-id472497550?k=6&m=472497550&s=612x612&w=0&h=vPmV3MLiDTPNhflJUan5oIMle7ged4LhmMz6b8tbYAY="
      },
      {
        id: 5,
        categoryID: "B",
        name: "Langouste",
        price: 14,
        image: "https://img-3.journaldesfemmes.fr/Z3v02de5YtjSKrLfBJi8RPCTjio=/910x607/smart/19c9630f9a5041fb9252f89a94f2391a/ccmcms-jdf/10661857.jpg"
      },
      {
        id: 6,
        name: "Crevettes",
        price: 2.7,
        image: "https://www.boutique-paon.fr/1099-large_default/crevette-elevage-cuit-80-100-equateur-ou-autre-pays.jpg"
      }
    ]
  },
  {
    id: 8,
    name: "Boucher",
    color: "red",
    backgroundImage: MeatMan,
    categories: [{ id: 'A', name: "Viande Rouge" }, { id: 'B', name: "Viande blanche" },],
    items: [
      {
        id: 9,
        categoryID: "B",
        name: "Poulet",
        price: 4.30,
        image: Chicken
      },
      {
        id: 10,
        categoryID: "A",
        name: "Boeuf",
        price: 2.15,
        image: Chicken
      },
      {
        id: 11,
        categoryID: "A",
        name: "Porc",
        price: 2.5,
        image: Chicken
      },
    ]
  }
  ],
};

export default function (state = initialState, action) {
  let nextState
  switch (action.type) {

    case UPDATE_ARTICLES_STAGE: {
      const { stageNumber } = action.payload;
      nextState = {
        ...state,
        stageNumber: stageNumber
      }
      return nextState || state;
    }



    default:
      return state;
  }
}
