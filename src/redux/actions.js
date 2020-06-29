import { UPDATE_ROUTE, UPDATE_ARTICLES_STAGE, UPDATE_BASKET_CONTENT, EMPTY_BASKET_CONTENT } from "./actionTypes";

export const updateRoute = content => ({
  type: UPDATE_ROUTE,
  payload: {
    route: content
  }
});

export const updateArticlesStage = content => ({
  type: UPDATE_ARTICLES_STAGE,
  payload: {
    stageNumber: content
  }
});

export const updateBasketContent = content => ({
  type: UPDATE_BASKET_CONTENT,
  payload: {
    itemID: content.itemID,
    quantity: content.quantity,
    add: content.add
  }
});
export const emptyBasketContent = () => ({
  type: EMPTY_BASKET_CONTENT
});


