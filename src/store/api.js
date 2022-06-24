import axios from 'axios'
import {
  fetchCocktailRequest,
  fetchCocktailSuccess,
  fetchCocktailFail,
} from 'store/actions'

export const fetchCocktail = (cocktailName) => {
  return (dispatch) => {
    dispatch(fetchCocktailRequest())
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
        params: {
          s: cocktailName,
        },
      })
      .then((response) => dispatch(fetchCocktailSuccess(response.data)))
      .catch((error) => dispatch(fetchCocktailFail(error)))
  }
}
