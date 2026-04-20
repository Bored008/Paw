import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import LandingPage, { Component77951261HandDrawnPaintPawPrint } from "./pages/Landing/LandingPage";
import BrowsePage from "./pages/Browse/BrowsePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AdoptionPage from "./pages/Adoption/AdoptionPage";
import bgPattern from "./assets/pet adoption background.png";

// ─── Landing page wrapper (keeps the existing scale logic) ───────────────────
function LandingWrapper() {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(5361);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const trueWidth = window.outerWidth > 0 ? window.outerWidth - 16 : window.innerWidth;
      setScale(trueWidth / 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // "Adopt Now" button visual position: top-[1700px] in the 1440px canvas
  // After scaling: visually at 1700 * scale px from the top of the scaled content
  const adoptBtnTop = 1700 * scale;

  return (
    <div
      className="w-full min-h-screen overflow-hidden flex justify-center"
      style={{
        position: "relative",
        height: contentHeight * scale,
        backgroundImage: `url("${bgPattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "1440px",
          height: `${contentHeight}px`,
        }}
      >
        <LandingPage onHeightChange={setContentHeight} />
      </div>
    </div>
  );
}

// ─── Browse Dogs page wrapper ─────────────────────────────────────────────────
function BrowseWrapper() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url("${bgPattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <BrowsePage />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingWrapper />} />
      <Route path="/available-pets" element={<BrowseWrapper />} />
      <Route path="/pet-profile" element={<ProfilePage />} />
      <Route path="/adoption" element={<AdoptionPage />} />
    </Routes>
  );
}
