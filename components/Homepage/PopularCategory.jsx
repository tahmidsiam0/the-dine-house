import { popularCategories } from "@/db/database";
import PopularCategoryItem from "./PopularCategoryItem";
import recipes from "@/db/recipes.json";
import categories from "@/db/categories.json";
import { getCategoryByArrayOfIds, getMostPopularCategories } from "@/utils";
import Link from "next/link";

export default function PopularCategory() {
  const top6CategoriesId = getMostPopularCategories(recipes, 6);
  const top6Categories = getCategoryByArrayOfIds(categories, top6CategoriesId);

  return (
    <>
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-[#946546]">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {/* {popularCategories.map((item) => (
            <PopularCategoryItem
              key={item.id}
              title={item.title}
              src={item.image}
            />
          ))} */}

          {top6Categories.map((item) => (
            <PopularCategoryItem
              key={item.id}
              title={item.name}
              src={`/lws${item.image}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
