import { UPDATE_ROUTE, UPDATE_ARTICLES_STAGE } from "./actionTypes";

export const updateRoute = content => ({
  type: UPDATE_ROUTE,
  payload: {
    route:content
  }
});

export const updateArticlesStage = content => ({
  type: UPDATE_ARTICLES_STAGE,
  payload: {
    stageNumber:content
  }
});
