import Image from "next/image";
import { images } from "@/lib/images";

export default function ResortPage() {
  return (
    <main className="w-full relative bg-midnight text-warm-ivory pt-32">
      <div className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="mb-24 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-bold mb-6 block">The Project</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-white">Taj Puri Resort & Spa</h1>
          <p className="text-xl md:text-2xl text-white/70 font-light uppercase tracking-widest">
            A New Expression of Luxury on the Odisha Coast
          </p>
        </div>

        <div className="relative h-[70vh] w-full mb-32">
          <Image src={images.resort} alt="Taj Puri Resort" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-48">
          <div>
            <h2 className="font-serif text-4xl mb-8 text-white">Shaped by the Rhythm of the Sea</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
              The Taj Puri Resort & Spa, Puri, a unit of Pravat Hospitality Private Limited, commenced commercial operations on 24 December 2024.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              The resort is operated by Indian Hotels Company Limited, a Tata Group company, under the iconic Taj brand.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "90", subtitle: "Rooms & Suites" },
              { title: "Dining", subtitle: "Luxury Dining" },
              { title: "Wellness", subtitle: "Wellness Experiences" },
              { title: "Location", subtitle: "Beachfront Setting" },
            ].map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <h3 className="font-serif text-4xl text-muted-gold mb-2">{stat.title}</h3>
                <p className="text-xs uppercase tracking-widest text-white/60">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <section className="bg-warm-ivory text-midnight py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] w-full">
              <Image src={images.architecture} alt="Architecture" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-5xl md:text-6xl mb-8">Architecture Inspired by the Coast</h2>
              <p className="text-lg text-midnight/80 font-light leading-relaxed text-balance">
                A destination where the horizon becomes part of the experience. The architecture blends contemporary design with natural materials—stone, wood, and glass—integrating seamlessly with the coastal surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining & Wellness */}
      <section className="bg-midnight text-warm-ivory py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-[500px] w-full group overflow-hidden">
              <Image src={images.dining} alt="Dining" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-serif text-4xl text-white mb-4">Dining, Inspired by Place</h3>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  A refined dining experience that celebrates the flavours, ingredients and culinary traditions of India while embracing contemporary hospitality.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] w-full group overflow-hidden">
              <Image src={images.wellness} alt="Wellness" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-serif text-4xl text-white mb-4">Space to Pause. Space to Breathe.</h3>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Designed around the idea of slowing down, reconnecting and experiencing the restorative character of the coast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
