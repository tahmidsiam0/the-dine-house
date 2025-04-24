import Image from "next/image";
import Link from "next/link";

export default function YouMightAlsoLikeCard({ title, src, category }) {
  return (
    <>
      <div>
        <Link href={`/${category}/${title}`}>
          <Image
            src={src}
            alt="Recipe 2"
            className="w-full h-60 object-cover rounded-lg mb-2"
            width={1000}
            height={1000}
          />
        </Link>
        <h3 className="font-semibold">{title}</h3>
      </div>
    </>
  );
}
