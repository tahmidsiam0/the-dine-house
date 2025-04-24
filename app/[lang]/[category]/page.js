import RecipeCard from "@/components/recipes/RecipeCard";
import RecipeHeader from "@/components/recipes/RecipeHeader";
import recipes from "@/db/recipes.json";
import categories from "@/db/categories.json";
import { getIdByCategoryName, getRecipesById } from "@/utils";

export default async function DynamicCategoryPage({ params }) {
  const { category } = await params;
  const categoryId = getIdByCategoryName(categories, category);
  const filteredRecipes = getRecipesById(recipes, categoryId);

  return (
    <div className="py-8">
      <RecipeHeader category={category} recipeCount={filteredRecipes.length} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            src={`/lws/thumbs/${recipe.thumbnail}`}
            title={recipe.title}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}
