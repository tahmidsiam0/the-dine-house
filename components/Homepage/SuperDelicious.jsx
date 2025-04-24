import SuperDeliciousItem from "./SuperDeliciousItem";
import { superDelicious } from "@/db/database";
import data from "@/db/recipes.json";
import { getTopRecipes } from "@/utils";

export default function SuperDelicious() {
  const topRecipes = getTopRecipes(data, 3);

  return (
    <>
      <section className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* {superDelicious.map((item) => (
            <SuperDeliciousItem
              key={item.id}
              title={item.title}
              rating={item.rating}
              time={item.time}
              src={item.image}
            />
          ))} */}
          {topRecipes.map((item, index) => (
            <SuperDeliciousItem
              id={item.category_id}
              key={index}
              title={item.title}
              rating={item.rating}
              time={item.cooking_time}
              src={`/lws/thumbs/${item.thumbnail}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
