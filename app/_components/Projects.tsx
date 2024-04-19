import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Projects() {
  return (
    <div className="max-h-screen mt-10 mx-auto px-8">
      <div className="text-6xl font-bold">Projects</div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Blog-it",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://blog-it-ashy.vercel.app/",
  },
  {
    title: "Search-it",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://search-it-3j7j.vercel.app/",
  },
  {
    title: "Twitter-backend-app",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/oohsai/twitter-backend-app",
  },
];
