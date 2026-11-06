import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';


export default function Home() {
  return (
    <main className="w-full relative bg-midnight text-warm-ivory">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt="Puri Coastline"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-transparent to-midnight/90" />
        </div>



        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-24">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-8">
            Where Luxury Meets<br />the Coast of Odisha
          </h1>
          <p className="text-warm-ivory/80 font-sans text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12 text-balance">
            A refined hospitality destination shaped by the spirit of Puri, the rhythm of the ocean and a vision for contemporary luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/vision" 
              className="px-8 py-4 bg-muted-gold text-midnight text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors"
              data-cursor="hover"
            >
              Discover the Vision
            </Link>
            <Link 
              href="/resort" 
              className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-midnight transition-colors"
              data-cursor="hover"
            >
              Explore the Resort
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-medium">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="bg-warm-ivory text-midnight py-32 md:py-48 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-gold font-bold mb-6 block">
                Pravat Hospitality
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
                Creating Places<br />That Stay With You
              </h2>
              <div className="space-y-6 text-midnight/80 font-sans text-lg leading-relaxed font-light">
                <p>
                  Pravat Hospitality Private Limited is a wholly owned subsidiary of Jyoti Infrastructure Private Limited and was incorporated on 9 December 2019 under the Companies Act, 2013.
                </p>
                <p>
                  The Company was established primarily for the development of a luxury beachside resort in Puri, Odisha.
                </p>
                <p>
                  The company is part of the Jyoti Group, a diversified business group with long-standing experience across mining, media, aviation, financial services, real estate, automobiles, education and renewable energy.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] w-full overflow-hidden">
              <Image
                src={images.architecture}
                alt="Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PURI STORY */}
      <section className="py-32 md:py-48 px-6 bg-deep-ocean-navy text-warm-ivory relative">
        <div className="container mx-auto max-w-4xl text-center mb-24">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8">
            Puri — Where Heritage Meets the Sea
          </h2>
          <p className="text-xl md:text-2xl text-warm-ivory/80 font-light leading-relaxed text-balance">
            Puri is one of Odisha's most celebrated destinations, known for its coastline, spiritual significance, cultural heritage and growing leisure tourism.
          </p>
        </div>
        
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src={images.puri}
            alt="Puri Coastline"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-midnight/30" />
        </div>
      </section>

      {/* 4. THE PROJECT & 90 KEYS */}
      <section className="bg-warm-ivory text-midnight py-32 md:py-48 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-32">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-12">
              A New Landmark on the Puri Coast
            </h2>
            <p className="text-xl md:text-2xl text-midnight/80 font-light max-w-3xl mx-auto leading-relaxed text-balance">
              The Group identified the opportunity to develop a luxury upper-upscale resort in Puri, supported by the destination's strong cultural significance, growing tourism demand and limited supply in the luxury hospitality segment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-midnight/10 pt-16 mb-48">
            {[
              { num: "5.12", unit: "Acres", desc: "Development Land" },
              { num: "90", unit: "Keys", desc: "Luxury Rooms & Suites" },
              { num: "Coast", unit: "", desc: "Premium Beachside Location" },
              { num: "Puri", unit: "", desc: "Odisha, India" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-5xl md:text-7xl text-muted-gold mb-4">
                  {stat.num}
                  <span className="text-2xl ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-medium text-midnight/60">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 90 KEYS EXPERIENCE */}
          <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            <Image
              src={images.room}
              alt="Luxury Room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-midnight/40" />
            <div className="relative z-10 text-center text-warm-ivory px-6">
              <h3 className="font-serif text-8xl md:text-[12rem] leading-none text-muted-gold mb-6">90</h3>
              <p className="text-2xl font-serif tracking-widest uppercase mb-8">Rooms & Suites</p>
              <p className="text-lg md:text-xl text-warm-ivory/90 max-w-2xl mx-auto font-light leading-relaxed">
                Thoughtfully designed accommodation created to bring together contemporary comfort, natural surroundings and the character of the Odisha coast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-midnight text-warm-ivory py-48 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12">
            A New Chapter of Luxury on the Coast of Odisha
          </h2>
          <p className="text-xl md:text-2xl text-warm-ivory/70 font-light mb-16 leading-relaxed text-balance">
            Rooted in the legacy of the Jyoti Group and inspired by the timeless character of Puri, Pravat Hospitality is creating a destination where contemporary luxury meets the spirit of the coast.
          </p>
          <Link 
            href="/about"
            className="inline-block px-10 py-5 bg-muted-gold text-midnight text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors"
          >
            Explore Pravat Hospitality
          </Link>
        </div>
      </section>
    </main>
  );
}
