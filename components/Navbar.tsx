import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    <>
    <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
    <Link href="/" className="flex items-center">
          <Image
            src="/svg/lock-square-rounded.svg"
            alt="HTTP3 logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 text-xl font-bold">Cloud3</span>
        </Link>
    </nav>
    </>
}