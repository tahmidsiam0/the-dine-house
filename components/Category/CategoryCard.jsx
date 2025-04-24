import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ src, title, href }) {
  return (
    <>
      <div className="text-center">
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <Link href={href}>
            <Image
              src={src}
              alt={title}
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </>
  );
}
