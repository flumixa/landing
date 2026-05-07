import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { QuickStart } from "@/components/QuickStart";
import { Screenshots } from "@/components/Screenshots";
import { Beta } from "@/components/Beta";
import { Reqs } from "@/components/Reqs";
import { Download } from "@/components/Download";
import { Roadmap } from "@/components/Roadmap";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <QuickStart />
      <Screenshots />
      <Beta />
      <Reqs />
      <Download />
      <Roadmap />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
