export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    // Only changes the state object
    // Get a recipe by id
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}` // Get recipe information
    );
    const data = await res.json();

    // Error handling : If wrong ID
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // Recipe response format
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (e) {
    alert(e);
  }
};
