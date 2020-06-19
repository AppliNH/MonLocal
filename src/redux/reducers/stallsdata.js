import Stall from "../../_models/StallModel";

import FishMan from "../../assets/fishman.png"
import MeatMan from "../../assets/meatman.png"
import Fish from "../../assets/fish.png"
import Chicken from "../../assets/chicken.png"

import { UPDATE_ARTICLES_STAGE } from "../actionTypes";

const initialState = {
  stageNumber: 0,
  stalls: [{
    name: "",
    color: "",
    backgroundImage: "",
    items: []
  },
  {
    name: "Poissonier",
    color: "#3583be",
    backgroundImage: FishMan,
    items: [
      {
        name: "Saumon",
        price: 2.30,
        image: Fish
      },
      {
        name: "Colin",
        price: 2.15,
        image: Fish
      },
      {
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      
    ]
  },
  {
    name: "Boucher",
    color: "red",
    backgroundImage: MeatMan,
    items: [
      {
        name: "Poulet",
        price: 4.30,
        image: Chicken
      },
      {
        name: "Boeuf",
        price: 2.15,
        image: Chicken
      },
      {
        name: "Porc",
        price: 2.5,
        image: Chicken
      },
    ]
  }
  ]
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
