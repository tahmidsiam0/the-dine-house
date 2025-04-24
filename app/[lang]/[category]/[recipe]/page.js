import recipes from "@/db/recipes.json";
import RecipeArticle from "@/components/recipes/RecipeArticle";
import { getRecipesByName } from "@/utils";
import YouMightAlsoLike from "@/components/recipes/YouMightAlsoLike";

export default async function RecipesPage({ params }) {
  const { recipe, category } = await params;
  const decodedRecipe = decodeURIComponent(recipe);
  const recipeData = getRecipesByName(recipes, decodedRecipe);

  return (
    <div className="py-8">
      <RecipeArticle recipeData={recipeData[0]} />
      <section className="my-12">
        <YouMightAlsoLike category={category} />
      </section>
    </div>
  );
}
