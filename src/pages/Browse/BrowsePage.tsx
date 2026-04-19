import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { Footer, LandingNavBar } from "../Landing/LandingPage";
import img1 from "../../assets/3ee116e0e0c5d8493030f59bcdee8e02f4f843de.png";
import img2 from "../../assets/39822095d3bd75db7100b528723679e4b42cf543.png";
import img3 from "../../assets/9454f91fce9e5214dc9ff8b02cd0332a7039c7fe.png";
import img4 from "../../assets/1e9849d13a0b644f82eadce2da5525778537dae6.png";
import img5 from "../../assets/a4dc20a82cb8d933274abe6781201d2989656bbd.png";
import img6 from "../../assets/a7866d29e4780753510254295b12e47b847d44e2.png";
// heroImg removed — background is now the paw pattern from App.tsx BrowseWrapper

// ─── Data ───────────────────────────────────────────────────────────────────
const ALL_PETS = [
  { id: 1,  name: "Rocky",   breed: "Indie",     gender: "Male",   age: "2 years",    location: "Sonipat, Haryana",   size: "Medium", img: img1 },
  { id: 2,  name: "Lucky",   breed: "Indie",     gender: "Male",   age: "5 months",   location: "Panipat, Haryana",   size: "Small",  img: img2 },
  { id: 3,  name: "Sheru",   breed: "Labrador",  gender: "Male",   age: "1 year",     location: "Delhi, NCR",         size: "Large",  img: img3 },
  { id: 4,  name: "Milo",    breed: "Pomeranian",gender: "Male",   age: "8 months",   location: "Gurgaon, Haryana",   size: "Small",  img: img4 },
  { id: 5,  name: "Bella",   breed: "Indie",     gender: "Female", age: "3 years",    location: "Rohtak, Haryana",    size: "Medium", img: img5 },
  { id: 6,  name: "Daisy",   breed: "Beagle",    gender: "Female", age: "6 months",   location: "Faridabad, Haryana", size: "Small",  img: img6 },
  { id: 7,  name: "Bruno",   breed: "Indie",     gender: "Male",   age: "4 years",    location: "Sonipat, Haryana",   size: "Large",  img: img1 },
  { id: 8,  name: "Cookie",  breed: "Poodle",    gender: "Female", age: "1 year",     location: "Delhi, NCR",         size: "Small",  img: img2 },
  { id: 9,  name: "Charlie", breed: "Labrador",  gender: "Male",   age: "2 years",    location: "Panipat, Haryana",   size: "Large",  img: img3 },
  { id: 10, name: "Zara",    breed: "Indie",     gender: "Female", age: "7 months",   location: "Gurgaon, Haryana",   size: "Medium", img: img4 },
  { id: 11, name: "Buddy",   breed: "Beagle",    gender: "Male",   age: "3 years",    location: "Rohtak, Haryana",    size: "Medium", img: img5 },
  { id: 12, name: "Luna",    breed: "Pomeranian",gender: "Female", age: "5 months",   location: "Faridabad, Haryana", size: "Small",  img: img6 },
];

const BREEDS  = ["All", "Indie", "Labrador", "Pomeranian", "Beagle", "Poodle"];
const SIZES   = ["All", "Small", "Medium", "Large"];
const GENDERS = ["All", "Male", "Female"];
const PAGES_PER_VIEW = 6;

// ─── Sub-components ─────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="bg-[#4CBFFF] text-white font-[Inter,sans-serif] text-[11px] rounded-[20px] px-3 py-[3px] whitespace-nowrap">
      {label}
    </span>
  );
}

function PetCard({ pet }: { pet: typeof ALL_PETS[0] }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-black/[0.07] rounded-[32px] overflow-hidden flex flex-col cursor-pointer transition-all duration-[250ms]"
      style={{
        borderWidth: "1.5px",
        boxShadow: hovered ? "0 16px 40px rgba(76,191,255,0.22)" : "0 4px 18px rgba(0,0,0,0.10)",
        transform: hovered ? "translateY(-6px)" : "none",
      }}
    >
      {/* Image */}
      <div className="w-full overflow-hidden rounded-t-[30px]" style={{ aspectRatio: "1/1.05" }}>
        <img
          src={pet.img}
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-[350ms]"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
      </div>

      {/* Info */}
      <div className="px-[18px] pt-[14px] pb-[20px]">
        <p className="font-[Inter,sans-serif] font-semibold text-[17px] mb-2 text-[#111]">{pet.name}</p>
        <div className="flex gap-[6px] flex-wrap mb-[10px]">
          <Tag label={pet.breed} />
          <Tag label={pet.gender} />
          <Tag label={pet.age} />
        </div>
        <div className="h-px bg-black/[0.08] my-2" />
        <p className="font-[Inter,sans-serif] text-[11px] text-black/60 m-0">📍 {pet.location}</p>

        <button
          onClick={() => navigate("/pet-profile")}
          className="mt-[14px] w-full bg-[#4CBFFF] text-white font-[Inter,sans-serif] font-semibold text-[13px] border-none rounded-full py-[9px] cursor-pointer transition-colors duration-200 hover:bg-[#2db0f5]"
        >Adopt Me 🐾</button>
      </div>
    </div>
  );
}

