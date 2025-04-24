import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
import data from "@/db/recipes.json";
import categories from "@/db/categories.json";
import { getCategoryById } from "@/utils";

export default async function DisplayItem({ lang }) {
  const dictionary = await getDictionary(lang);
  const heroItem = data[0];
  const category = getCategoryById(categories, heroItem.category_id);

  return (
    <>
      {/* <section className="mb-16 bg-[#94654646] rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/khichuri.jpg"
              alt={dictionary.displayItemTitle}
              className="w-full h-[450px] object-cover rounded-lg rounded-r-none"
              height={450}
              width={450}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {dictionary.displayItemTitle}
            </h1>
            <p className="text-gray-600 mb-4">
              {dictionary.displayItemDescription}
            </p>
            <Link
              href="./blog-details.html"
              className="bg-[#946546] text-white px-6 py-2 rounded-full inline-block hover:bg-white hover:text-[#946546]"
            >
              {dictionary.viewRecipe}
            </Link>
          </div>
        </div>
      </section> */}
      <section className="mb-16 bg-[#94654646] rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={`/lws/thumbs/${heroItem.thumbnail}`}
              alt={heroItem.title}
              className="w-full h-[450px] object-cover rounded-lg rounded-r-none"
              height={450}
              width={450}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{heroItem.title}</h1>
            <p className="text-gray-600 mb-4">{heroItem.description}</p>
            <Link
              href={`/${category.name.toLowerCase()}/${heroItem.title}`}
              className="bg-[#946546] text-white px-6 py-2 rounded-full inline-block hover:bg-white hover:text-[#946546]"
            >
              {dictionary.viewRecipe}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
