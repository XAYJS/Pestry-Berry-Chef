import { useNavigate } from "react-router-dom"; // Fix: import the hook, not the component
import Image from "../assets/choco.png";
import Image2 from "../assets/image.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#FFFEE0] overflow-hidden"> 
      
      {/* Background Chocolate Drip */}
      <img 
        src={Image} 
        alt="choco-bar" 
        className="w-full h-auto object-cover absolute top-0 left-0 z-0" 
      />

      {/* Main Content Container */}
      {/* Reduced pt-90 to pt-40 to create the overlapping effect */}
      <div className="relative z-10 flex flex-col md:flex-row items-center pt-90 justify-around max-w-7xl mx-auto gap-10 pb-40 px-10">
        
        {/* Cake Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={Image2} 
            alt="Delicious Cake Slice" 
            className="w-[450px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-8 text-left">
          {/* Cake Section */}
          <div>
            <h1 className="text-6xl font-black text-[#4A2C2A] mb-4 leading-tight">
              Signature Sweets
            </h1>
            <p className="text-xl text-[#5D4037] leading-relaxed max-w-md">
              Indulge in our mouth-watering cakes made with the finest ingredients. 
              Each slice is a masterpiece of flavor, crafted to make your moments sweeter.
            </p>
          </div>

          {/* Cafe Promotion Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#8D6E63] mb-3">
              Visit Our Cozy Corner
            </h2>
            <p className="text-lg text-[#6D4C41] italic max-w-sm">
              More than just a bakery—it's your daily escape. From aromatic artisanal 
              brews to the warm scent of fresh pastries, find your perfect spot.
            </p>
            <button 
              className="mt-8 px-10 py-3 bg-[#4A2C2A] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#5D4037] hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
              onClick={() => navigate("/order")}
            >
              Order Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}