import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

export function Logo() {
  return <Link href="/" className="px-layout mb-10 block">
    <Image src={logo} alt="Cinema Logo" width={247} height={34} draggable={false} />
  </Link>
}
