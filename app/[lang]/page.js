import DisplayItem from "@/components/Homepage/DisplayItem";
import HandPicked from "@/components/Homepage/HandPicked";
import LatestRecipe from "@/components/Homepage/LatestRecipe";
import Newsletter from "@/components/Homepage/Newsletter";
import PopularCategory from "@/components/Homepage/PopularCategory";
import SuperDelicious from "@/components/Homepage/SuperDelicious";

export default async function Home({ params }) {
  const { lang } = await params;
  return (
    <>
      <DisplayItem lang={lang} />
      <SuperDelicious lang={lang} />
      <PopularCategory lang={lang} />
      <Newsletter lang={lang} />
      <HandPicked lang={lang} />
      <LatestRecipe />
    </>
  );
}
