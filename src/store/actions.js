export const COCKTAIL_REQUEST = 'COCKTAIL_REQUEST'
export const COCKTAIL_SUCCESS = 'COCKTAIL_SUCCESS'
export const COCKTAIL_FAIL = 'COCKTAIL_FAIL'

export const fetchCocktailRequest = () => {
  return {
    type: COCKTAIL_REQUEST,
  }
}

export const fetchCocktailSuccess = (payload) => {
  return {
    type: COCKTAIL_SUCCESS,
    payload,
  }
}

export const fetchCocktailFail = (payload) => {
  return {
    type: COCKTAIL_FAIL,
    payload,
  }
}
