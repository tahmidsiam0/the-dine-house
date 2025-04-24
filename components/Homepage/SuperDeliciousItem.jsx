import Image from "next/image";
import { FilledStar } from "../SVG";
import Link from "next/link";
import { getCategoryById } from "@/utils";
import data from "@/db/categories.json";

export default function SuperDeliciousItem({ src, title, rating, time, id }) {
  const category = getCategoryById(data, id);

  return (
    <>
      <div>
        <Link href={`/${category.name}/${title}`}>
          <Image
            src={src}
            alt={title}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
            height={300}
            width={300}
          />
        </Link>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-[#946546] mb-2">
          {Array.from({ length: rating }).map((_, index) => (
            <FilledStar key={index} />
          ))}
        </div>
        <p className="text-gray-600">{time}</p>
      </div>
    </>
  );
}
