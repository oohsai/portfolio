import Techstack from "./_components/TechStack";
import About from "./_components/About";
import { Background } from "./_components/Background";
import { Projects } from "./_components/Projects";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Background />
      <About />
      <Projects />
      {/* <div className="max-h-screen">
        <Testimonials />
      </div> */}
      <Techstack />
    </div>
  );
}
