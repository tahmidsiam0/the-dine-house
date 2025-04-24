import Link from "next/link";
import Logo from "./Logo";
import FooterLink from "./FooterLink";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Footer({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Logo />
              <p className="text-gray-600 mt-2 text-sm">{dictionary.info}</p>
            </div>
            <div className="md:ms-10">
              <h4 className="font-semibold mt-7 mb-4">The Dine House</h4>
              <ul className="space-y-2">
                <FooterLink text={dictionary.aboutUs} href="/" />
                <FooterLink text={dictionary.contactUs} href="/" />
                <FooterLink text={dictionary.feedback} href="/" />
              </ul>
            </div>
            <div className="md:ms-10">
              <h4 className="font-semibold mb-4 mt-7">Legal</h4>
              <ul className="space-y-2">
                <FooterLink text={dictionary.terms} href="/" />
                <FooterLink text={dictionary.cookies} href="/" />
                <FooterLink text={dictionary.copyright} href="/" />
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 mt-7">Follow</h4>
              <ul className="space-y-2">
                <FooterLink text={dictionary.facebook} href="/" />
                <FooterLink text={dictionary.whatsapp} href="/" />
                <FooterLink text={dictionary.instagram} href="/" />
                <FooterLink text={dictionary.foodpanda} href="/" />
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 opacity-30">
          Copyright @ The Dine House - 2025{" "}
        </p>
      </footer>
    </>
  );
}
