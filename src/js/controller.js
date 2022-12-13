import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling async/await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  const id = window.location.hash.slice(1); // Take id from hash

  try {
    if (!id) return;
    recipeView.renderSpinner();

    // Loading Recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    alert(e);
  }
};

window.addEventListener('hashchange', controlRecipes); // When hash changes
window.addEventListener('load', controlRecipes); // When page loads
