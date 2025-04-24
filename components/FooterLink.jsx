import Link from "next/link";

export default function FooterLink({ text, href }) {
  return (
    <>
      <li>
        <Link href={href} className="text-gray-600 hover:text-[#946546]">
          {text}
        </Link>
      </li>
    </>
  );
}
