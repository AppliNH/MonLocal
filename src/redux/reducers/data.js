import { UPDATE_ROUTE, UPDATE_BASKET_CONTENT } from "../actionTypes";

const initialState = {
  route: window.location.pathname,
  basket: []
};

export default function (state = initialState, action) {
  let nextState
  switch (action.type) {

    case UPDATE_ROUTE: {
      const { route } = action.payload;
      nextState = {
        ...state,
        route: route
      }
      return nextState || state;
    }

    case UPDATE_BASKET_CONTENT: {
      const { itemID, quantity, add } = action.payload;

      var localBasket = initialState.basket;
      let item = localBasket.find(elem => elem.id == itemID);

      if (item) {
        localBasket.map(elem => {
          if (elem && elem.id == itemID) {
            add ? elem.quantity += quantity : elem.quantity -= quantity;
          }
        });
      } else {
        localBasket.push({ id: itemID, quantity: quantity })
      }

     let actualBasket = localBasket.filter(e => e.quantity > 0)
      
      nextState = {
        ...state,
        basket: actualBasket
      }
      return nextState || state;
    }

    default:
      return state;
  }
}