function Sidebar({
  breed, setBreed,
  size, setSize,
  gender, setGender,
  search, setSearch,
  ageMax, setAgeMax,
}: {
  breed: string; setBreed: (v: string) => void;
  size: string; setSize: (v: string) => void;
  gender: string; setGender: (v: string) => void;
  search: string; setSearch: (v: string) => void;
  ageMax: number; setAgeMax: (v: number) => void;
}) {
  const navigate = useNavigate();
  return (
    <aside className="w-72 shrink-0 bg-white rounded-[48px] border-2 border-black/5 p-8 flex flex-col gap-7 h-fit sticky top-[110px]">
      {/* Header */}
      <div className="flex items-center gap-[10px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CBFFF"><path d="M4 6h16M7 12h10M10 18h4"/></svg>
        <span className="font-['Plus_Jakarta_Sans',Inter,sans-serif] font-bold text-xl text-[#4CBFFF]">Filters</span>
      </div>

      {/* Search */}
      <div>
        <label className="font-[Inter,sans-serif] font-semibold text-[13px] text-[#333] block mb-1">Search</label>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search by name…"
          className="w-full box-border px-[14px] py-[9px] rounded-xl border-[1.5px] border-black/[0.12] font-[Inter,sans-serif] text-[13px] outline-none"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="font-[Inter,sans-serif] font-semibold text-[13px] text-[#333] block mb-1">Gender</label>
        <div className="flex gap-2 flex-wrap mt-2">
          {GENDERS.map(g => (
            <button key={g} onClick={() => setGender(g)}
              className={`border-none rounded-full px-[14px] py-[6px] text-[12px] font-[Inter,sans-serif] cursor-pointer transition-colors duration-150 ${gender === g ? "bg-[#4CBFFF] text-white" : "bg-[#f1f1ec] text-[#444]"}`}>
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="font-[Inter,sans-serif] font-semibold text-[13px] text-[#333] block mb-1">Size</label>
        <div className="flex gap-2 flex-wrap mt-2">
          {SIZES.map(s => (
            <button key={s} onClick={() => setSize(s)}
              className={`border-none rounded-full px-[14px] py-[6px] text-[12px] font-[Inter,sans-serif] cursor-pointer transition-colors duration-150 ${size === s ? "bg-[#4CBFFF] text-white" : "bg-[#f1f1ec] text-[#444]"}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Breed */}
      <div>
        <label className="font-[Inter,sans-serif] font-semibold text-[13px] text-[#333] block mb-1">Breed</label>
        <div className="flex gap-2 flex-wrap mt-2">
          {BREEDS.map(b => (
            <button key={b} onClick={() => setBreed(b)}
              className={`border-none rounded-full px-[14px] py-[6px] text-[12px] font-[Inter,sans-serif] cursor-pointer transition-colors duration-150 ${breed === b ? "bg-[#4CBFFF] text-white" : "bg-[#f1f1ec] text-[#444]"}`}>
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Age Range */}
      <div>
        <label className="font-[Inter,sans-serif] font-semibold text-[13px] text-[#333] block mb-1">
          Age Range (months): 0–{ageMax}
        </label>
        <div className="mt-[10px]">
          <input
            type="range" min={0} max={60} value={ageMax}
            onChange={e => setAgeMax(+e.target.value)}
            className="w-full accent-[#4CBFFF]"
          />
        </div>
      </div>

      {/* Featured Badge */}
      <div className="bg-[#FCC800] rounded-[24px] p-[20px_22px]">
        <p className="font-[Inter,sans-serif] font-bold text-[15px] mb-[6px] text-[#5a3c00]">🌟 Featured Today</p>
        <p className="font-[Inter,sans-serif] text-[12px] text-[rgba(80,50,0,0.85)] mb-3">Rocky is waiting for a forever home. Don't miss him!</p>
        <button 
          onClick={() => navigate("/pet-profile")}
          className="bg-white text-[#5a3c00] font-[Inter,sans-serif] font-bold text-[12px] border-none rounded-full px-[18px] py-[7px] cursor-pointer"
        >
          Meet Rocky →
        </button>
      </div>
    </aside>
  );
}

function Pagination({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[rgba(173,173,169,0.3)] bg-transparent text-[#2E2F2C] font-['Be_Vietnam_Pro',Inter,sans-serif] font-semibold text-[15px] cursor-pointer transition-colors duration-150"
      >‹</button>
      {pages.map(p => (
        <button
          key={p} onClick={() => onChange(p)}
          className={`w-[42px] h-[42px] rounded-full font-['Be_Vietnam_Pro',Inter,sans-serif] text-[15px] cursor-pointer transition-colors duration-150
            ${p === page
              ? "border-none bg-[#4CBFFF] text-[#EDF3FF] font-bold"
              : "border-[1.5px] border-[rgba(173,173,169,0.3)] bg-transparent text-[#2E2F2C] font-semibold"
            }`}
        >{p}</button>
      ))}
      <button
        onClick={() => onChange(Math.min(total, page + 1))}
        className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[rgba(173,173,169,0.3)] bg-transparent text-[#2E2F2C] font-['Be_Vietnam_Pro',Inter,sans-serif] font-semibold text-[15px] cursor-pointer transition-colors duration-150"
      >›</button>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function BrowsePage() {

  const [breed,   setBreed]   = useState("All");
  const [size,    setSize]    = useState("All");
  const [gender,  setGender]  = useState("All");
  const [search,  setSearch]  = useState("");
  const [ageMax,  setAgeMax]  = useState(60);
  const [page,    setPage]    = useState(1);

  const ageInMonths = (age: string) => {
    const m = age.match(/(\d+)\s*(year|month)/i);
    if (!m) return 0;
    return m[2].toLowerCase().startsWith("year") ? +m[1] * 12 : +m[1];
  };

  const filtered = useMemo(() => ALL_PETS.filter(p => {
    const months = ageInMonths(p.age);
    return (
      (breed  === "All" || p.breed  === breed)  &&
      (size   === "All" || p.size   === size)   &&
      (gender === "All" || p.gender === gender) &&
      months <= ageMax                          &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }), [breed, size, gender, search, ageMax]);

  const totalPages = Math.ceil(filtered.length / PAGES_PER_VIEW);
  const visible = filtered.slice((page - 1) * PAGES_PER_VIEW, page * PAGES_PER_VIEW);

  return (
    <div className="min-h-screen font-[Inter,sans-serif] bg-transparent">
      <LandingNavBar activePage="available-pets" />

      {/* Main layout — paddingTop clears the fixed navbar height (~80px) */}
      <div className="max-w-[1280px] mx-auto px-6 pt-[88px] pb-20 flex gap-12 items-start">
        {/* Sidebar */}
        <Sidebar
          breed={breed}   setBreed={setBreed}
          size={size}     setSize={setSize}
          gender={gender} setGender={setGender}
          search={search} setSearch={setSearch}
          ageMax={ageMax} setAgeMax={v => { setAgeMax(v); setPage(1); }}
        />

        {/* Content */}
        <div className="flex-1 min-w-0 translate-y-[10px]">
          {/* Header & Search row */}
          <div className="flex items-end justify-between mb-8 translate-y-[15px]">
            <div>
              <div className="inline-block bg-[#C8F24F] rounded-[4px] px-[14px] py-[2px] mb-[10px]">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[11px] text-[#1a1a1a] tracking-[1px] uppercase">
                  Available Now
                </span>
              </div>
              <h1 className="font-['Plus_Jakarta_Sans',Inter,sans-serif] font-extrabold text-[48px] leading-none m-0 text-[#2E2F2C] tracking-[-2px]">
                Adoptable Paws
              </h1>
            </div>
            <div className="flex items-center gap-[14px]">
              <span className="font-[Inter,sans-serif] text-[13px] text-[#888]">
                {filtered.length} pets found
              </span>
              <div className="bg-[#F1F1EC] rounded-full px-5 py-[10px] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input
                  placeholder="Quick search…"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1); }}
                  className="bg-transparent border-none outline-none font-[Inter,sans-serif] text-[14px] w-[140px]"
                />
              </div>
            </div>
          </div>

          {/* Pet Grid */}
          {visible.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              {visible.map(pet => <PetCard key={pet.id} pet={pet} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-[#aaa]">
              <p className="text-[48px]">🐾</p>
              <p className="font-[Inter,sans-serif] text-[18px] font-semibold text-[#555]">No pets match your filters</p>
              <p className="text-[13px] text-[#999]">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination page={page} total={totalPages} onChange={p => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
          )}
        </div>
      </div>

      {/* Footer — copied from landing page */}
      <div className="w-full relative overflow-hidden h-[561px]">
        <Footer />
      </div>
    </div>
  );
}
