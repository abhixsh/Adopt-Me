import Hero from "./componants/Hero";
import Navbar from "./componants/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        
        <Navbar />
        <Hero />

      </div>

    </>
  );
}
