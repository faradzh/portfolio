import { Card } from "./Card";
import Speaker from "./Speaker";

export default function Hero() {
  return (
    <section className="hero fade-in">
      <div className="flex justify-center">
        <h1 className="relative">
          Faradzh Musaev
          <Speaker />
        </h1>
      </div>
      <p>
        Software Engineer crafting exceptional digital experiences with
        cutting-edge technologies.
      </p>
      <div className="flex items-center justify-center">
        <Card>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="z-1 py-4! px-8!"
          >
            View my CV
          </a>
        </Card>
      </div>
    </section>
  );
}
