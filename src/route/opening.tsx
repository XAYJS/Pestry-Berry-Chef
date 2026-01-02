import { GiClockwork, GiBread, GiCoffeeCup } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";


export default function Opening() {
  const schedule = [
    { day: "Monday", hours: "8:00 AM - 10:00 PM", status: "Open" },
    { day: "Tuesday", hours: "8:00 AM - 10:00 PM", status: "Open" },
    { day: "Wednesday", hours: "8:00 AM - 10:00 PM", status: "Open" },
    { day: "Thursday", hours: "8:00 AM - 10:00 PM", status: "Open" },
    { day: "Friday", hours: "8:00 AM - 11:00 PM", status: "Late Night" },
    { day: "Saturday", hours: "9:00 AM - 11:00 PM", status: "Late Night" },
    { day: "Sunday", hours: "9:00 AM - 8:00 PM", status: "Family Day" },
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-white">
      {/* HEADER SECTION */}
      <div className="bg-yellow-100 border-b-4 border-black p-12 text-center relative overflow-hidden">
        {/* The Grid Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(239,68,68,1)_50%,transparent_50%),linear-gradient(rgba(239,68,68,1)_50%,transparent_50%)] bg-[length:32px_32px]"></div>
        
        <div className="relative z-10">
          <GiClockwork className="text-7xl text-red-600 mx-auto mb-4 animate-spin-slow" />
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-md">
            COME <span className="text-red-600 italic">GET IT</span> WHILE IT'S HOT
          </h1>
          <p className="text-xl font-bold mt-4 uppercase tracking-widest text-gray-700">
            Fresh Batches Every Morning at 8:00 AM
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE: THE HOURS LIST */}
        <div className="p-8 md:p-20 border-r-4 border-black">
          <h2 className="text-4xl font-black uppercase italic mb-10 underline decoration-yellow-400 decoration-8 underline-offset-4">
            Weekly Schedule
          </h2>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-2 group">
                <div>
                  <h3 className="text-2xl font-black uppercase group-hover:text-red-600 transition-colors">{item.day}</h3>
                  <p className="font-bold text-gray-500">{item.hours}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase mb-1 ${
                  item.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: INFO & MAP PLACEHOLDER */}
        <div className="bg-white 
                bg-[linear-gradient(90deg,rgba(239,68,68,0.25)_50%,transparent_50%),linear-gradient(rgba(239,68,68,0.25)_50%,transparent_50%)] 
                bg-[length:32px_32px] p-8 md:p-20 flex flex-col justify-center">
          
          <div className="bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white p-3 rounded-lg text-3xl">
                <MdLocationOn />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase italic">Find the Smell</h4>
                <p className="font-bold text-gray-600 uppercase">123 Sourdough Lane, <br/> Bread City, BC 4567</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-yellow-400 text-black p-3 rounded-lg text-3xl">
                <GiCoffeeCup />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase italic">Early Bird Special</h4>
                <p className="font-bold text-gray-600 uppercase italic">Free Espresso with any <br/> pastry before 9:00 AM</p>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-black">
              <button className="w-full bg-black text-white py-4 font-black uppercase italic hover:bg-red-600 transition-colors tracking-tighter text-xl flex items-center justify-center gap-3">
                <GiBread className="text-3xl" />
                See Today's Specials
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BANNER */}
      <div className="bg-black text-white p-6 text-center">
        <p className="font-black italic text-2xl uppercase tracking-[0.2em] animate-pulse">
          Closed on Public Holidays — Check Instagram for Updates
        </p>
      </div>
    </div>
  );
}