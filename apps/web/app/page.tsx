import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Process } from "@/components/landing/Process";
import { TechStack } from "@/components/landing/TechStack";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
