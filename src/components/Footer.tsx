import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-ocean-navy text-warm-ivory pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-muted-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex flex-col group inline-block mb-6">
                <span className="font-serif text-3xl tracking-widest text-white">
                  PRAVAT
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-medium mt-1">
                  Hospitality
                </span>
              </Link>
              <p className="text-warm-ivory/70 max-w-sm font-sans text-sm leading-relaxed mb-8 text-balance">
                Where Luxury Meets the Coast of Odisha. Creating distinctive hospitality destinations that bring together place, people, culture and contemporary luxury.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-muted-gold/50" />
              <span className="text-xs uppercase tracking-widest text-muted-gold">Part of Jyoti Group</span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Vision', 'Leadership'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-warm-ivory/80 hover:text-white transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-muted-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-8">The Project</h4>
            <ul className="flex flex-col gap-4 mb-10">
              {['Resort', 'Architecture', 'Experience', 'Destination'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-warm-ivory/80 hover:text-white transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-muted-gold" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-4">Connect</h4>
            <Link href="/contact" className="text-sm text-warm-ivory/80 hover:text-white transition-colors flex items-center group">
              Contact
              <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-muted-gold" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 tracking-wide">
            © {currentYear} Pravat Hospitality Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
