import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full relative bg-warm-ivory text-midnight pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">Begin a Conversation</h1>
            <p className="text-lg text-midnight/70 font-light leading-relaxed mb-16 max-w-md text-balance">
              For corporate, investment, development and business enquiries, connect with us.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Company</h3>
                <p className="font-serif text-2xl text-midnight">Pravat Hospitality Private Limited</p>
                <p className="text-sm text-midnight/60 uppercase tracking-widest mt-2">Part of Jyoti Group</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Registered Office</h3>
                <p className="text-lg text-midnight font-light leading-relaxed max-w-xs">
                  N2/25, Nayapalli, IRC Village,<br />
                  Bhubaneswar, Odisha – 751015
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-gold mb-4">Resort Location</h3>
                <p className="text-lg text-midnight font-light leading-relaxed max-w-xs">
                  Taj Puri Resort & Spa<br />
                  Plot No: 545/1546, Sipasarubali,<br />
                  Puri, Odisha – 752001
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-midnight/10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-gold mb-2">Incorporated</h3>
                  <p className="font-serif text-xl">09 Dec 2019</p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-gold mb-2">Operations</h3>
                  <p className="font-serif text-xl">24 Dec 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
            <h3 className="font-serif text-3xl mb-8">Send an Enquiry</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Name</label>
                  <input type="text" className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Email</label>
                  <input type="email" className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Phone</label>
                  <input type="tel" className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Company</label>
                  <input type="text" className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Enquiry Type</label>
                <select className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors text-midnight rounded-none appearance-none cursor-pointer">
                  <option>Corporate Enquiry</option>
                  <option>Business Partnership</option>
                  <option>Hospitality</option>
                  <option>Investment</option>
                  <option>Media</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-midnight/50 font-medium">Message</label>
                <textarea rows={4} className="w-full border-b border-midnight/20 bg-transparent py-2 outline-none focus:border-muted-gold transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-medium text-midnight mt-12">
                <span className="w-12 h-12 rounded-full bg-muted-gold flex items-center justify-center group-hover:bg-midnight group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
