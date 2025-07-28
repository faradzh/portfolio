import { Volume2 } from "lucide-react";
import { Card } from "./Card";

export default function Hero() {
  return (
    <section className="hero fade-in">
      <h1 className="flex items-center justify-center">
        Faradzh Musaev
        <span className="inline-block ml-4! top-[-1rem] relative cursor-pointer">
          <Volume2 />
        </span>
      </h1>
      <p>
        Software Engineer crafting exceptional digital experiences with
        cutting-edge technologies.
      </p>
      <div className="flex items-center justify-center">
        <Card>
          <a href="#about" className="z-1 py-4! px-8!">
            Get my CV
          </a>
        </Card>
      </div>
    </section>
  );
}
