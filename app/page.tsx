import { NavHome } from "./ui/home/nav-home";
import { HomeSection } from "./ui/home/home-section";
import { Vision } from "./ui/home/vision";
import { About } from "./ui/home/about";
import { Gallery } from "./ui/home/gallery";
import { Footer } from "./ui/home/footer";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col content-center" > 
    
      <NavHome />
      <HomeSection />
      <About />
      <Vision />
      <Gallery />
      <Footer />
     
    </main>
  
  );
}
