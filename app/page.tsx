import Techstack from "./_components/TechStack";
import About from "./_components/About";
import { Background } from "./_components/Background";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
    <div>
      <Background />
      <About />
      <Projects />
      <Techstack />
    </div>
  );
}
