
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiBreadSlice, GiCroissant, GiFlour, GiHeatHaze } from "react-icons/gi";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen ">
      
      {/* --- HERO SECTION: THE SIGNATURE GRID --- */}
      <div className="relative overflow-hidden border-b-4 border-black bg-white 
                bg-[linear-gradient(90deg,rgba(239,68,68,0.25)_50%,transparent_50%),linear-gradient(rgba(239,68,68,0.25)_50%,transparent_50%)] 
                bg-[length:32px_32px] p-8 md:p-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="bg-yellow-400 text-black px-4 py-1 font-black italic uppercase text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
              Hand-Crafted in 2025
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 leading-[0.8] tracking-tighter uppercase drop-shadow-sm">
              REAL <br/> <span className="text-red-600">BREAD</span> <br/> BRO.
            </h1>
            <p className="text-2xl font-bold text-gray-800 leading-tight max-w-md border-l-8 border-black pl-6 italic">
              "We believe that flour, water, and heat can change your whole morning."
            </p>
          </div>

          <div className="relative group">
            {/* Retro Photo Frame Effect */}
            <div className="absolute inset-0 bg-yellow-400 translate-x-3 translate-y-3 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border-2 border-black"></div>
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" 
              alt="Artisan Sourdough" 
              className="rounded-2xl shadow-xl border-4 border-black object-cover h-[450px] w-full transform transition-all group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* --- THE CRAFT SECTION: ICON GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b-4 border-black">
        {[
          { icon: <GiFlour />, title: "Raw Grain", desc: "Organic, stone-ground flour only." },
          { icon: <GiHeatHaze />, title: "Fire & Steam", desc: "High-heat stone deck ovens." },
          { icon: <GiBreadSlice />, title: "36H Proof", desc: "Slow fermentation for gut health." },
          { icon: <GiCroissant />, title: "Real Butter", desc: "100% grass-fed French style butter." }
        ].map((item, i) => (
          <div key={i} className={`p-10 flex flex-col items-center text-center border-black ${i !== 3 ? 'md:border-r-4 border-b-4 md:border-b-0' : 'border-b-4 md:border-b-0'}`}>
            <div className="text-6xl text-red-600 mb-4 transform hover:rotate-12 transition-transform cursor-default">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black uppercase italic">{item.title}</h3>
            <p className="font-bold text-gray-500 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="py-20 px-8 bg-yellow-50/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter underline decoration-red-500 decoration-8 underline-offset-8">
            Our Story
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
            It started with a simple obsession: find the perfect crunch. After three years of testing 
            starters and burning loaves, we finally cracked the code. Every morning at 4:00 AM, 
            the grid goes hot and the magic happens. We're not just a bakery; we're a neighborhood 
            hub for people who take their carbs seriously.
          </p>
        </div>
      </div>

      {/* --- FINAL CALL TO ACTION: THE BIG SOCIAL STAMPS --- */}
      <div className="p-10 md:p-24 bg-white 
                bg-[linear-gradient(90deg,rgba(239,68,68,0.25)_50%,transparent_50%),linear-gradient(rgba(239,68,68,0.25)_50%,transparent_50%)] 
                bg-[length:32px_32px] border-t-4 border-black">
        
        <div className="bg-white border-4 border-black p-12 md:p-20 rounded-[60px] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          {/* Decorative Corner Label */}
          <div className="absolute top-5 right-0 bg-red-600 text-white px-10 py-2 rotate-45 translate-x-12 translate-y-4 font-black text-sm uppercase">
            Freshly Baked
          </div>

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            Follow the <span className="text-red-600 italic">Crumb</span>
          </h2>
          <p className="text-xl font-bold italic text-gray-600 mb-12 uppercase tracking-widest">Daily Menu Drops on Social Media</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="https://www.facebook.com/share/1BnhvE2gcm/" className="flex flex-col items-center group">
              <div className="text-blue-600 text-8xl md:text-9xl bg-white p-4 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-[-10px] group-hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] transition-all">
                <FaFacebookSquare />
              </div>
              <span className="mt-4 font-black uppercase italic text-xl">Facebook</span>
            </a>

            <a href="https://www.instagram.com/blue_lalyy/?igsh=MWlxOXA4cTR1ZDQ5Zg%3D%3D&fbclid=IwY2xjawPEhspleHRuA2FlbQIxMABicmlkETFmbU9FNmY3N1FyQUl6NDhSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvNRhaVrum1B1Ukt3GPfK_OwOcdVaWxJ6mFaM31xoT6WOnGrMSlS_r9KJ56Q_aem_XwnaLJtAT86dk6vjzO8Dbw#" className="flex flex-col items-center group">
              <div className="text-pink-600 text-8xl md:text-9xl bg-white p-4 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-[-10px] group-hover:shadow-[12px_12px_0px_0px_rgba(219,39,119,1)] transition-all">
                <FaInstagram />
              </div>
              <span className="mt-4 font-black uppercase italic text-xl">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}