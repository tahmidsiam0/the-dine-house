import {
  getIdByCategoryName,
  getMostPopularCategories,
  getRecipesById,
  getTopRecipes,
} from "@/utils";
import YouMightAlsoLikeCard from "./YouMightAlsoLikeCard";
import recipes from "@/db/recipes.json";
import categories from "@/db/categories.json";

export default function YouMightAlsoLike({ category }) {
  const recipeId = getIdByCategoryName(categories, category);
  const filteredRecipes = getRecipesById(recipes, recipeId);
  const topRecipes = getTopRecipes(filteredRecipes, 4);

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topRecipes.map((recipe) => (
          <YouMightAlsoLikeCard
            key={recipe.title}
            title={recipe.title}
            src={`/lws/thumbs/${recipe.thumbnail}`}
            category={category}
          />
        ))}
      </div>
    </>
  );
}
