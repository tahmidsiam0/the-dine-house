import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ src, title, category }) {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <Link href={`/${category}/${title}`}>
          <Image
            src={src}
            alt={title}
            className="w-full h-48 object-cover"
            height={100}
            width={100}
          />
        </Link>
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
        </div>
      </div>
    </>
  );
}
