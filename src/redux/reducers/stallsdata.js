import Stall from "../../_models/StallModel";

import FishMan from "../../assets/fishman.png"
import MeatMan from "../../assets/meatman.png"
import Fish from "../../assets/fish.png"
import Chicken from "../../assets/chicken.png"

import { UPDATE_ARTICLES_STAGE } from "../actionTypes";

const initialState = {
  stageNumber: 0,
  stalls: [{
    id:123,
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
    items: [
      {
        id: 1,
        name: "Saumon",
        price: 2.30,
        image: Fish
      },
      {
        id: 2,
        name: "Colin",
        price: 2.15,
        image: Fish
      },
      {
        id: 3,
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        id: 4,
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        id: 5,
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        id: 6,
        name: "Sol",
        price: 25.15,
        image: Fish
      },
      {
        id: 7,
        name: "Sol",
        price: 25.15,
        image: Fish
      },

    ]
  },
  {
    id: 8,
    name: "Boucher",
    color: "red",
    backgroundImage: MeatMan,
    items: [
      {
        id: 9,
        name: "Poulet",
        price: 4.30,
        image: Chicken
      },
      {
        id: 10,
        name: "Boeuf",
        price: 2.15,
        image: Chicken
      },
      {
        id: 11,
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
