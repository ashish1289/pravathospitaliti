import Image from "next/image";
import { images } from "@/lib/images";

export default function LeadershipPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8">Leadership with Experience</h1>
          <div className="w-24 h-[1px] bg-muted-gold mx-auto" />
        </div>

        {/* Profile 1 */}
        <div className="mb-48">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-5/12">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-gold mb-4">01</div>
              <h2 className="font-serif text-5xl mb-2 uppercase tracking-wide">Navajyoti Patnaik</h2>
              <p className="text-lg uppercase tracking-widest text-midnight/60 font-medium mb-12">Director</p>
              
              <div className="relative h-[600px] w-full">
                <Image src={images.portrait1} alt="Nava Jyoti Patnaik" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Qualification</h3>
                <p className="font-serif text-2xl">Bachelor of Engineering — Industrial Production</p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Experience</h3>
                <p className="font-serif text-2xl">25+ Years</p>
              </div>

              <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-midnight/80">
                <p>Mr. Navajyoti Patnaik has more than 25 years of experience across Mining, Manufacturing, Automobile, Finance, Telecom, Real Estate and Renewable Energy.</p>
                <p>He joined the family business of Mining and Steel Industries after a brief stint with Mobar India Ltd, a steel trading company founded by Mr. Russi Mody.</p>
                <p>He subsequently established a mid-size integrated secondary steel manufacturing plant as a greenfield project at Rourkela, Odisha.</p>
                <p>He has interests in automobile dealership operations in Odisha comprising Maruti Suzuki, Audi, TVS Motors, Suzuki and Harley-Davidson.</p>
                <p>He has also invested in Saral Home Finance Limited, focusing on small-ticket housing finance for the lower-middle-income segment.</p>
                <p>In 2004–05, he established a mid-size integrated steel plant with an 8 MW captive power plant. The plant had a capacity of 400 MT sponge iron and 400 MT ingot with a 50-ton-per-hour coal washer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div>
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
            <div className="w-full lg:w-5/12">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-gold mb-4">02</div>
              <h2 className="font-serif text-5xl mb-2 uppercase tracking-wide">Roopali Mohanti</h2>
              <p className="text-lg uppercase tracking-widest text-midnight/60 font-medium mb-12">Managing Director</p>
              
              <div className="relative h-[600px] w-full">
                <Image src={images.portrait2} alt="Roopali Mohanti" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Education</h3>
                <ul className="font-serif text-xl space-y-4">
                  <li>Hotel Real Estate Investment and Asset Management Certificate — Cornell University</li>
                  <li>Diploma in Hotel Management — Institute of Hotel Management Catering Technology and Applied Nutrition, Kolkata</li>
                  <li>Bachelor of Arts — Delhi University</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Experience</h3>
                <p className="font-serif text-2xl">Hospitality Industry</p>
              </div>

              <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-midnight/80">
                <p>Mrs. Roopali Mohanti brings professional hospitality experience and has worked with Indian Hotels Company Limited (Taj Hotels Resorts and Palaces).</p>
                <p>She joined IHCL as a Management Trainee at Taj Mahal Mumbai and subsequently worked at various Taj Hotels including Taj Bengal, Kolkata.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
