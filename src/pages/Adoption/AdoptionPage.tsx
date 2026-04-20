import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ADOPTED_PET_IDS_KEY, ALL_PETS, SELECTED_PET_ID_KEY } from "../../data/pets";
import { Footer, LandingNavBar } from "../Landing/LandingPage";
import bgPattern from "../../assets/pet adoption background.png";

type HomeType = "House" | "Apartment" | "Townhome" | "Other";
type PetCount = "None" | "1-2" | "3+";

const HOME_TYPES: HomeType[] = ["House", "Apartment", "Townhome", "Other"];
const PET_COUNTS: PetCount[] = ["None", "1-2", "3+"];

const pawPatternStyle: React.CSSProperties = {
  backgroundImage: `url("${bgPattern}")`,
  backgroundRepeat: "repeat",
  backgroundSize: "100% auto",
  backgroundPosition: "top center",
};

function HomeTypeIcon({ type }: { type: HomeType }) {
  if (type === "Other") {
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    );
  }

  if (type === "Apartment") {
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-[#4db8e8] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

export default function AdoptionPage() {
  const navigate = useNavigate();

  const [homeType, setHomeType] = useState<HomeType>("Apartment");
  const [petCount, setPetCount] = useState<PetCount>("1-2");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");

  const formState = useMemo(
    () => ({ fullName, phone, address, occupation, homeType, petCount }),
    [fullName, phone, address, occupation, homeType, petCount]
  );

  const selectedPet = useMemo(() => {
    const selectedId = Number(localStorage.getItem(SELECTED_PET_ID_KEY));
    if (Number.isFinite(selectedId)) {
      const matchedPet = ALL_PETS.find((pet) => pet.id === selectedId);
      if (matchedPet) {
        return matchedPet;
      }
    }
    return ALL_PETS[0];
  }, []);

  const handleSubmit = () => {
    const selectedPetId = Number(localStorage.getItem(SELECTED_PET_ID_KEY));
    if (Number.isFinite(selectedPetId) && selectedPetId > 0) {
      let adoptedIds: number[] = [];
      try {
        const raw = localStorage.getItem(ADOPTED_PET_IDS_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        if (Array.isArray(parsed)) {
          adoptedIds = parsed.filter((id): id is number => typeof id === "number");
        }
      } catch {
        adoptedIds = [];
      }

      const nextIds = Array.from(new Set([...adoptedIds, selectedPetId]));
      localStorage.setItem(ADOPTED_PET_IDS_KEY, JSON.stringify(nextIds));
      localStorage.removeItem(SELECTED_PET_ID_KEY);
    }

    console.log("Adoption form draft:", formState);
    navigate("/available-pets");
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-['Inter']" style={pawPatternStyle}>
      <LandingNavBar activePage="available-pets" />

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="mb-2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-widest text-gray-800">Step 1 of 3</span>
        </div>
        <h1 className="mb-2 mt-3 font-['Poppins'] text-4xl font-black leading-tight text-gray-900 md:text-5xl">Start Your Adoption Journey</h1>
        <p className="mb-6 text-base font-semibold text-gray-500">
          We're so excited you've decided to open your heart to a new furry friend!
          <br />
          Let's get the basics covered first.
        </p>

        <div className="mb-10 h-[6px] w-full rounded-full bg-gray-200">
          <div className="h-[6px] w-1/3 rounded-full bg-[#4db8e8]" />
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <section className="rounded-[18px] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-['Poppins'] text-xl font-black text-gray-800">Personal Information</span>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block">
                  <span className="mb-1 block text-sm font-bold text-gray-700">Full Name</span>
                  <input placeholder="Preeti" className="w-full rounded-[10px] border-[1.5px] border-[#e2e8f0] bg-white px-[14px] py-[10px] text-sm text-gray-500 outline-none transition-colors focus:border-[#4db8e8]" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-bold text-gray-700">Phone Number</span>
                  <input placeholder="+91 XXXXXXXXXX" className="w-full rounded-[10px] border-[1.5px] border-[#e2e8f0] bg-white px-[14px] py-[10px] text-sm text-gray-500 outline-none transition-colors focus:border-[#4db8e8]" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-bold text-gray-700">Home Address</span>
                  <input placeholder="Sonipat, Haryana" className="w-full rounded-[10px] border-[1.5px] border-[#e2e8f0] bg-white px-[14px] py-[10px] text-sm text-gray-500 outline-none transition-colors focus:border-[#4db8e8]" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-bold text-gray-700">Occupation</span>
                  <input placeholder="Engineer" className="w-full rounded-[10px] border-[1.5px] border-[#e2e8f0] bg-white px-[14px] py-[10px] text-sm text-gray-500 outline-none transition-colors focus:border-[#4db8e8]" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                </label>
              </div>
            </section>

            <section className="rounded-[18px] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <span className="font-['Poppins'] text-xl font-black text-gray-800">Home Environment</span>
              </div>

              <div className="mb-5">
                <p className="mb-3 block text-sm font-bold text-gray-700">What type of home do you live in?</p>
                <div className="flex flex-wrap gap-3">
                  {HOME_TYPES.map((type) => {
                    const active = homeType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setHomeType(type)}
                        className={`flex cursor-pointer flex-col items-center gap-1 rounded-xl border-2 px-4 py-2 text-[13px] font-semibold transition-all ${
                          active
                            ? "border-[#4db8e8] bg-[#e8f7fd] text-[#2b8ab3]"
                            : "border-[#e2e8f0] bg-white text-[#4a5568] hover:border-[#4db8e8]"
                        }`}
                      >
                        <HomeTypeIcon type={type} />
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black text-gray-700">Any other pets at home?</p>
                  <p className="mt-0.5 text-xs font-semibold text-gray-400">Tell us about your current family members.</p>
                </div>
                <div className="mt-1 flex gap-2">
                  {PET_COUNTS.map((count) => {
                    const active = petCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setPetCount(count)}
                        className={`rounded-[20px] border-2 px-[22px] py-[6px] text-sm font-bold transition-all ${
                          active
                            ? "border-[#4db8e8] bg-[#4db8e8] text-white"
                            : "border-[#e2e8f0] bg-white text-[#4a5568]"
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <div className="mb-6 mt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate("/pet-profile")}
                className="flex items-center gap-2 text-sm font-bold text-blue-400 transition-colors hover:text-blue-600"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 rounded-full bg-blue-400 px-10 py-3 font-black text-white transition-colors hover:bg-blue-500"
              >
                Submit
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </button>
            </div>
          </div>

          <aside className="sticky top-28 w-full max-w-sm space-y-4 lg:w-72">
            <div className="rounded-[20px] bg-[#f5c518] px-[22px] py-5">
              <h3 className="mb-2 font-['Poppins'] text-base font-black text-gray-800">Why we ask this?</h3>
              <p className="text-sm font-semibold leading-relaxed text-gray-700">
                Every animal at Paw has unique needs. Matching your lifestyle with a pet's personality is our secret to forever homes!
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px]">
              <img src={selectedPet.img} alt={selectedPet.name} className="h-44 w-full rounded-2xl object-cover" />
              <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-xs font-bold text-white">"{selectedPet.name} is waiting to find a loving forever home."</p>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#f0f0f0] px-[22px] py-5">
              <p className="mb-3 font-['Poppins'] text-sm font-black text-gray-800">Ready to meet them?</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-gray-700">Review current residents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-gray-700">Schedule a meet-and-greet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-gray-700">Bring your new best friend home!</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <div className="relative bottom-0 left-0 w-full overflow-x-hidden">
        <Footer />
      </div>
    </div>
  );
}
