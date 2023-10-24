import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Headliners } from "./Components/Headliners";
import { Timeplan } from "./Components/Timeplan";
import { Tickets } from "./Components/Tickets";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <>
      <main className="bg-zinc-200 dark:bg-zinc-900">
        <header className="text-zinc-200">
          <Navbar />
          <Hero />
        </header>
        <Headliners />

        <Timeplan />

        <Tickets />
        <Footer />
      </main>
    </>
  );
}
