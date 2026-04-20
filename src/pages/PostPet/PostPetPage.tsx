import React, { useState } from "react";
import { useNavigate } from "react-router";
import { POSTED_PETS_KEY } from "../../data/pets";
import { Footer, LandingNavBar } from "../Landing/LandingPage";
import bgPawPattern from "../../assets/d15d8a3400ac588591d5698365ec9b4b844e08fe.png";
import "./PostPet.css";

// Reusable UI components for the form toggles
function PillBtn({ label, defaultActive = false }: { label: string; defaultActive?: boolean }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <button
      className={`pill-btn ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      {label}
    </button>
  );
}

function TraitChip({ label, defaultActive = false }: { label: string; defaultActive?: boolean }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <span
      className={`trait-chip ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      {label}
    </span>
  );
}

function HealthTag({ label, defaultActive = false }: { label: string; defaultActive?: boolean }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <span
      className={`health-tag ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      {label}
    </span>
  );
}

function IconCard({ icon, label, group, selected, onSelect }: { icon: string; label: string; group: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      className={`icon-card ${selected ? "active" : ""}`}
      onClick={onSelect}
    >
      <span className="text-2xl">{icon}</span> {label}
    </button>
  );
}

export default function PostPetPage() {
  const navigate = useNavigate();

  const [weight, setWeight] = useState(12);
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("Medium");

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");

  const [photos, setPhotos] = useState<string[]>(Array(6).fill(""));

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 6);
    const newPhotos = [...photos];
    
    files.forEach((file, i) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          newPhotos[i] = ev.target.result as string;
          setPhotos([...newPhotos]); // trigger render
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleContinue = () => {
    const existingStr = localStorage.getItem(POSTED_PETS_KEY);
    const existing = existingStr ? JSON.parse(existingStr) : [];
    const newId = 1000 + existing.length; // generate unique id
    
    const newPet = {
      id: newId,
      name: name || "New Pet",
      breed: breed || "Unknown",
      gender: gender as "Male" | "Female",
      age: age || "1 year",
      location: location || "Unknown City",
      size: size as "Small" | "Medium" | "Large",
      img: photos[0] || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80", // fallback
      about: about || "A wonderful companion looking for a forever home.",
    };
    
    existing.unshift(newPet); // add to top
    localStorage.setItem(POSTED_PETS_KEY, JSON.stringify(existing));
    
    navigate("/available-pets");
  };

  return (
    <div className="relative min-h-screen bg-[#fcfdfc] overflow-x-hidden post-pet-container">
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
        {/* Navbar */}
        <LandingNavBar activePage="list-a-pet" />

      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-6 pt-[88px] pb-4 fade-in">
        <span className="bg-yellow-400 text-gray-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">Step 1 of 3</span>
        <h1 className="text-5xl font-black text-gray-900 mt-3 mb-2 leading-tight">Give Your Pet a Forever Home 🏡</h1>
        <p className="text-gray-500 text-base font-semibold mb-6">
          Help your furry friend find the perfect loving family. Tell us all about them — the more detail, the better the match!
        </p>

        {/* Progress Bar */}
        <div className="progress-track mb-3">
          <div className="progress-fill" style={{ width: "33%" }}></div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-0 mb-10">
          <div className="flex flex-col items-center gap-1">
            <div className="step-dot active">1</div>
            <span className="text-xs font-bold text-blue-400">Pet Info</span>
          </div>
          <div className="step-line mx-1"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="step-dot">2</div>
            <span className="text-xs font-bold text-gray-400">Photos</span>
          </div>
          <div className="step-line mx-1"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="step-dot">3</div>
            <span className="text-xs font-bold text-gray-400">Review</span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex gap-8 items-start">

          {/* LEFT: Form Column */}
          <div className="flex-1 flex flex-col gap-6">

            {/* 1. About Your Pet */}
            <div className="section-card fade-in delay-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="sec-icon bg-blue-100">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">About Your Pet</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="post-pet-label">Pet's Name</label>
                  <input className="input-field" type="text" placeholder="e.g. Buddy" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label className="post-pet-label">Species</label>
                  <div className="select-wrap">
                    <select className="input-field pr-8">
                      <option value="">Select species</option>
                      <option>Dog</option>
                      <option>Cat</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="post-pet-label">Breed</label>
                  <input className="input-field" type="text" placeholder="e.g. Golden Retriever" value={breed} onChange={e => setBreed(e.target.value)} />
                </div>
                <div>
                  <label className="post-pet-label">Mixed Breed?</label>
                  <div className="flex gap-2 mt-1">
                    <PillBtn label="Yes" />
                    <PillBtn label="No" defaultActive={true} />
                    <PillBtn label="Unknown" />
                  </div>
                </div>
                <div>
                  <label className="post-pet-label">Date of Birth</label>
                  <input className="input-field" type="date" />
                </div>
                <div>
                  <label className="post-pet-label">Age</label>
                  <div className="select-wrap">
                    <select className="input-field pr-8" value={age} onChange={e => setAge(e.target.value)}>
                      <option value="">Select age</option>
                      <option value="3 months">Under 3 months</option>
                      <option value="6 months">3–6 months</option>
                      <option value="12 months">6–12 months</option>
                      <option value="2 years">1–2 years</option>
                      <option value="5 years">2–5 years</option>
                      <option value="8 years">5–8 years</option>
                      <option value="9 years">8+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div className="mt-5">
                <label className="post-pet-label">Gender</label>
                <div className="flex gap-3 mt-1">
                  <IconCard icon="♂️" label="Male" group="gender" selected={gender === "Male"} onSelect={() => setGender("Male")} />
                  <IconCard icon="♀️" label="Female" group="gender" selected={gender === "Female"} onSelect={() => setGender("Female")} />
                </div>
              </div>

              {/* Size */}
              <div className="mt-5">
                <label className="post-pet-label">Size</label>
                <div className="flex gap-3 mt-1 flex-wrap">
                  <IconCard icon="🐭" label="Tiny" group="size" selected={size === "Tiny"} onSelect={() => setSize("Tiny")} />
                  <IconCard icon="🐇" label="Small" group="size" selected={size === "Small"} onSelect={() => setSize("Small")} />
                  <IconCard icon="🐕" label="Medium" group="size" selected={size === "Medium"} onSelect={() => setSize("Medium")} />
                  <IconCard icon="🦮" label="Large" group="size" selected={size === "Large"} onSelect={() => setSize("Large")} />
                  <IconCard icon="🐻" label="XL" group="size" selected={size === "XL"} onSelect={() => setSize("XL")} />
                </div>
              </div>

              {/* Weight */}
              <div className="mt-5">
                <label className="post-pet-label">Approximate Weight: <span id="wt-val" className="text-blue-400">{weight} kg</span></label>
                <input type="range" min="0" max="80" value={weight} step="1" className="w-full mt-1" onChange={(e) => setWeight(Number(e.target.value))} />
                <div className="flex justify-between text-xs text-gray-400 font-semibold mt-1">
                  <span>0 kg</span><span>80 kg</span>
                </div>
              </div>
            </div>

            {/* 2. Personality & Traits */}
            <div className="section-card fade-in delay-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="sec-icon bg-yellow-100">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">Personality & Traits</span>
              </div>

              <label className="post-pet-label mb-3">Select all that apply</label>
              <div className="flex flex-wrap gap-2 mb-5">
                <TraitChip label="🐾 Playful" defaultActive={true} />
                <TraitChip label="😴 Calm" defaultActive={true} />
                <TraitChip label="🧠 Intelligent" />
                <TraitChip label="🤗 Affectionate" defaultActive={true} />
                <TraitChip label="🏃 Energetic" />
                <TraitChip label="🔇 Quiet" />
                <TraitChip label="👦 Good with kids" defaultActive={true} />
                <TraitChip label="🐱 Good with cats" />
                <TraitChip label="🐶 Good with dogs" defaultActive={true} />
                <TraitChip label="🏠 Indoor only" />
                <TraitChip label="🌿 Loves outdoors" />
                <TraitChip label="🎓 Well-trained" />
                <TraitChip label="🛁 House-trained" />
                <TraitChip label="🚗 Good in car" />
                <TraitChip label="🔒 Needs secure yard" />
                <TraitChip label="👤 Shy at first" />
              </div>

              {/* Activity Level */}
              <div className="mt-4">
                <label className="post-pet-label">Activity Level</label>
                <div className="flex gap-2 mt-1">
                  <PillBtn label="🛋️ Couch Potato" />
                  <PillBtn label="🚶 Moderate" defaultActive={true} />
                  <PillBtn label="⚡ High Energy" />
                </div>
              </div>
            </div>

            {/* 3. Health & Care */}
            <div className="section-card fade-in delay-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="sec-icon bg-green-100">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">Health & Care</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <HealthTag label="Vaccinated" defaultActive={true} />
                <HealthTag label="Neutered / Spayed" defaultActive={true} />
                <HealthTag label="Microchipped" />
                <HealthTag label="Dewormed" defaultActive={true} />
                <HealthTag label="Vet Records Available" />
                <HealthTag label="Special Needs" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="post-pet-label">Last Vet Visit</label>
                  <input className="input-field" type="date" />
                </div>
                <div>
                  <label className="post-pet-label">Known Allergies</label>
                  <input className="input-field" type="text" placeholder="e.g. None / Chicken" />
                </div>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Medical Notes (optional)</label>
                <textarea className="input-field" placeholder="Any ongoing medication, conditions, or special care requirements…"></textarea>
              </div>
            </div>

            {/* 4. Upload Photos */}
            <div className="section-card fade-in delay-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="sec-icon bg-pink-100">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">Upload Photos</span>
              </div>

              <div className="upload-area" onClick={() => document.getElementById('photoUpload')?.click()}>
                <div className="text-4xl mb-2">📸</div>
                <p className="font-black text-gray-600 text-sm">Click to upload or drag & drop photos</p>
                <p className="text-xs text-gray-400 font-semibold mt-1">PNG, JPG, WEBP up to 10MB each • Max 6 photos</p>
                <input id="photoUpload" type="file" multiple accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              </div>

              <div className="photo-grid">
                {photos.map((src, idx) => (
                  <div key={idx} className={`photo-slot ${src ? 'filled' : ''}`} title={idx === 0 ? "Main photo" : undefined}>
                    {src ? (
                      <img src={src} alt="Uploaded preview" />
                    ) : (
                      <>
                        📷
                        {idx === 0 && <><br /><span className="text-xs text-gray-400 font-bold mt-1">Main</span></>}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-semibold mt-3">💡 Clear, well-lit photos increase adoption chances by 3×</p>
            </div>

            {/* 5. Adoption Preferences */}
            <div className="section-card fade-in delay-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="sec-icon bg-purple-100">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">Adoption Preferences</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="post-pet-label">Ideal Home Type</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <PillBtn label="🏠 House" defaultActive={true} />
                    <PillBtn label="🏢 Apartment" />
                    <PillBtn label="🏡 Any" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Suitable For</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  <PillBtn label="👨‍👩‍👧 Families" defaultActive={true} />
                  <PillBtn label="👴 Seniors" defaultActive={true} />
                  <PillBtn label="🏃 Active owners" />
                  <PillBtn label="🏠 First-time owners" />
                  <PillBtn label="👤 Single person" />
                </div>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Reason for Adoption</label>
                <div className="select-wrap">
                  <select className="input-field pr-8">
                    <option value="">Please select a reason</option>
                    <option>Relocating abroad</option>
                    <option>Allergic family member</option>
                    <option>Financial constraints</option>
                    <option>Landlord restrictions</option>
                    <option>New baby / health reasons</option>
                    <option>Owner passed away</option>
                    <option>Too many pets</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Location / City</label>
                <input className="input-field" type="text" placeholder="e.g. Bangalore, Karnataka" value={location} onChange={e => setLocation(e.target.value)} />
              </div>
            </div>

            {/* 6. Your Story */}
            <div className="section-card fade-in delay-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="sec-icon bg-orange-100">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 000 2h3a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-xl font-black text-gray-800">Tell Their Story</span>
              </div>
              <p className="text-xs font-semibold text-gray-400 mb-4">A heartfelt story helps families connect. What makes your pet special?</p>

              <div>
                <label className="post-pet-label">Pet's Story / Description</label>
                <textarea className="input-field" style={{ minHeight: "130px" }} placeholder="e.g. Buddy came into our lives 3 years ago as a tiny pup. He loves morning walks, cuddles on the couch, and gets along wonderfully with everyone he meets…" value={about} onChange={e => setAbout(e.target.value)}></textarea>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Daily Routine</label>
                <textarea className="input-field" placeholder="e.g. Two walks a day, fed twice, sleeps on a dog bed indoors…"></textarea>
              </div>

              <div className="mt-4">
                <label className="post-pet-label">Any Fears or Triggers?</label>
                <input className="input-field" type="text" placeholder="e.g. Loud noises, strangers initially, car rides" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-2 mb-4 fade-in delay-5">
              <button onClick={() => navigate("/available-pets")} className="flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Cancel
              </button>
              <div className="flex gap-3">
                <button className="pill-btn" style={{ padding: "12px 24px", fontSize: "14px" }}>Save Draft</button>
                <button className="submit-btn" style={{ gap: "8px" }} onClick={handleContinue}>
                  Continue
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Sidebar */}
          <div className="w-72 flex flex-col gap-4 sticky top-20">

            {/* Why list with us */}
            <div className="yellow-card fade-in delay-1">
              <h3 className="font-black text-gray-800 text-base mb-2">Why list with Paw? 🐾</h3>
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                We've helped over <strong>2,400+ pets</strong> find forever homes. Our detailed matching system connects pets with the right families, not just the first taker.
              </p>
            </div>

            {/* Success story */}
            <div className="relative rounded-2xl overflow-hidden fade-in delay-2">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80"
                alt="Happy dog"
                className="w-full h-44 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3">
                <p className="text-white text-xs font-bold">"Listed on Monday, rehomed by Friday!" – Max's owner</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bottom-0 left-0 w-full overflow-x-hidden mt-8">
        <Footer />
      </div>
      </div>
    </div>
  );
}
