import { useEffect, useState } from "react";
import PetAdoptionLandingPage from "../imports/PetAdoptionLandingPage/PetAdoptionLandingPage";
import bgPattern from "../assets/pet adoption background.png";

export default function App() {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(5361);

  useEffect(() => {
    const handleResize = () => {
      // Use outerWidth to detect actual window resizing rather than innerWidth 
      // which fluctuates with browser zoom (Ctrl +/-). 
      // Subtracting a small margin for standard window borders.
      const trueWidth = window.outerWidth > 0 ? window.outerWidth - 16 : window.innerWidth;
      // Figma design is exactly 1440px wide
      setScale(trueWidth / 1440);
    };

    // Initial scale calculation
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full min-h-screen overflow-hidden flex justify-center"
      style={{ 
        height: contentHeight * scale,
        backgroundImage: `url("${bgPattern}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'top center'
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '1440px',
          height: `${contentHeight}px`
        }}
      >
        <PetAdoptionLandingPage onHeightChange={setContentHeight} />
      </div>
    </div>
  );
}
