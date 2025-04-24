import { latestRecipeData } from "@/db/database";
import LatestRecipeItem from "./LatestRecipeItem";
import recipes from "@/db/recipes.json";
import { getLatestRecipe } from "@/utils";

export default function LatestRecipe() {
  const latestRecipes = getLatestRecipe(recipes, 4);

  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* {latestRecipeData.map((item) => (
            <LatestRecipeItem key={item.id} item={item} />
          ))} */}

          {latestRecipes.map((item, index) => (
            <LatestRecipeItem
              key={index}
              title={item.title}
              src={`/lws/thumbs/${item.thumbnail}`}
              id={item.category_id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
