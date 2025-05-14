import Services from "../components/Services";
import Works from "../components/Works";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Services Section */}
        <Services />
        {/* Works Section */}
        <Works />
        {/* Reviews Section */}
        <Reviews />
      </main>
    </div>
  );
}
