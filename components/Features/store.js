import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./Slices/recommendationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import sliderReducer from "./Slices/sliderSlice";
import roomReducer from "./Slices/roomSlice";
import searchReducer from "./search/searchSlice";
import calculationReducer from './Slices/calculationSlice'
import formReducer from './Slices/formSlice'
import FirstCardReducer from "./Slices/FIrstCardSlice";
import authReducer from "./auth/authSlice";
import profileReducer from "./Slices/profileSlice";
import selectedItemsReducer from './Slices/selectedItemsSlice'
import cartReducer from './Slices/cartSlice'
const sagaMiddleware = createSagaMiddleware();

const roomsReducer = (state = { selectedActivity: {} }, action) => {
  switch (action.type) {
    case "SET_SELECTED_ACTIVITY":
      return {
        ...state,
        selectedActivity: action.payload,
      };
    default:
      return state;
  }
};

// Action
export const setSelectedActivity = (payload) => ({
  type: "SET_SELECTED_ACTIVITY",
  payload,
});
export default roomsReducer;
export const store = configureStore({
  reducer: {
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
    FirstCard: FirstCardReducer,
    productWithSearch: searchReducer,
    auth: authReducer,
    rooms: roomsReducer,
    roomdetails: roomReducer,
    calculation:calculationReducer,
    form:formReducer,
    profile: profileReducer,
    selectedItems:selectedItemsReducer,
    cart:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
