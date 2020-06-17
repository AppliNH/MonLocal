import { UPDATE_ROUTE } from "../actionTypes";

const initialState = {
  route: window.location.pathname
};

export default function (state = initialState, action) {
  let nextState
  switch (action.type) {

    case UPDATE_ROUTE: {
      console.log("UPDATE_ROUTE")
      const { route } = action.payload;
      console.log(initialState.route)
      console.log(route)
      nextState = {
        ...state,
        route: route
      }
      return nextState || state;
    }

    default:
      return state;
  }
}
