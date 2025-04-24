import Image from "next/image";
import Link from "next/link";
import data from "@/db/categories.json";
import { getCategoryById } from "@/utils";

export default function HandPickedItem({ src, title, collection, id }) {
  const category = getCategoryById(data, id);

  return (
    <>
      <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
        <Link href={`/${category.name}/${title}`}>
          <Image
            src={src}
            alt={title}
            className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            width={400}
            height={400}
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <Link href={`/${category.name}`} className="hover:underline">
            {collection}
          </Link>
        </div>
      </div>
    </>
  );
}
