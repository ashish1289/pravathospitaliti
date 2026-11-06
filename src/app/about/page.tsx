import Image from "next/image";
import { images } from "@/lib/images";

export default function AboutPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-bold mb-6 block">Company Story</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight">Built on Legacy.<br/>Inspired by Place.</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-midnight/80">
            <p>
              Pravat Hospitality Private Limited and Jyoti Infrastructure Private Limited are part of the Jyoti Group, whose business journey began in the late 1960s with mining operations in western Odisha.
            </p>
            <p>
              Over the decades, the Group has developed a broad presence across multiple sectors and continues to explore opportunities that create long-term value.
            </p>
          </div>
          <div className="relative h-[500px] w-full">
            <Image src={images.architecture} alt="Legacy" fill className="object-cover" />
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-midnight/10 pt-24 mb-32">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { year: "1960s", text: "Mining Begins" },
              { year: "1990s", text: "Business Diversification" },
              { year: "2000s", text: "Expansion Across Industries" },
              { year: "2019", text: "Pravat Hospitality Incorporated" },
              { year: "2024", text: "Taj Puri Resort & Spa Commences Operations" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="h-[1px] w-full bg-muted-gold/50 absolute top-3 left-0 hidden md:block" />
                <div className="w-6 h-6 rounded-full bg-warm-ivory border-2 border-muted-gold relative z-10 mb-6 mx-auto md:mx-0" />
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-3xl text-midnight mb-2">{item.year}</h3>
                  <p className="text-sm font-medium text-midnight/70 uppercase tracking-widest">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Connection */}
        <div className="bg-deep-ocean-navy text-warm-ivory p-12 md:p-24 text-center rounded-sm">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Part of the Jyoti Group</h2>
          <p className="text-lg text-warm-ivory/80 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Pravat Hospitality Private Limited is a wholly owned subsidiary of Jyoti Infrastructure Private Limited and forms part of the diversified Jyoti Group.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {['Mining', 'Media', 'Aviation', 'Financial Services', 'Real Estate', 'Automobile', 'Education', 'Renewable Energy', 'Hospitality'].map((sector) => (
              <span key={sector} className="px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/80">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
