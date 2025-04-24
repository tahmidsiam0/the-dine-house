import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "./SVG";
import Logo from "./Logo";
import FooterLink from "./FooterLink";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Navbar({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <header className="mx-auto px-4 py-0.5 shadow-lg fixed top-0 bg-white z-50">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex space-x-6">
            <FooterLink text={dictionary.home} href="/" />
            <FooterLink text={dictionary.categories} href="/categories" />
            <FooterLink text={dictionary.latestRecipes} href="/" />
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-[#946546]">
              <SearchIcon />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
