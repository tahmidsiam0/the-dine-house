import { getCategoryById } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import data from "@/db/categories.json";

export default function PopularCategoryItem({ src, title }) {
  return (
    <>
      <div className="cursor-pointer text-center group">
        <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
          <Link href={`/${title.toLowerCase()}`}>
            <Image
              src={src}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              height={80}
              width={80}
            />
          </Link>
        </div>
        <p className="transition-transform duration-300 group-hover:scale-105">
          {title}
        </p>
      </div>
    </>
  );
}
