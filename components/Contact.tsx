import { Card } from "./Card";

export default function Contact() {
  return (
    <section id="contact" className="mb-[80px] fade-in">
      <div className="glass flex justify-center items-center flex-col p-[30px]">
        <h2 className="text-[2.5rem] font-bold text-center mb-[50px] bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
          Let&#39;s Connect
        </h2>
        <p>
          Ready to bring your ideas to life? Let&#39;s discuss how we can work
          together to create something amazing.
        </p>
        <div className="flex justify-center gap-6 mt-10 flex-nowrap">
          <Card>
            <a
              href="mailto:faradj.musaev@gmail.com"
              className="py-4! px-8! z-1"
            >
              Email
            </a>
          </Card>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/faradzh"
              className="py-4! px-8! z-1"
            >
              LinkedIn
            </a>
          </Card>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/faradzh"
              className="py-4! px-8! z-1"
            >
              GitHub
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
