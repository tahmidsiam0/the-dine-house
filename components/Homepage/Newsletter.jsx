import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Newsletter({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section className="mb-16 bg-[#94654646] p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">{dictionary.newsletter}</h2>
        <p className="text-gray-600 mb-4">{dictionary.newsletterDescription}</p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder={dictionary.emailAddress}
            className="flex-grow px-4 py-2 rounded-full bg-white"
          />
          <button
            type="submit"
            className="bg-[#946546] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#946546] cursor-pointer"
          >
            {dictionary.join}
          </button>
        </form>
      </section>
    </>
  );
}
