import Image from "next/image";
import { images } from "@/lib/images";

export default function DestinationPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-bold mb-6 block">Discover</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">Puri</h1>
          <p className="text-xl text-midnight/70 font-light uppercase tracking-widest max-w-2xl mx-auto">
            Where Heritage Meets the Sea
          </p>
        </div>

        <div className="relative h-[60vh] w-full mb-32">
          <Image src={images.puri} alt="Puri Destination" fill className="object-cover" />
        </div>

        {/* Tourism Context */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">A Destination with Long-Term Potential</h2>
          <p className="text-lg text-midnight/80 font-light leading-relaxed mb-16 text-balance">
            The project was conceived against the backdrop of growing tourism demand and an opportunity for additional luxury hospitality infrastructure in Puri.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-midnight/10">
            {[
              { num: "126 Lakh", desc: "Day Visitors" },
              { num: "47 Lakh", desc: "Overnight Visitors" },
              { num: "8%", desc: "Day Visitor Growth" },
              { num: "9%", desc: "Overnight Visitor Growth" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl md:text-4xl text-muted-gold mb-2">{stat.num}</div>
                <div className="text-xs uppercase tracking-widest font-medium text-midnight/60">{stat.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-midnight/40 mt-6">Historical tourism data referenced in company project documentation.</p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Jagannath Temple",
              desc: "Spiritual and cultural landmark.",
              img: images.architecture
            },
            {
              title: "Puri Beach",
              desc: "A defining feature of the destination.",
              img: images.ocean
            },
            {
              title: "Odisha Heritage",
              desc: "Rich cultural traditions and architecture.",
              img: images.puri
            },
            {
              title: "Coastal Experience",
              desc: "A destination shaped by the sea.",
              img: images.hero
            }
          ].map((card, i) => (
            <div key={i} className="group relative h-[400px] overflow-hidden">
              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="font-serif text-3xl mb-2">{card.title}</h3>
                <p className="text-sm font-light text-white/80">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
