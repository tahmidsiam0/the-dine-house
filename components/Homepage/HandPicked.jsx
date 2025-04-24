import { handPicked } from "@/db/database";
import HandPickedItem from "./HandPickedItem";
import { getDictionary } from "@/app/[lang]/dictionaries";
import recipes from "@/db/recipes.json";

export default async function HandPicked({ lang }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
          {dictionary.handPicked}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* {handPicked.map((item) => (
            <HandPickedItem
              key={item.id}
              item={item}
              collection={dictionary.viewCollection}
            />
          ))} */}
          {recipes.map(
            (item, index) =>
              index < 2 && (
                <HandPickedItem
                  key={index}
                  src={`/lws/thumbs/${item.thumbnail}`}
                  title={item.title}
                  collection={dictionary.viewCollection}
                  id={item.category_id}
                />
              )
          )}
        </div>
      </section>
    </>
  );
}
