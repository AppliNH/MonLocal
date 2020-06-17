import { UPDATE_ROUTE } from "./actionTypes";

export const updateRoute = content => ({
  type: UPDATE_ROUTE,
  payload: {
    route:content
  }
});
