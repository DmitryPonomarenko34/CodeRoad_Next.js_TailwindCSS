import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="block mr-2" href="/">
      <Image
        className="w-32 h-7 lg:w-64 lg:h-14"
        src="/logo.png"
        alt="logo"
        width={278}
        height={56}
      />
    </Link>
  );
}
