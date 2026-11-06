import Image from "next/image";
import { images } from "@/lib/images";

export default function VisionPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24 text-center">
          <h1 className="font-serif text-6xl md:text-8xl mb-12">Our Vision</h1>
          <p className="font-serif text-2xl md:text-4xl text-muted-gold leading-relaxed max-w-4xl mx-auto">
            "To create distinctive hospitality destinations that bring together place, people, culture and contemporary luxury."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 mt-32">
          {[
            {
              title: "Place",
              desc: "Respecting the character of Puri.",
            },
            {
              title: "Experience",
              desc: "Creating memorable hospitality experiences.",
            },
            {
              title: "Sustainability",
              desc: "Growing with awareness of the environment and community.",
            },
            {
              title: "Excellence",
              desc: "Maintaining high standards across development and hospitality.",
            },
            {
              title: "Long-Term Value",
              desc: "Creating enduring assets for future generations.",
            }
          ].map((theme, i) => (
            <div key={i} className="border-l-2 border-muted-gold pl-8">
              <h3 className="font-serif text-3xl mb-4">{theme.title}</h3>
              <p className="text-lg font-light text-midnight/70">{theme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
