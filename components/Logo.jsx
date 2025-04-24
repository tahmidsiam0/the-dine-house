import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="text-3xl font-bold flex items-center">
        <Image src="/logo.png" height={170} width={80} alt="Logo" />
        <h1 className="text-xl">The Dine House</h1>
      </Link>
    </>
  );
}
