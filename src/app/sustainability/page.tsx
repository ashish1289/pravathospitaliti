import Image from "next/image";
import { images } from "@/lib/images";

export default function SustainabilityPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-bold mb-6 block">Sustainability</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-balance">
            Growing with Awareness
          </h1>
          <p className="text-xl text-midnight/70 font-light max-w-3xl mx-auto leading-relaxed text-balance">
            The company's development approach seeks to balance premium hospitality with responsible consideration of the destination and its environment.
          </p>
        </div>

        <div className="relative h-[60vh] w-full mb-24">
          <Image src={images.ocean} alt="Coastal Sustainability" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: "Coastal Sensitivity", desc: "Respecting the fragile coastal ecosystem of Puri through thoughtful architectural planning and execution." },
            { title: "Responsible Development", desc: "Integrating sustainable building practices that minimize environmental impact during the construction lifecycle." },
            { title: "Natural Surroundings", desc: "Preserving local flora and utilizing indigenous landscaping that thrives in the coastal climate." },
            { title: "Energy Efficiency", desc: "Implementing design strategies and technologies aimed at optimizing energy consumption across operations." },
            { title: "Water Management", desc: "Approaching water usage responsibly with conservation techniques suited for the hospitality environment." },
            { title: "Community Integration", desc: "Supporting local economies through employment opportunities and engagement with local culture." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border-t-2 border-muted-gold shadow-sm">
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-midnight/70 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
