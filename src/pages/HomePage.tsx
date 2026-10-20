import Hero from "../components/hero/Hero.tsx";
import About from "../components/sections/About.tsx";
import Contact from "../components/sections/Contact.tsx";
import Journey from "../components/sections/Journey.tsx";
import LookingFor from "../components/sections/LookingFor.tsx";
import Stack from "../components/sections/Stack.tsx";
import Seo from "../components/Seo.tsx";
import Reveal from "../components/ui/Reveal.tsx";
import WorkList from "../components/work/WorkList.tsx";

export default function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <WorkList />
      </Reveal>
      <Reveal>
        <Journey />
      </Reveal>
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <LookingFor />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
