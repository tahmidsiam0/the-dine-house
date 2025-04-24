import { dateFormatter } from "@/utils";
import Image from "next/image";
import { SaveIcon, ShareIcon } from "../SVG";

export default function RecipeArticle({ recipeData }) {
  return (
    <>
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {recipeData.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/lws/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
          <span className="text-gray-600">{recipeData.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{recipeData.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            {dateFormatter(recipeData.published_date)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <ShareIcon />
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <SaveIcon />
              Save
            </button>
          </div>
        </div>
        <Image
          src="/lws/single-banner.jpg"
          alt="Cooking Image"
          className="w-full h-auto mb-8 rounded-lg"
          width={1000}
          height={1000}
        />
        <p className="text-gray-600 mb-8">
          One thing I learned living in the Catskills section of Brooklyn, NY
          was how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One's Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <Image
          src={`/lws/thumbs/${recipeData.thumbnail}`}
          alt="Cooking in kitchen"
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
          width={1000}
          height={1000}
        />

        <p className="mb-8">{recipeData.description}</p>
      </article>
    </>
  );
}
