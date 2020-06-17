import { UPDATE_ROUTE } from "../actionTypes";

const initialState = {
  route: window.location.pathname,
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

    default:
      return state;
  }
}
