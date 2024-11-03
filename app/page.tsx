import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

export default function Home() {
  return (
     <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-background text-foreground ">
       <header>
        <Image
        className="mx-auto text-white mb-4"
        src="/svg/lock-square-rounded.svg"
        alt="CLOUD3 logo"
        width={70}
        height={30}
        priority
        />
       </header>
      </div>
     </ThemeProvider>
  );
}
