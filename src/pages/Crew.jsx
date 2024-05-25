import Carousel from "../components/Carousel";
import { data } from "../data.js";
export default function Crew() {
  return (
    <main className="crew-main-container">
      <h4>
        <span className="number">02</span> MEET YOUR CREW
      </h4>
      <section className="crew-content">
        <Carousel crews={data.crew} />
      </section>
    </main>
  );
}
