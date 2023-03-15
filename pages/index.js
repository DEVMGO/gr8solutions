import Head from "next/head";
// components
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import AboutUs from "@/components/home/aboutus";
import OurPartners from "@/components/home/ourPartners";
import VaraKunder from "@/components/home/vara_kunder";
import Siffror from "@/components/home/siffror";
import Team from "@/components/home/team";
import Professional from "@/components/home/professional";
import Blog from "@/components/home/blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hem | GR8 Solutions</title>
        <meta name="description" content="Välkommen till GR8 Solutions, din lokala leverantör av IT och telekom. Vi är din dedikerade partner som levererar inom IT- & telefonitjänster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex items-center justify-start flex-col 3xl:py-[120px] md:py-20 py-12">
        <Hero />
        <Services />
        <AboutUs />
        <OurPartners />
        <VaraKunder />
        <Siffror />
        <Team />
        <Professional />
        <Blog />
      </main>
    </>
  );
}

Home.layout = "L1";
