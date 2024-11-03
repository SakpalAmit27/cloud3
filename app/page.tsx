import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
     <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground ">
       <header className="mb-12 text-center">
        <Image
        className="mx-auto text-white mb-4"
        src="/svg/lock-square-rounded.svg"
        alt="CLOUD3 logo"
        width={70}
        height={30}
        priority
        />
           <h1 className="text-5xl max-w-3xl mx-auto font-bold mb-4">
            The Future of Web3 Hosting on{" "}
            <span className="text-primary">Smart Contracts</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Host your legacy websites like calculators and unit converters on
            the blockchain, absolutely free! No hosting fees, no expiration
            dates. Preserve your simple web projects forever with HTTP3's
            decentralized hosting.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="mr-4">
              Deploy for Free Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn How It Works
          </Button>
       </header>
      </div>
     </ThemeProvider>
  );
}
