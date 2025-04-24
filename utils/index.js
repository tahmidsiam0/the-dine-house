const getMostPopularCategories = (recipes, howMany) => {
  const categoryCount = {};

  recipes.forEach((recipe) => {
    categoryCount[recipe.category_id] =
      (categoryCount[recipe.category_id] || 0) + 1;
  });

  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, howMany);

  return sortedCategories.map((sortedCategory) => sortedCategory[0]);
};

const getCategoryByArrayOfIds = (categories, arrayOfIds) => {
  return categories.filter((category) => arrayOfIds.includes(category.id));
};

const getLatestRecipe = (recipes, howMany) => {
  const sortedRecipes = [...recipes]
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, howMany);
  return sortedRecipes;
};

const getIdByCategoryName = (categories, categoryName) => {
  return categories.find(
    (category) => category.name.toLowerCase() === categoryName.toLowerCase()
  ).id;
};

const getRecipesById = (recipes, id) =>
  recipes.filter((recipe) => recipe.category_id === id);

const getCategoryById = (categories, id) =>
  categories.find((category) => category.id === id);

const getRecipesByName = (recipes, name) =>
  recipes.filter((recipe) => recipe.title === name);

const dateFormatter = (date) => {
  const dateObj = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObj.toLocaleDateString("en-GB", options);
};

const getTopRecipes = (recipes, howMany) => {
  return [...recipes]
    .sort((a, b) => b.rating.rating_count - a.rating.rating_count)
    .slice(0, howMany);
};

export {
  getMostPopularCategories,
  getCategoryByArrayOfIds,
  getLatestRecipe,
  getIdByCategoryName,
  getRecipesById,
  getRecipesByName,
  dateFormatter,
  getTopRecipes,
  getCategoryById,
};
