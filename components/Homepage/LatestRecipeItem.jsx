import { getCategoryById } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import data from "@/db/categories.json";

export default function LatestRecipeItem({ title, src, id }) {
  const category = getCategoryById(data, id);

  return (
    <>
      <div>
        <Link href={`/${category.name.toLowerCase()}/${title}`}>
          <Image
            src={src}
            alt={title}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
            height={300}
            width={300}
          />
        </Link>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{category.name}</p>
      </div>
    </>
  );
}
