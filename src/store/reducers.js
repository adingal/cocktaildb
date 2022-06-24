import { combineReducers } from 'redux'
import {
  COCKTAIL_REQUEST,
  COCKTAIL_SUCCESS,
  COCKTAIL_FAIL,
} from 'store/actions'

const initialState = {
  drinks: [],
  isLoading: false,
  error: null,
}

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case COCKTAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case COCKTAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drinks: action.payload.drinks,
      }
    case COCKTAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    default:
      return state
  }
}

export const reducers = combineReducers({
  cocktails: cocktailReducer,
})
