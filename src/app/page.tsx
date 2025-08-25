import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import App from "@/components/App";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Reviews />
      <App />
     
      <FAQ />
    </main>
  );
}
