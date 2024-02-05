import { NavHome } from "./ui/home/nav-home";
import { HomeSection } from "./ui/home/home-section";
import { Vision } from "./ui/home/vision";
import { About } from "./ui/home/about";
import { Gallery } from "./ui/home/gallery";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
     <header className="w-full">
        <NavHome />
     </header>

      <HomeSection />
      <About />
      <Vision />
      <Gallery />
    </main>
  );
}
