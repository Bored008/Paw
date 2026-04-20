import React, { useMemo } from 'react';
import { useNavigate } from "react-router";
import bgPawPattern from "../../assets/d15d8a3400ac588591d5698365ec9b4b844e08fe.png";
import { getAllPetsCombined, PetData, SELECTED_PET_ID_KEY } from "../../data/pets";
import { Footer, LandingNavBar } from "../Landing/LandingPage";

import {
  Frame1 as ArrowIcon,
  Container5 as PinIcon,
  Container10 as BreedPawIcon,
  Container11 as HeartIcon,
  Container14 as FriendlyIcon,
  Container16 as EnergeticIcon,
  Container18 as ChildSafeIcon,
  Container20 as CheckmarkIcon
} from "./Generated/DogProfile";


const HeroSection = ({ pet }: { pet: PetData }) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full max-w-7xl mx-auto rounded-[48px] overflow-hidden min-h-[500px] lg:min-h-[716px] flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={pet.img} alt={pet.name} className="w-full h-full object-cover object-[center_22%]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 md:p-12 lg:p-16">
        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 md:left-8 flex items-center">
          <button className="w-12 h-12 md:w-24 md:h-24 hover:scale-110 transition-transform opacity-75 hover:opacity-100 rotate-180">
            <ArrowIcon variant="prev" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 flex items-center">
          <button className="w-12 h-12 md:w-24 md:h-24 hover:scale-110 transition-transform opacity-75 hover:opacity-100">
            <ArrowIcon variant="next" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 pl-12 pr-12">
          {/* Left info */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="bg-[#fcc800] text-[#574300] font-['Inter'] font-semibold text-xs md:text-sm tracking-wide uppercase px-4 py-1.5 rounded-sm">
                Ready For Home
              </span>
              <span className="bg-[#c8f24f] text-[#445900] font-['Inter'] font-semibold text-xs md:text-sm tracking-wide uppercase px-4 py-1.5 rounded-sm">
                {pet.age}
              </span>
            </div>

            <h1 className="font-['Poppins'] font-extrabold text-5xl md:text-7xl lg:text-[96px] leading-none text-white tracking-[-0.05em]">
              {pet.name}
            </h1>

            <div className="flex items-center gap-2 opacity-90 text-white font-['Inter'] font-medium text-lg md:text-xl">
              <div className="w-4 h-5"><PinIcon /></div>
              <span>{pet.location}</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[24px] w-full max-w-[320px] flex flex-col gap-4 shadow-xl">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="font-['Inter'] font-semibold text-[#767773] text-xs tracking-widest uppercase">Breed</span>
                <span className="font-['Inter'] font-semibold text-[#2e2f2c] text-base">{pet.breed}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#46a5ff]/20 flex items-center justify-center text-[#4CBFFF]">
                <div className="w-5 h-[19px]"><BreedPawIcon /></div>
              </div>
            </div>
            <button
              onClick={() => navigate("/adoption")}
              className="w-full bg-[#4cbfff] hover:bg-[#3ba2f2] transition-colors py-4 rounded-full flex items-center justify-center gap-2 text-white font-['Inter'] font-semibold text-lg"
            >
              Adopt Me
              <div className="w-5 h-[18px]"><HeartIcon /></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Traits = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
      {/* Friendly */}
      <div className="bg-[#c8f24f] rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 items-start shadow-sm">
        <div className="w-full h-7 mb-2"><FriendlyIcon /></div>
        <h3 className="font-['Poppins'] font-bold text-[#445900] text-xl">Friendly</h3>
        <p className="font-['Be_Vietnam_Pro'] text-[#445900]/80 text-sm leading-snug">
          Loves meeting new people<br />and other dogs instantly.
        </p>
      </div>

      {/* Energetic */}
      <div className="bg-[#46a5ff] rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 items-start shadow-sm">
        <div className="w-full h-7.5 mb-2"><EnergeticIcon /></div>
        <h3 className="font-['Inter'] font-bold text-[#002442] text-xl">Energetic</h3>
        <p className="font-['Inter'] text-[#002442]/80 text-sm leading-snug">
          Enjoys two long walks a<br />day and active playtime.
        </p>
      </div>

      {/* Child Safe */}
      <div className="bg-[#fcc800] rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 items-start shadow-sm">
        <div className="w-full h-7 mb-2"><ChildSafeIcon /></div>
        <h3 className="font-['Inter'] font-bold text-[#574300] text-xl">Child Safe</h3>
        <p className="font-['Inter'] text-[#574300]/80 text-sm leading-snug">
          Extremely patient and<br />gentle with children of all<br />ages.
        </p>
      </div>
    </div>
  );
};

const MainContent = ({ pet }: { pet: PetData }) => {
  return (
    <section className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16">
      {/* Left Column (About & Traits) */}
      <div className="lg:col-span-8 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-['Poppins'] font-extrabold text-[#4cbfff] text-3xl md:text-4xl tracking-tight">
            About Me
          </h2>
          <div className="font-['Inter'] text-[#5b5c58] text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              {pet.about}
            </p>
            <p>
              {`${pet.name} is a ${pet.gender.toLowerCase()} ${pet.breed} from ${pet.location}. ${pet.age} old and eager to find a loving forever home.`}
            </p>
          </div>
        </div>

        <Traits />
      </div>

      {/* Right Column (Medical Checklist) */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-[48px] border-2 border-black/5 p-8 shadow-xl shadow-[#4cbfff]/5 sticky top-32">
          <h3 className="font-['Inter'] font-bold text-[#2e2f2c] text-2xl mb-6">
            Health & Medical
          </h3>

          <ul className="flex flex-col gap-4">
            {[
              "Fully Vaccinated",
              "Spayed / Neutered",
              "Microchipped",
              "Heartworm Tested (Negative)",
              "Dental Cleaned Recently"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0 text-[#4D6300]">
                  <CheckmarkIcon />
                </div>
                <span className="font-['Inter'] font-medium text-[#5b5c58] text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};


export default function ProfilePage() {
  const selectedPet = useMemo(() => {
    const selectedId = Number(localStorage.getItem(SELECTED_PET_ID_KEY));
    const combinedPets = getAllPetsCombined();
    if (Number.isFinite(selectedId)) {
      const matchedPet = combinedPets.find((pet) => pet.id === selectedId);
      if (matchedPet) {
        return matchedPet;
      }
    }
    return combinedPets[0];
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fcfdfc] overflow-x-hidden font-['Inter'] text-[#2e2f2c]">
      {/* Background Paw Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('${bgPawPattern}')`,
          backgroundSize: '1280px auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <LandingNavBar activePage="available-pets" />

        <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 pb-[100px] w-full mx-auto">
          <HeroSection pet={selectedPet} />
          <MainContent pet={selectedPet} />
        </main>

        {/* Footer section — same exported <Footer /> as landing page */}
        <div className="relative bottom-0 left-0 w-full overflow-x-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
