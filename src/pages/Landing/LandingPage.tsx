import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-l8a5nkkvbb";
import imgImage8 from "./3ee116e0e0c5d8493030f59bcdee8e02f4f843de.png";
import imgImage6 from "./39822095d3bd75db7100b528723679e4b42cf543.png";
import imgImage3 from "./9454f91fce9e5214dc9ff8b02cd0332a7039c7fe.png";
import imgImage7 from "./1e9849d13a0b644f82eadce2da5525778537dae6.png";
import imgImage2 from "./a4dc20a82cb8d933274abe6781201d2989656bbd.png";
import imgGeminiGeneratedImageRmm4V8Rmm4V8Rmm41 from "../../assets/Herosectionbackground.png";
import imgImage15 from "./a7866d29e4780753510254295b12e47b847d44e2.png";
import imgAdoptMePet020320211 from "./caa24ff1a8850a94ca7a7aa0ad695e37cf5785c3.png";
import imgScreenshot202604141108541 from "./46087fae1e7011e10003d977f8cfee57ade21bdf.png";
import imgConfusedCat1 from "./708b735cf3dc3c422efdc79e8551743cc00ebf97.png";
import imgEllipse3 from "./3c5613ea99708792c16fec180099686f7514eaa9.png";
import imgDogTips1 from "./46aa201904c47742d8ed961b9a407fd0c0050cc0.png";
import imgConfusedPuppy1 from "./38932c894b1ff0bc8ddf0bbe629b2dd80d20690d.png";
import imgCatTips1 from "./05d115c58ea3255032e4dc3852e875be7e5ae086.png";
import { imgFrame9, imgImage14, imgImage16, imgImage17, imgImage18 } from "./svg-aalpr";

function Frame4() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[5.55px] px-[18.876px] rounded-[17.528px] top-[50.92px] w-[46.516px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.798px]">Indie</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[57.46px] px-[18.876px] rounded-[17.528px] top-[50.92px] w-[46.516px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white w-[24.944px]">
        <p className="leading-[41.798px]">Male</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[109.37px] px-[5.73px] rounded-[17.528px] top-[50.92px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.798px]">5 Month old</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[5.55px] top-[50.92px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[71.34px] left-[11.55px] rounded-[6.629px] top-[264.42px] w-[228.29px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20.224px] justify-center leading-[0] left-[5.55px] not-italic right-[176.22px] text-[16.18px] text-black text-center top-[12.49px]">
        <p className="leading-[41.798px]">Lucky</p>
      </div>
      <Group2 />
      <div className="absolute h-0 left-0 right-0 top-[42.81px]">
        <div className="absolute inset-[-0.34px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.29 0.337079">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.75" strokeWidth="0.337079" x2="228.29" y1="0.168539" y2="0.168539" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20.609px] justify-center leading-[0] left-[5.55px] not-italic right-[84.82px] text-[10.787px] text-black text-center top-[34.09px]">
        <p className="leading-[41.798px]">Location: Sonipat, Haryana</p>
      </div>
    </div>
  );
}

function Frame9() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/pet-profile")}
      className="absolute bg-white border-[0.337px] border-[rgba(0,0,0,0.75)] border-solid h-[347.19px] left-[90px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_-392.617px] mask-size-[1243px_1159px] overflow-clip rounded-[16.18px] shadow-[0px_8px_15.5px_0px_rgba(0,0,0,0.25)] top-[1246.62px] w-[251.46px] cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ maskImage: `url('${imgFrame9}')` }}
    >
      <div className="-translate-x-1/2 absolute h-[331px] left-[calc(50%+0.27px)] rounded-[9px] top-[8.05px] w-[234px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full" src={imgImage8} />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[5.55px] px-[18.876px] rounded-[17.528px] top-[50.92px] w-[46.516px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.798px]">Indie</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[57.46px] px-[18.876px] rounded-[17.528px] top-[50.92px] w-[46.516px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white w-[24.944px]">
        <p className="leading-[41.798px]">Male</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[16.18px] items-center justify-center left-[109.37px] px-[5.73px] rounded-[17.528px] top-[50.92px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.787px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.798px]">5 Month old</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[5.55px] top-[50.92px]">
      <Frame7 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[71.34px] left-[11.55px] rounded-[6.629px] top-[264.42px] w-[228.29px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20.224px] justify-center leading-[0] left-[5.55px] not-italic right-[176.22px] text-[16.18px] text-black text-center top-[12.49px]">
        <p className="leading-[41.798px]">Lucky</p>
      </div>
      <Group4 />
      <div className="absolute h-0 left-0 right-0 top-[42.8px]">
        <div className="absolute inset-[-0.34px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.29 0.337079">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.75" strokeWidth="0.337079" x2="228.29" y1="0.168539" y2="0.168539" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20.609px] justify-center leading-[0] left-[5.55px] not-italic right-[84.82px] text-[10.787px] text-black text-center top-[34.08px]">
        <p className="leading-[41.798px]">Location: Sonipat, Haryana</p>
      </div>
    </div>
  );
}

function Frame11() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/pet-profile")}
      className="absolute bg-white border-[0.337px] border-[rgba(0,0,0,0.75)] border-solid h-[347.19px] left-[1098.54px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-997.54px_-393.561px] mask-size-[1243px_1159px] overflow-clip rounded-[16.18px] shadow-[0px_8px_15.6px_0px_rgba(0,0,0,0.25)] top-[1247.56px] w-[251.46px] cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ maskImage: `url('${imgFrame9}')` }}
    >
      <div className="-translate-x-1/2 absolute h-[331px] left-[calc(50%-0.27px)] rounded-[9px] top-[8.1px] w-[234px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full" src={imgImage6} />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[6.32px] px-[21.492px] rounded-[19.957px] top-[57.97px] w-[52.963px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white whitespace-nowrap">
        <p className="leading-[47.59px]">Indie</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[65.42px] px-[21.492px] rounded-[19.957px] top-[57.97px] w-[52.963px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white w-[28.4px]">
        <p className="leading-[47.59px]">Male</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[124.52px] px-[6.524px] rounded-[19.957px] top-[57.97px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white whitespace-nowrap">
        <p className="leading-[47.59px]">5 Month old</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[6.32px] top-[57.97px]">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[81.226px] left-[13.15px] rounded-[7.548px] top-[301.06px] w-[259.925px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23.027px] justify-center leading-[0] left-[6.32px] not-italic right-[200.64px] text-[18.422px] text-black text-center top-[14.22px]">
        <p className="leading-[47.59px]">Lucky</p>
      </div>
      <Group5 />
      <div className="absolute h-0 left-0 right-0 top-[48.74px]">
        <div className="absolute inset-[-0.38px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259.925 0.383789">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.75" strokeWidth="0.383789" x2="259.925" y1="0.191895" y2="0.191895" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23.465px] justify-center leading-[0] left-[6.32px] not-italic right-[96.57px] text-[12.281px] text-black text-center top-[38.81px]">
        <p className="leading-[47.59px]">Location: Sonipat, Haryana</p>
      </div>
    </div>
  );
}

function Frame14() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/pet-profile")}
      className="absolute bg-white border-[0.384px] border-[rgba(0,0,0,0.75)] border-solid h-[395.302px] left-[314.54px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-213.54px_-369.031px] mask-size-[1243px_1159px] overflow-clip rounded-[18.422px] shadow-[0px_8px_15.7px_0px_rgba(0,0,0,0.25)] top-[1223.03px] w-[286.306px] cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ maskImage: `url('${imgFrame9}')` }}
    >
      <div className="-translate-x-1/2 absolute h-[377px] left-[calc(50%-0.19px)] rounded-[9.21px] top-[8.59px] w-[267px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.21px]">
          <img alt="" className="absolute h-[99.97%] left-[-37.11%] max-w-none top-[0.1%] w-[162.85%]" src={imgImage3} />
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[6.32px] px-[21.492px] rounded-[19.957px] top-[57.97px] w-[52.963px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white whitespace-nowrap">
        <p className="leading-[47.59px]">Indie</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[65.42px] px-[21.492px] rounded-[19.957px] top-[57.97px] w-[52.963px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white w-[28.4px]">
        <p className="leading-[47.59px]">Male</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[18.422px] items-center justify-center left-[124.53px] px-[6.524px] rounded-[19.957px] top-[57.97px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.281px] text-center text-white whitespace-nowrap">
        <p className="leading-[47.59px]">5 Month old</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[6.32px] top-[57.97px]">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[81.226px] left-[13.15px] rounded-[7.548px] top-[301.06px] w-[259.925px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23.027px] justify-center leading-[0] left-[6.32px] not-italic right-[200.64px] text-[18.422px] text-black text-center top-[14.22px]">
        <p className="leading-[47.59px]">Lucky</p>
      </div>
      <Group7 />
      <div className="absolute h-0 left-0 right-0 top-[48.74px]">
        <div className="absolute inset-[-0.38px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259.925 0.383789">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.75" strokeWidth="0.383789" x2="259.925" y1="0.191895" y2="0.191895" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23.465px] justify-center leading-[0] left-[6.32px] not-italic right-[96.57px] text-[12.281px] text-black text-center top-[38.81px]">
        <p className="leading-[47.59px]">Location: Sonipat, Haryana</p>
      </div>
    </div>
  );
}

function Frame19() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/pet-profile")}
      className="absolute bg-white border-[0.384px] border-[rgba(0,0,0,0.75)] border-solid h-[395.302px] left-[839.09px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-738.092px_-369.031px] mask-size-[1243px_1159px] overflow-clip rounded-[18.422px] shadow-[0px_8px_15.6px_0px_rgba(0,0,0,0.25)] top-[1223.03px] w-[286.306px] cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ maskImage: `url('${imgFrame9}')` }}
    >
      <div className="-translate-x-1/2 absolute h-[376px] left-[calc(50%+0.25px)] rounded-[9px] top-[8.59px] w-[267px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9px] size-full" src={imgImage7} />
      </div>
      <Frame20 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[22.339px] items-center justify-center left-[7.66px] px-[26.062px] rounded-[24.201px] top-[70.3px] w-[64.225px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.893px] text-center text-white whitespace-nowrap">
        <p className="leading-[57.709px]">Indie</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[22.339px] items-center justify-center left-[79.33px] px-[26.062px] rounded-[24.201px] top-[70.3px] w-[64.225px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[14.893px] text-center text-white w-[34.439px]">
        <p className="leading-[57.709px]">Male</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#4cbfff] content-stretch flex h-[22.339px] items-center justify-center left-[151px] px-[7.912px] rounded-[24.201px] top-[70.3px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.893px] text-center text-white whitespace-nowrap">
        <p className="leading-[57.709px]">5 Month old</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[7.66px] top-[70.3px]">
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[98.499px] left-[15.95px] rounded-[7.548px] top-[365.07px] w-[315.195px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[27.924px] justify-center leading-[0] left-[7.66px] not-italic right-[243.31px] text-[22.339px] text-black text-center top-[17.25px]">
        <p className="leading-[57.709px]">Lucky</p>
      </div>
      <Group9 />
      <div className="absolute h-0 left-0 right-0 top-[59.1px]">
        <div className="absolute inset-[-0.47px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315.195 0.465398">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.75" strokeWidth="0.465398" x2="315.195" y1="0.232699" y2="0.232699" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28.455px] justify-center leading-[0] left-[7.66px] not-italic right-[117.1px] text-[14.893px] text-black text-center top-[47.06px]">
        <p className="leading-[57.709px]">Location: Sonipat, Haryana</p>
      </div>
    </div>
  );
}

function Frame2() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/pet-profile")}
      className="-translate-x-1/2 absolute bg-white border-[0.465px] border-[rgba(0,0,0,0.75)] border-solid h-[479.36px] left-[calc(50%+0.22px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-445.626px_-326.576px] mask-size-[1243px_1159px] overflow-clip rounded-[22.339px] shadow-[0px_8px_15.6px_0px_rgba(0,0,0,0.25)] top-[1180.58px] w-[347.187px] cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ maskImage: `url('${imgFrame9}')` }}
    >
      <div className="-translate-x-1/2 absolute h-[457.021px] left-[calc(50%+0.46px)] rounded-[11.17px] top-[10.71px] w-[323.917px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11.17px]">
          <img alt="" className="absolute h-[120.31%] left-[-27.3%] max-w-none top-[-14.96%] w-[127.3%]" src={imgImage2} />
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[1180.58px]">
      <Frame9 />
      <Frame11 />
      <Frame14 />
      <Frame19 />
      <Frame2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[101px] top-[854px]">
      <Group3 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[101px] top-[854px]">
      <Group6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-381px] top-0">
      <div className="absolute h-[1010px] left-0 top-0 w-[1440px]" data-name="Gemini_Generated_Image_rmm4v8rmm4v8rmm4 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgGeminiGeneratedImageRmm4V8Rmm4V8Rmm41} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[357px] left-[calc(50%+76px)] top-[894px] w-[2354px]">
        <div className="absolute inset-[-13.67%_-2.07%_36.33%_-2.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2451.6 276.1">
            <g filter="url(#filter0_f_1_2312)" id="Ellipse 2">
              <path d={svgPaths.p2ac6c480} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="276.1" id="filter0_f_1_2312" width="2451.6" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_2312" stdDeviation="24.4" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="var(--fill-0, white)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="var(--fill-0, white)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="var(--fill-0, white)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="var(--fill-0, white)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="var(--fill-0, white)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="var(--fill-0, white)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="var(--fill-0, white)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="var(--fill-0, white)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="var(--fill-0, white)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="var(--fill-0, white)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="var(--fill-0, white)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="var(--fill-0, white)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="var(--fill-0, white)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="var(--fill-0, white)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="var(--fill-0, white)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="var(--fill-0, white)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="var(--fill-0, white)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="var(--fill-0, white)" id="Vector_59" />
        </g>
      </svg>
    </div>
  );
}

export function Component77951261HandDrawnPaintPawPrint() {
  return (
    <div className="bg-[#4cbfff] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] shrink-0 size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 1">
      <Group />
    </div>
  );
}

function Button() {
  const navigate = useNavigate();
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[397px] z-[50] flex items-center justify-center pointer-events-auto">
      <button onClick={() => navigate("/available-pets")} className="group flex items-center gap-[10px] rounded-full bg-white pl-5 pr-1.5 py-1 text-[20px] font-semibold text-[#4cbfff]  border-b-[0.5px] border-[rgba(0,106,255,0.37)] transition-transform hover:scale-105 active:scale-95" data-name="Button">
        <span className="leading-[35px]">Find a new Friend</span>
        <Component77951261HandDrawnPaintPawPrint />
      </button>
    </div>
  );
}

function Container() {
  const navigate = useNavigate();
  return (
    <div className="absolute content-stretch flex gap-[54px] items-center justify-center leading-[0] left-[478.76px] not-italic text-[18px] top-[17px] tracking-[-0.45px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[#4cbfff]">
        <p className="[text-decoration-skip-ink:none] decoration-[8.5%] decoration-solid leading-[28px] underline">Home</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[rgba(0,0,0,0.75)] cursor-pointer hover:text-[#4cbfff] transition-colors"
        onClick={() => navigate("/available-pets")}
      >
        <p className="leading-[28px]">Available Pets</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[rgba(0,0,0,0.75)]">
        <p className="leading-[28px]">About Us</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-[1120.76px] px-[24px] py-[9px] rounded-[9999px] top-[12px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f2ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5521 19.5521">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.pcc6e300} fill="var(--fill-0, #4CBFFF)" id="Vector_2" />
          <path d={svgPaths.p25423b00} fill="var(--fill-0, #4CBFFF)" id="Vector_3" />
          <path d={svgPaths.p1b1b3600} fill="var(--fill-0, #4CBFFF)" id="Vector_4" />
          <path d={svgPaths.p6777c00} fill="var(--fill-0, #4CBFFF)" id="Vector_5" />
          <path d={svgPaths.p298e5680} fill="var(--fill-0, #4CBFFF)" id="Vector_6" />
          <path d={svgPaths.p1197c000} fill="var(--fill-0, #4CBFFF)" id="Vector_7" />
          <path d={svgPaths.p1e741700} fill="var(--fill-0, #4CBFFF)" id="Vector_8" />
          <path d={svgPaths.pde4be00} fill="var(--fill-0, #4CBFFF)" id="Vector_9" />
          <path d={svgPaths.p2f6bc400} fill="var(--fill-0, #4CBFFF)" id="Vector_10" />
          <path d={svgPaths.p11a98e00} fill="var(--fill-0, #4CBFFF)" id="Vector_11" />
          <path d={svgPaths.p38fac500} fill="var(--fill-0, #4CBFFF)" id="Vector_12" />
          <path d={svgPaths.p317d3b00} fill="var(--fill-0, #4CBFFF)" id="Vector_13" />
          <path d={svgPaths.p2ee25000} fill="var(--fill-0, #4CBFFF)" id="Vector_14" />
          <path d={svgPaths.p130c6c00} fill="var(--fill-0, #4CBFFF)" id="Vector_15" />
          <path d={svgPaths.p2c097380} fill="var(--fill-0, #4CBFFF)" id="Vector_16" />
          <path d={svgPaths.p2a242af0} fill="var(--fill-0, #4CBFFF)" id="Vector_17" />
          <path d={svgPaths.p3d6f4e00} fill="var(--fill-0, #4CBFFF)" id="Vector_18" />
          <path d={svgPaths.p2b79e280} fill="var(--fill-0, #4CBFFF)" id="Vector_19" />
          <path d={svgPaths.p6bd9e00} fill="var(--fill-0, #4CBFFF)" id="Vector_20" />
          <path d={svgPaths.pd90b1c0} fill="var(--fill-0, #4CBFFF)" id="Vector_21" />
          <path d={svgPaths.pcdc300} fill="var(--fill-0, #4CBFFF)" id="Vector_22" />
          <path d={svgPaths.p2f08bdd0} fill="var(--fill-0, #4CBFFF)" id="Vector_23" />
          <path d={svgPaths.p2201cf00} fill="var(--fill-0, #4CBFFF)" id="Vector_24" />
          <path d={svgPaths.p103bf700} fill="var(--fill-0, #4CBFFF)" id="Vector_25" />
          <path d={svgPaths.p1e166c00} fill="var(--fill-0, #4CBFFF)" id="Vector_26" />
          <path d={svgPaths.p174e2680} fill="var(--fill-0, #4CBFFF)" id="Vector_27" />
          <path d={svgPaths.pb692400} fill="var(--fill-0, #4CBFFF)" id="Vector_28" />
          <path d={svgPaths.p301616a0} fill="var(--fill-0, #4CBFFF)" id="Vector_29" />
          <path d={svgPaths.p7a6d380} fill="var(--fill-0, #4CBFFF)" id="Vector_30" />
          <path d={svgPaths.pfa70e00} fill="var(--fill-0, #4CBFFF)" id="Vector_31" />
          <path d={svgPaths.p39483700} fill="var(--fill-0, #4CBFFF)" id="Vector_32" />
          <path d={svgPaths.p1dc03000} fill="var(--fill-0, #4CBFFF)" id="Vector_33" />
          <path d={svgPaths.p361f0b00} fill="var(--fill-0, #4CBFFF)" id="Vector_34" />
          <path d={svgPaths.p25ddf000} fill="var(--fill-0, #4CBFFF)" id="Vector_35" />
          <path d={svgPaths.p38fbe970} fill="var(--fill-0, #4CBFFF)" id="Vector_36" />
          <path d={svgPaths.p300c6d00} fill="var(--fill-0, #4CBFFF)" id="Vector_37" />
          <path d={svgPaths.p2ce66600} fill="var(--fill-0, #4CBFFF)" id="Vector_38" />
          <path d={svgPaths.pa586400} fill="var(--fill-0, #4CBFFF)" id="Vector_39" />
          <path d={svgPaths.p28c12900} fill="var(--fill-0, #4CBFFF)" id="Vector_40" />
          <path d={svgPaths.p2f51dc00} fill="var(--fill-0, #4CBFFF)" id="Vector_41" />
          <path d={svgPaths.pa4f2000} fill="var(--fill-0, #4CBFFF)" id="Vector_42" />
          <path d={svgPaths.p9088e00} fill="var(--fill-0, #4CBFFF)" id="Vector_43" />
          <path d={svgPaths.p16b86f80} fill="var(--fill-0, #4CBFFF)" id="Vector_44" />
          <path d={svgPaths.p1bb90080} fill="var(--fill-0, #4CBFFF)" id="Vector_45" />
          <path d={svgPaths.p1d292e00} fill="var(--fill-0, #4CBFFF)" id="Vector_46" />
          <path d={svgPaths.p132aa780} fill="var(--fill-0, #4CBFFF)" id="Vector_47" />
          <path d={svgPaths.p3a8c3600} fill="var(--fill-0, #4CBFFF)" id="Vector_48" />
          <path d={svgPaths.p34626780} fill="var(--fill-0, #4CBFFF)" id="Vector_49" />
          <path d={svgPaths.p162300} fill="var(--fill-0, #4CBFFF)" id="Vector_50" />
          <path d={svgPaths.p2a987500} fill="var(--fill-0, #4CBFFF)" id="Vector_51" />
          <path d={svgPaths.p10828f00} fill="var(--fill-0, #4CBFFF)" id="Vector_52" />
          <path d={svgPaths.pc2cbd8a} fill="var(--fill-0, #4CBFFF)" id="Vector_53" />
          <path d={svgPaths.p2d4a5380} fill="var(--fill-0, #4CBFFF)" id="Vector_54" />
          <path d={svgPaths.p86d400} fill="var(--fill-0, #4CBFFF)" id="Vector_55" />
          <path d={svgPaths.p29750300} fill="var(--fill-0, #4CBFFF)" id="Vector_56" />
          <path d={svgPaths.p295f0780} fill="var(--fill-0, #4CBFFF)" id="Vector_57" />
          <path d={svgPaths.p27954180} fill="var(--fill-0, #4CBFFF)" id="Vector_58" />
          <path d={svgPaths.p20d49900} fill="var(--fill-0, #4CBFFF)" id="Vector_59" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-557.5px)] top-[4px]">
      <div className="absolute flex inset-[6.45%_91.03%_48.99%_6.78%] items-center justify-center translate-x-[-1px] translate-y-[4px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-47.9747cqw,52.0253cqh)] rotate-[42.68deg] w-[hypot(52.0253cqw,47.9747cqh)]">
          <Group10 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[32px] not-italic text-[#4cbfff] text-[33.984px] top-[calc(50%+1.6px)] whitespace-nowrap" style={{ fontFamily: "'Times Ten:Regular'" }}>
        <p className="leading-[47.978px]">Paw</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.93)] h-[62px] left-1/2 rounded-[49px] top-[32px] w-[1260px]">
      <Container />
      <Button1 />
      <Group15 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute contents left-[-381px] top-0" data-name="Hero Section">
      <Group1 />
      <Button />
      <Frame1 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-[1864.27px]">
      <div className="absolute h-[2146px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_6.272px] mask-size-[1490.46px_968.231px] top-[1858px] w-[1440px]" style={{ maskImage: `url('${imgImage14}')` }} data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[158px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 158">
        <g clipPath="url(#clip0_1_2058)" id="Frame">
          <path d={svgPaths.p3b031f80} fill="var(--fill-0, #EDD464)" id="Vector" />
          <path d={svgPaths.p2d80ff80} fill="var(--fill-0, #D8951E)" id="Vector_2" />
          <path d={svgPaths.pb9eec80} fill="var(--fill-0, #43B9DD)" id="Vector_3" />
          <path d={svgPaths.p274d2080} fill="var(--fill-0, #EAEAEA)" id="Vector_4" />
          <path d={svgPaths.p146ed600} fill="var(--fill-0, white)" id="Vector_5" />
          <g id="Group">
            <path d={svgPaths.p3bd78cf0} fill="var(--fill-0, #B75129)" id="Vector_6" />
            <path d={svgPaths.p32f00e00} fill="var(--fill-0, #B75129)" id="Vector_7" />
            <path d={svgPaths.pc365a80} fill="var(--fill-0, #B75129)" id="Vector_8" />
            <path d={svgPaths.p875b900} fill="var(--fill-0, #B75129)" id="Vector_9" />
            <path d={svgPaths.p12b2c500} fill="var(--fill-0, #B75129)" id="Vector_10" />
          </g>
          <path d={svgPaths.p2a1f5560} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p2735db40} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p1d10fb00} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.pd71e700} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p2e179980} fill="var(--fill-0, black)" id="Vector_15" />
          <path d={svgPaths.p211a6f80} fill="var(--fill-0, black)" id="Vector_16" />
          <path d={svgPaths.pb9cd080} fill="var(--fill-0, black)" id="Vector_17" />
        </g>
        <defs>
          <clipPath id="clip0_1_2058">
            <rect fill="white" height="158" width="158" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[86.31px] items-center left-[25px] overflow-clip px-[49.32px] py-[36.99px] rounded-[49.32px] top-[2154px]">
      <Frame />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[320px]">
        <p className="leading-[37px] mb-0 text-[36.99px]">Search Pet</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[24.66px] text-[rgba(0,0,0,0.75)]">
          <span className="leading-[37px]">{`Adopt a dog or cat who's `}</span>
          <span className="leading-[31px]">right for you. Simply enter your city above to start your search.</span>
        </p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[13.12%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.11 111.372">
        <g id="Group">
          <path d={svgPaths.pe09c180} fill="var(--fill-0, #4EA3DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[13.12%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-[16.25%] left-[18.98%] right-[13.12%] top-1/2" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.203 50.9672">
        <g id="Group">
          <path d={svgPaths.p5cb6400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[13.12%_23.92%_48.63%_13.12%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.6911 57.7504">
        <g id="Group">
          <path d={svgPaths.p2b952b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[13.12%_13.12%_16.25%_13.12%]" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[17.48%_17.38%_65.41%_65.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0152 25.844">
        <g id="Group">
          <path d={svgPaths.p394af0} fill="var(--fill-0, #4EA3DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[17.48%_17.38%_65.41%_65.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0152 25.844">
        <g id="Group">
          <path d={svgPaths.pd37b7f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[13.12%]" data-name="Group">
      <Group18 />
      <Group20 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[37.69%_50.42%_37.69%_32.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4238 37.1631">
        <g id="Group">
          <path d={svgPaths.p3347f500} fill="var(--fill-0, #FFCC34)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[37.69%_51.49%_53.05%_32.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8011 13.9763">
        <g id="Group">
          <path d={svgPaths.p129d0080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[58.07%_50.42%_39.58%_36.58%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7547 3.53906">
        <g id="Group">
          <path d={svgPaths.pb9d3a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[46.11%_56.01%_38.6%_33.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1981 23.0865">
        <g id="Group">
          <path d={svgPaths.p14640d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[37.69%_50.42%_38.6%_32.86%]" data-name="Group">
      <Group28 />
      <Group29 />
      <Group30 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[37.99%_32.86%_37.69%_49.11%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4057 36.7148">
        <g id="Group">
          <path d={svgPaths.p363e6ab0} fill="var(--fill-0, #FFCC34)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[52.62%_39.77%_45.04%_52.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7984 3.53906">
        <g id="Group">
          <path d={svgPaths.p22b45180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[37.99%_36.22%_43.59%_49.11%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2917 27.8111">
        <g id="Group">
          <path d={svgPaths.pa014b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[52.62%_32.85%_45.04%_62.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61497 3.53906">
        <g id="Group">
          <path d={svgPaths.p25de6200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[37.99%_32.86%_43.59%_49.11%]" data-name="Group">
      <Group33 />
      <Group34 />
      <Group35 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[37.69%_32.85%_37.69%_32.86%]" data-name="Group">
      <Group26 />
      <Group27 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[12.15%_12.15%_12.14%_12.15%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.078 114.321">
        <g id="Group">
          <path d={svgPaths.p3e074a00} fill="var(--fill-0, #122436)" id="Vector" />
          <path d={svgPaths.p364fc700} fill="var(--fill-0, #122436)" id="Vector_2" />
          <path d={svgPaths.p78b6700} fill="var(--fill-0, #122436)" id="Vector_3" />
          <path d={svgPaths.p8fb0340} fill="var(--fill-0, #122436)" id="Vector_4" />
          <path d={svgPaths.p90a7080} fill="var(--fill-0, #122436)" id="Vector_5" />
          <path d={svgPaths.p28934e80} fill="var(--fill-0, #122436)" id="Vector_6" />
          <path d={svgPaths.p39416c00} fill="var(--fill-0, #122436)" id="Vector_7" />
          <path d={svgPaths.p2ed07600} fill="var(--fill-0, #122436)" id="Vector_8" />
          <path d={svgPaths.p37b16bf0} fill="var(--fill-0, #122436)" id="Vector_9" />
          <path d={svgPaths.p1a611880} fill="var(--fill-0, #122436)" id="Vector_10" />
          <path d={svgPaths.p300c9a80} fill="var(--fill-0, #122436)" id="Vector_11" />
          <path d={svgPaths.p33d49d00} fill="var(--fill-0, #122436)" id="Vector_12" />
          <path d={svgPaths.p316c0f80} fill="var(--fill-0, #122436)" id="Vector_13" />
          <path d={svgPaths.p47b6900} fill="var(--fill-0, #122436)" id="Vector_14" />
          <path d={svgPaths.p3c753a40} fill="var(--fill-0, #122436)" id="Vector_15" />
          <path d={svgPaths.p5548df0} fill="var(--fill-0, #122436)" id="Vector_16" />
          <path d={svgPaths.p28be9600} fill="var(--fill-0, #122436)" id="Vector_17" />
          <path d={svgPaths.p6cbc600} fill="var(--fill-0, #122436)" id="Vector_18" />
          <path d={svgPaths.p2b23c700} fill="var(--fill-0, #122436)" id="Vector_19" />
          <path d={svgPaths.p3daf2840} fill="var(--fill-0, #122436)" id="Vector_20" />
          <path d={svgPaths.p3fd28f00} fill="var(--fill-0, #122436)" id="Vector_21" />
          <path d={svgPaths.p1b25e300} fill="var(--fill-0, #122436)" id="Vector_22" />
          <path d={svgPaths.p5e16b00} fill="var(--fill-0, #122436)" id="Vector_23" />
          <path d={svgPaths.p21740580} fill="var(--fill-0, #122436)" id="Vector_24" />
          <path d={svgPaths.p25adb660} fill="var(--fill-0, #122436)" id="Vector_25" />
          <path d={svgPaths.p4904880} fill="var(--fill-0, #122436)" id="Vector_26" />
          <path d={svgPaths.p1291c080} fill="var(--fill-0, #122436)" id="Vector_27" />
          <path d={svgPaths.p38d2f580} fill="var(--fill-0, #122436)" id="Vector_28" />
          <path d={svgPaths.p3a5c1480} fill="var(--fill-0, #122436)" id="Vector_29" />
          <path d={svgPaths.pe632280} fill="var(--fill-0, #122436)" id="Vector_30" />
          <path d={svgPaths.p31504480} fill="var(--fill-0, #122436)" id="Vector_31" />
          <path d={svgPaths.p91e3080} fill="var(--fill-0, #122436)" id="Vector_32" />
          <path d={svgPaths.p1ec0eb00} fill="var(--fill-0, #122436)" id="Vector_33" />
          <path d={svgPaths.p1173ddf0} fill="var(--fill-0, #122436)" id="Vector_34" />
          <path d={svgPaths.pdddbd80} fill="var(--fill-0, #122436)" id="Vector_35" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[12.15%_12.15%_12.14%_12.15%]" data-name="Group">
      <Group17 />
      <Group25 />
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[66.13%_34.6%_3.07%_34.61%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.81 46.502">
        <g id="Group">
          <path d={svgPaths.p3af51500} fill="var(--fill-0, #4EA3DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[67.11%_35.59%_4.06%_35.59%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8176 43.5299">
        <g id="Group">
          <path d={svgPaths.p3fc00d00} fill="var(--fill-0, #122436)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[80.15%_44.19%_10.36%_44.19%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.67 14.3358">
        <g id="Group">
          <path d={svgPaths.p3624ec00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[76.92%_55.07%_18.76%_41.22%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.63943 6.52494">
        <g id="Group">
          <path d={svgPaths.p32b6aa80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[73.41%_50.87%_21.36%_45.49%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.53427 7.89746">
        <g id="Group">
          <path d={svgPaths.pcef1b40} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[73.41%_50.87%_18.76%_41.22%]" data-name="Group">
      <Group45 />
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[76.92%_41.21%_18.76%_55.08%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.63944 6.52494">
        <g id="Group">
          <path d={svgPaths.p3b957400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[73.41%_45.49%_21.36%_50.87%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.53427 7.89746">
        <g id="Group">
          <path d={svgPaths.p12031f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[73.41%_41.21%_18.76%_50.87%]" data-name="Group">
      <Group48 />
      <Group49 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[73.41%_41.21%_18.76%_41.22%]" data-name="Group">
      <Group44 />
      <Group47 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[73.41%_41.21%_10.36%_41.22%]" data-name="Group">
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[73.41%_41.21%_10.36%_41.22%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[66.13%_34.6%_3.07%_34.61%]" data-name="Group">
      <Group38 />
      <Group39 />
      <Group40 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[12.15%_12.15%_3.07%_12.15%]" data-name="Group">
      <Group16 />
      <Group37 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[12.15%_12.15%_3.07%_12.15%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[12.15%_12.15%_3.07%_12.15%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[151px] overflow-clip relative shrink-0 w-[152px]" data-name="Layer_1">
      <Group11 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[73.622px] items-center left-[782px] overflow-clip px-[42.07px] py-[31.552px] rounded-[42.07px] top-[2076px]">
      <Layer />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[393px] whitespace-pre-wrap">
        <p className="leading-[37px] mb-0 text-[31.552px]">Connect</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[21.035px] text-[rgba(0,0,0,0.75)]">
          <span className="leading-[37px]">{`Once you find a pet, click "show `}</span>
          <span className="leading-[31px]">{`number" to get contact info for their  pet parent or rescue. Contact them to learn more about how to meet and  adopt the pet.`}</span>
        </p>
      </div>
    </div>
  );
}

function FilledOutline() {
  return (
    <div className="absolute inset-[3.12%_6.25%_2.95%_6.25%]" data-name="filled outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.6301 97.29">
        <g id="filled outline">
          <path d={svgPaths.p129f6c00} fill="var(--fill-0, #0292C9)" id="Vector" />
          <path d={svgPaths.p363bc000} fill="var(--fill-0, #FBB540)" id="Vector_2" />
          <path d={svgPaths.pfa3af00} fill="var(--fill-0, #FBB540)" id="Vector_3" />
          <path d={svgPaths.p2dfed100} fill="var(--fill-0, #FBB540)" id="Vector_4" />
          <path d={svgPaths.p1c371700} fill="var(--fill-0, #E82F3E)" id="Vector_5" />
          <g id="Group">
            <path d={svgPaths.p3bd40e80} fill="var(--fill-0, #D18D28)" id="Vector_6" />
            <path d={svgPaths.pd6c1e00} fill="var(--fill-0, #D18D28)" id="Vector_7" />
            <path d={svgPaths.p1a8c7200} fill="var(--fill-0, #D18D28)" id="Vector_8" />
            <path d={svgPaths.p7092400} fill="var(--fill-0, #D18D28)" id="Vector_9" />
          </g>
          <path d={svgPaths.p38c1af80} fill="var(--fill-0, #FBFDFF)" id="Vector_10" />
          <path d={svgPaths.p2f0b7a80} fill="var(--fill-0, #CBCBCB)" id="Vector_11" />
          <path d={svgPaths.p14d77df0} fill="var(--fill-0, #CBCBCB)" id="Vector_12" />
          <path d={svgPaths.p1dca8800} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p29df5a00} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p14d77df0} fill="var(--fill-0, black)" id="Vector_15" />
          <path d={svgPaths.p3aa69d00} fill="var(--fill-0, black)" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[103.577px]" data-name="Frame">
      <FilledOutline />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[56px] items-center left-[199px] overflow-clip px-[32px] py-[24px] rounded-[32px] top-[2470px]">
      <Frame3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[750.195px]">
        <p className="leading-[38.472px] mb-0 text-[35.512px]">AdoptLove</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[23.675px] text-[rgba(0,0,0,0.75)]">
          <span className="leading-[38.472px]">{`The rescue or pet parents will walk you through their `}</span>
          <span className="leading-[31.073px]">adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</span>
        </p>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.4577 46.0927">
        <g id="Group 7">
          <path d={svgPaths.p10c05330} fill="var(--fill-0, #FDFDFD)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p127d2a00} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute h-[47.924px] left-[12.01%] right-[81.04%] top-[1965px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.053 47.9244">
        <g id="Group 5">
          <path clipRule="evenodd" d={svgPaths.p278c4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1ebde00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-16px)] top-[1958px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%-16px)] not-italic text-[64px] text-center text-white top-[1989px] whitespace-nowrap">
        <p className="leading-[62px]">Your Pet Adoption Journey</p>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="absolute contents left-0 top-[1864.27px]" data-name="How it works">
      <Group12 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <div className="absolute left-[530px] size-[450px] top-[2035px]" data-name="adopt-me-pet-02032021 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAdoptMePet020320211} />
      </div>
      <div className="absolute flex h-[46.092px] items-center justify-center left-[79.51%] right-[15.94%] top-[1975px]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <Group50 />
        </div>
      </div>
      <Group51 />
      <Group52 />
    </div>
  );
}

function Group53() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint1() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 1">
      <Group53 />
    </div>
  );
}

function Group54() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint2() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 2">
      <Group54 />
    </div>
  );
}

function Group55() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint3() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 3">
      <Group55 />
    </div>
  );
}

function Group56() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint4() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 4">
      <Group56 />
    </div>
  );
}

function Group57() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint5() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 5">
      <Group57 />
    </div>
  );
}

function Group58() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint6() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 6">
      <Group58 />
    </div>
  );
}

function Group59() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint7() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 7">
      <Group59 />
    </div>
  );
}

function Group60() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint8() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 8">
      <Group60 />
    </div>
  );
}

function Group61() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint9() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 9">
      <Group61 />
    </div>
  );
}

function Group62() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint10() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 10">
      <Group62 />
    </div>
  );
}

function Group63() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint11() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 11">
      <Group63 />
    </div>
  );
}

function Group64() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint12() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 12">
      <Group64 />
    </div>
  );
}

function Group65() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint13() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 13">
      <Group65 />
    </div>
  );
}

function Group66() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint14() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 14">
      <Group66 />
    </div>
  );
}

function Group67() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint15() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 15">
      <Group67 />
    </div>
  );
}

function Group68() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint16() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 16">
      <Group68 />
    </div>
  );
}

function Group69() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint17() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 17">
      <Group69 />
    </div>
  );
}

function Group70() {
  return (
    <div className="relative shrink-0 size-[20.304px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3038 20.3038">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1f0f4f00} fill="url(#paint0_linear_1_2078)" id="Vector_2" />
          <path d={svgPaths.p1c6cf900} fill="url(#paint1_linear_1_2078)" id="Vector_3" />
          <path d={svgPaths.p2ca33700} fill="url(#paint2_linear_1_2078)" id="Vector_4" />
          <path d={svgPaths.p2ece4980} fill="url(#paint3_linear_1_2078)" id="Vector_5" />
          <path d={svgPaths.p2f89df00} fill="url(#paint4_linear_1_2078)" id="Vector_6" />
          <path d={svgPaths.p2bca4580} fill="url(#paint5_linear_1_2078)" id="Vector_7" />
          <path d={svgPaths.p162a7800} fill="url(#paint6_linear_1_2078)" id="Vector_8" />
          <path d={svgPaths.p16409a00} fill="url(#paint7_linear_1_2078)" id="Vector_9" />
          <path d={svgPaths.p2ea1800} fill="url(#paint8_linear_1_2078)" id="Vector_10" />
          <path d={svgPaths.p3af7e180} fill="url(#paint9_linear_1_2078)" id="Vector_11" />
          <path d={svgPaths.paf5b680} fill="url(#paint10_linear_1_2078)" id="Vector_12" />
          <path d={svgPaths.p1e7fac00} fill="url(#paint11_linear_1_2078)" id="Vector_13" />
          <path d={svgPaths.pfad0480} fill="url(#paint12_linear_1_2078)" id="Vector_14" />
          <path d={svgPaths.pae66400} fill="url(#paint13_linear_1_2078)" id="Vector_15" />
          <path d={svgPaths.p3469e100} fill="url(#paint14_linear_1_2078)" id="Vector_16" />
          <path d={svgPaths.p2cc29200} fill="url(#paint15_linear_1_2078)" id="Vector_17" />
          <path d={svgPaths.p43ffd00} fill="url(#paint16_linear_1_2078)" id="Vector_18" />
          <path d={svgPaths.p30927180} fill="url(#paint17_linear_1_2078)" id="Vector_19" />
          <path d={svgPaths.p3486df0} fill="url(#paint18_linear_1_2078)" id="Vector_20" />
          <path d={svgPaths.p166906c0} fill="url(#paint19_linear_1_2078)" id="Vector_21" />
          <path d={svgPaths.p2eabc00} fill="url(#paint20_linear_1_2078)" id="Vector_22" />
          <path d={svgPaths.p1919f280} fill="url(#paint21_linear_1_2078)" id="Vector_23" />
          <path d={svgPaths.p4558700} fill="url(#paint22_linear_1_2078)" id="Vector_24" />
          <path d={svgPaths.p1662e100} fill="url(#paint23_linear_1_2078)" id="Vector_25" />
          <path d={svgPaths.p3f0b6000} fill="url(#paint24_linear_1_2078)" id="Vector_26" />
          <path d={svgPaths.p2c2f5740} fill="url(#paint25_linear_1_2078)" id="Vector_27" />
          <path d={svgPaths.p14975d00} fill="url(#paint26_linear_1_2078)" id="Vector_28" />
          <path d={svgPaths.p33692d00} fill="url(#paint27_linear_1_2078)" id="Vector_29" />
          <path d={svgPaths.pe272f30} fill="url(#paint28_linear_1_2078)" id="Vector_30" />
          <path d={svgPaths.p1d048a00} fill="url(#paint29_linear_1_2078)" id="Vector_31" />
          <path d={svgPaths.p1f86fa00} fill="url(#paint30_linear_1_2078)" id="Vector_32" />
          <path d={svgPaths.p2700580} fill="url(#paint31_linear_1_2078)" id="Vector_33" />
          <path d={svgPaths.p12208e00} fill="url(#paint32_linear_1_2078)" id="Vector_34" />
          <path d={svgPaths.p15e13780} fill="url(#paint33_linear_1_2078)" id="Vector_35" />
          <path d={svgPaths.p35e82c00} fill="url(#paint34_linear_1_2078)" id="Vector_36" />
          <path d={svgPaths.p93c6b00} fill="url(#paint35_linear_1_2078)" id="Vector_37" />
          <path d={svgPaths.p2221800} fill="url(#paint36_linear_1_2078)" id="Vector_38" />
          <path d={svgPaths.p3981e800} fill="url(#paint37_linear_1_2078)" id="Vector_39" />
          <path d={svgPaths.p1d9ea300} fill="url(#paint38_linear_1_2078)" id="Vector_40" />
          <path d={svgPaths.p309d1e80} fill="url(#paint39_linear_1_2078)" id="Vector_41" />
          <path d={svgPaths.p2fed3080} fill="url(#paint40_linear_1_2078)" id="Vector_42" />
          <path d={svgPaths.p34c3d180} fill="url(#paint41_linear_1_2078)" id="Vector_43" />
          <path d={svgPaths.p2ea15900} fill="url(#paint42_linear_1_2078)" id="Vector_44" />
          <path d={svgPaths.p2ee1ee70} fill="url(#paint43_linear_1_2078)" id="Vector_45" />
          <path d={svgPaths.p26645600} fill="url(#paint44_linear_1_2078)" id="Vector_46" />
          <path d={svgPaths.p13f9a900} fill="url(#paint45_linear_1_2078)" id="Vector_47" />
          <path d={svgPaths.p6bb8800} fill="url(#paint46_linear_1_2078)" id="Vector_48" />
          <path d={svgPaths.p19cc5400} fill="url(#paint47_linear_1_2078)" id="Vector_49" />
          <path d={svgPaths.p2cf8efc0} fill="url(#paint48_linear_1_2078)" id="Vector_50" />
          <path d={svgPaths.p2d1b1180} fill="url(#paint49_linear_1_2078)" id="Vector_51" />
          <path d={svgPaths.p3627ec00} fill="url(#paint50_linear_1_2078)" id="Vector_52" />
          <path d={svgPaths.p38d08100} fill="url(#paint51_linear_1_2078)" id="Vector_53" />
          <path d={svgPaths.p12f0f700} fill="url(#paint52_linear_1_2078)" id="Vector_54" />
          <path d={svgPaths.p3010f100} fill="url(#paint53_linear_1_2078)" id="Vector_55" />
          <path d={svgPaths.pa4a8e00} fill="url(#paint54_linear_1_2078)" id="Vector_56" />
          <path d={svgPaths.p9a03cf0} fill="url(#paint55_linear_1_2078)" id="Vector_57" />
          <path d={svgPaths.pbb7f600} fill="url(#paint56_linear_1_2078)" id="Vector_58" />
          <path d={svgPaths.p26dd9000} fill="url(#paint57_linear_1_2078)" id="Vector_59" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2078" x1="11.0189" x2="11.0189" y1="8.05939" y2="8.09672">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2078" x1="10.9611" x2="10.9611" y1="7.65333" y2="8.05942">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2078" x1="10.9253" x2="10.9253" y1="7.99536" y2="8.116">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2078" x1="10.9406" x2="10.9406" y1="8.11598" y2="8.14198">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2078" x1="10.988" x2="10.988" y1="8.07426" y2="8.15532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2078" x1="14.5125" x2="14.5125" y1="2.75666" y2="2.77888">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2078" x1="14.9687" x2="14.9687" y1="4.22888" y2="4.25372">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_2078" x1="14.202" x2="14.202" y1="2.28451" y2="2.35565">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_2078" x1="15.0072" x2="15.0072" y1="4.67419" y2="4.75366">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_2078" x1="11.2102" x2="11.2102" y1="8.43612" y2="8.50474">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_2078" x1="12.784" x2="12.784" y1="1.79707" y2="9.29701">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_2078" x1="10.9323" x2="10.9323" y1="3.76747" y2="3.78509">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_2078" x1="11.3799" x2="11.3799" y1="8.69141" y2="8.78634">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_2078" x1="11.3085" x2="11.3085" y1="8.55674" y2="8.69113">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_2078" x1="12.0383" x2="12.0383" y1="9.13423" y2="9.13532">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_2078" x1="12.4375" x2="12.4375" y1="9.15241" y2="9.16772">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_2078" x1="12.576" x2="12.576" y1="9.10325" y2="9.15239">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_2078" x1="14.5089" x2="14.5089" y1="7.22951" y2="7.2616">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_2078" x1="18.4422" x2="18.4422" y1="7.68762" y2="7.80292">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_2078" x1="18.4513" x2="18.4513" y1="7.66614" y2="7.68813">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_2078" x1="18.3935" x2="18.3935" y1="7.63846" y2="7.71692">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_2078" x1="13.9636" x2="13.9636" y1="10.6531" y2="10.6799">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_2078" x1="14.1109" x2="14.1109" y1="9.26931" y2="9.29693">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_2078" x1="13.9691" x2="13.9691" y1="11.1178" y2="11.1844">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_2078" x1="14.2138" x2="14.2138" y1="8.82731" y2="8.89506">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_2078" x1="16.1451" x2="16.1451" y1="5.704" y2="12.4224">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_2078" x1="17.1537" x2="17.1537" y1="11.4628" y2="11.4725">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_2078" x1="15.3115" x2="15.3115" y1="6.7462" y2="6.77051">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_2078" x1="14.7118" x2="14.7118" y1="13.1085" y2="13.294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_2078" x1="14.6562" x2="14.6562" y1="13.0684" y2="13.1084">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_2078" x1="14.611" x2="14.611" y1="13.0474" y2="13.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_2078" x1="5.37932" x2="5.37932" y1="17.4326" y2="17.4715">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_2078" x1="5.04744" x2="5.04744" y1="14.8505" y2="14.8982">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_2078" x1="5.99238" x2="5.99238" y1="18.0882" y2="18.1809">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_2078" x1="5.29032" x2="5.29032" y1="14.0388" y2="14.1622">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_2078" x1="10.2499" x2="10.2499" y1="9.53161" y2="18.507">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_2078" x1="12.2886" x2="12.2886" y1="18.2452" y2="18.2657">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_2078" x1="7.92055" x2="7.92055" y1="10.5908" y2="10.6281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_2078" x1="6.53392" x2="6.53392" y1="8.0218" y2="8.13356">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_2078" x1="6.56937" x2="6.56937" y1="8.13375" y2="8.15281">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_2078" x1="6.60966" x2="6.60966" y1="8.07426" y2="8.14854">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_2078" x1="8.92896" x2="8.92896" y1="2.72361" y2="2.7444">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_2078" x1="9.57211" x2="9.57211" y1="4.09628" y2="4.11814">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_2078" x1="8.62308" x2="8.62308" y1="2.26179" y2="2.33294">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_2078" x1="9.70794" x2="9.70794" y1="4.51887" y2="4.59694">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_2078" x1="7.68322" x2="7.68322" y1="1.80451" y2="9.32636">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_2078" x1="5.46924" x2="5.46924" y1="3.92816" y2="3.94717">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_2078" x1="9.85993" x2="9.85993" y1="7.11137" y2="7.14607">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_2078" x1="5.53032" x2="5.53032" y1="12.2088" y2="12.2124">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_2078" x1="5.45828" x2="5.45828" y1="12.2092" y2="12.2227">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_2078" x1="5.51642" x2="5.51642" y1="12.151" y2="12.1727">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_2078" x1="2.74321" x2="2.74321" y1="5.94606" y2="5.96934">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_2078" x1="4.2244" x2="4.2244" y1="5.86056" y2="5.87573">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_2078" x1="2.34372" x2="2.34372" y1="6.26249" y2="6.29742">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_2078" x1="4.60602" x2="4.60602" y1="6.09477" y2="6.14918">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_2078" x1="4.17771" x2="4.17771" y1="5.6503" y2="12.1714">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_2078" x1="2.32482" x2="2.32482" y1="9.94594" y2="9.9658">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_2078" x1="5.97554" x2="5.97554" y1="8.05526" y2="8.08547">
            <stop stopColor="#006AFF" />
            <stop offset="1" stopColor="#BCD7FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint18() {
  return (
    <div className="bg-[rgba(0,106,255,0)] content-stretch flex items-center justify-center overflow-clip relative rounded-[20.304px] size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 18">
      <Group70 />
    </div>
  );
}

function PetFootpeint() {
  return (
    <div className="absolute contents left-[-3px] top-[1099px]" data-name="pet footpeint">
      <div className="absolute flex items-center justify-center left-[-3px] size-[58.255px] top-[1099px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[128.57deg]">
          <Component77951261HandDrawnPaintPawPrint1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-3px] size-[58.255px] top-[1136px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[128.57deg]">
          <Component77951261HandDrawnPaintPawPrint2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[50px] size-[58.255px] top-[1133px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[128.57deg]">
          <Component77951261HandDrawnPaintPawPrint3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[51px] size-[58.255px] top-[1172px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[128.57deg]">
          <Component77951261HandDrawnPaintPawPrint4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[105px] size-[58.255px] top-[1169px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[128.57deg]">
          <Component77951261HandDrawnPaintPawPrint5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[905.76px] size-[54.73px] top-[1640.76px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-114">
          <Component77951261HandDrawnPaintPawPrint6 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[938px] size-[54.73px] top-[1674px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-114">
          <Component77951261HandDrawnPaintPawPrint7 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[979px] size-[54.73px] top-[1658px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-114">
          <Component77951261HandDrawnPaintPawPrint8 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1028.78px] size-[49.166px] top-[1691.78px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-102">
          <Component77951261HandDrawnPaintPawPrint9 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1086px] size-[49.166px] top-[1678px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-102">
          <Component77951261HandDrawnPaintPawPrint10 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1120px] size-[49.166px] top-[1716px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-102">
          <Component77951261HandDrawnPaintPawPrint11 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1173px] size-[49.166px] top-[1692px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-102">
          <Component77951261HandDrawnPaintPawPrint12 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1192.27px] size-[56.627px] top-[1726.27px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint13 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1249px] size-[56.627px] top-[1717px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint14 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1270px] size-[56.627px] top-[1765px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint15 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1327px] size-[56.627px] top-[1752px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint16 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1341px] size-[56.627px] top-[1809px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint17 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1398px] size-[56.627px] top-[1807px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-120">
          <Component77951261HandDrawnPaintPawPrint18 />
        </div>
      </div>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute bottom-0 contents left-0">
      <div className="absolute bottom-0 h-[559px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-center mask-size-cover w-full" style={{ maskImage: `url('${imgImage16}')` }} data-name="image 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[383.97%] left-0 max-w-none top-[-0.03%] w-full" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Group73() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.7831 48.7831">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p11d36c00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pdf18700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2d2c3640} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p31ae9500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p181cd200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p345b0280} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3ee1c400} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p22237280} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p18edf200} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2d0b7e00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1b296b00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p5dc4c00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3106a300} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p2c9f4700} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p15239500} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p27049a80} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p249bbc00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p3ad69980} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.paf94400} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.pf42e400} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.pe8f2b00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p2fd10080} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p2524900} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p26a25b80} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p27da6b00} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.pa04da00} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p35dd5880} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p5e03c00} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p3c616d40} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p272604c0} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p3d272a80} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p1ef1ec80} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p109e4200} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p123fc090} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.pb366700} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p39204f80} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p11743e00} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p103be100} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p64f100} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p3cf00680} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p2792b1c0} fill="var(--fill-0, white)" id="Vector_42" />
          <path d={svgPaths.p33d2f400} fill="var(--fill-0, white)" id="Vector_43" />
          <path d={svgPaths.p33347200} fill="var(--fill-0, white)" id="Vector_44" />
          <path d={svgPaths.p1a046800} fill="var(--fill-0, white)" id="Vector_45" />
          <path d={svgPaths.p11085500} fill="var(--fill-0, white)" id="Vector_46" />
          <path d={svgPaths.p106b2a00} fill="var(--fill-0, white)" id="Vector_47" />
          <path d={svgPaths.p33274f80} fill="var(--fill-0, white)" id="Vector_48" />
          <path d={svgPaths.p130d6b00} fill="var(--fill-0, white)" id="Vector_49" />
          <path d={svgPaths.p3d8e5180} fill="var(--fill-0, white)" id="Vector_50" />
          <path d={svgPaths.p31b5d700} fill="var(--fill-0, white)" id="Vector_51" />
          <path d={svgPaths.p22dad280} fill="var(--fill-0, white)" id="Vector_52" />
          <path d={svgPaths.p268dc00} fill="var(--fill-0, white)" id="Vector_53" />
          <path d={svgPaths.pa30de00} fill="var(--fill-0, white)" id="Vector_54" />
          <path d={svgPaths.p1cbf1f80} fill="var(--fill-0, white)" id="Vector_55" />
          <path d={svgPaths.p8906400} fill="var(--fill-0, white)" id="Vector_56" />
          <path d={svgPaths.p3c67c5c0} fill="var(--fill-0, white)" id="Vector_57" />
          <path d={svgPaths.p3280d500} fill="var(--fill-0, white)" id="Vector_58" />
          <path d={svgPaths.p16e33400} fill="var(--fill-0, white)" id="Vector_59" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%)] top-[60.41px]">
      <div className="absolute flex inset-[10.78%_38.26%_76.92%_56.96%] items-center justify-center translate-x-[28px] translate-y-[12px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-47.9747cqw,52.0253cqh)] rotate-[42.68deg] w-[hypot(52.0253cqw,47.9747cqh)]">
          <Group73 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[710px] not-italic text-[89.781px] text-white top-[calc(50%-143.37px)] whitespace-nowrap" style={{ fontFamily: "'Times Ten:Regular'" }}>
        <p className="leading-[119.707px]">Paw</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute left-[634px] size-[24px] top-[248.51px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1e89fb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents left-[634px] top-[220.51px]">
      <Frame31 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[664px] not-italic text-[16px] text-white top-[260.51px] whitespace-nowrap">
        <p className="leading-[119.707px]">Copyright Paw - All rights reserved</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <rect fill="var(--fill-0, #4CBFFF)" height="30" rx="15" width="30" />
          <path d={svgPaths.p2fff1d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <path d={svgPaths.p1cf26800} fill="var(--fill-0, #4CBFFF)" />
          <path d={svgPaths.p9659100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <path d={svgPaths.p1cf26800} fill="var(--fill-0, #4CBFFF)" />
          <path d={svgPaths.p3fe9af00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <path d={svgPaths.p1cf26800} fill="var(--fill-0, #4CBFFF)" />
          <path d={svgPaths.p38695b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[23px] items-center left-[687px] top-[200.51px] w-[190px]">
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

export function Footer() {
  return (
    <div className="relative bottom-0 left-0 w-full overflow-x-hidden" data-name="Footer">
      {/* Figma layer positions assume a 1440px-wide artboard; keep paw art + “Paw” + links centered on wide screens */}
      <div className="relative mx-auto h-[560.508px] w-full max-w-[1440px] overflow-clip">
        <Group71 />
        <div className="absolute bottom-0 h-[224px] left-0 w-full" data-name="Screenshot 2026-04-14 110854 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.23%] left-[-0.01%] max-w-none top-0 w-[100.03%]" src={imgScreenshot202604141108541} />
          </div>
        </div>
        <Group72 />
        <Group74 />
        <Frame32 />
      </div>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents left-[13px] top-[135.29px]">
      <div className="absolute h-[1616px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13px_264.29px] mask-size-[495.666px_471.372px] top-[-129px] w-[1084px]" style={{ maskImage: `url('${imgImage17}')` }} data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
      <div className="absolute left-[49px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-36px_-50.71px] mask-size-[495.666px_471.372px] size-[466px] top-[186px]" style={{ maskImage: `url('${imgImage17}')` }} data-name="confused cat 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConfusedCat1} />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative size-[130.501px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.501 130.501">
        <g clipPath="url(#clip0_1_2013)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p2d742c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.8751" />
          <path d={svgPaths.p310dffa0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.8751" />
        </g>
        <defs>
          <clipPath id="clip0_1_2013">
            <rect fill="white" height="130.501" width="130.501" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative size-full" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.0634 88.0635">
        <g clipPath="url(#clip0_1_2314)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p25044f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.33862" />
          <path d={svgPaths.p1809c380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.33862" />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="88.0635" width="88.0634" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative size-[88.063px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.0634 88.0635">
        <g clipPath="url(#clip0_1_2441)" id="Frame">
          <g id="Vector" />
          <path d={svgPaths.p64aca00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.33862" />
          <path d={svgPaths.p1b25f800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.33862" />
        </g>
        <defs>
          <clipPath id="clip0_1_2441">
            <rect fill="white" height="88.0635" width="88.0634" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents left-[196px] top-[124px]">
      <div className="absolute flex items-center justify-center left-[248.46px] size-[147.98px] top-[124px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.3deg]">
          <Frame37 />
        </div>
      </div>
      <div className="absolute flex inset-[28.58%_64.94%_51.87%_25.13%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50.9378cqw,49.0623cqh)] rotate-[46.07deg] w-[hypot(49.0622cqw,50.9377cqh)]">
          <Frame38 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[196px] size-[119.134px] top-[146.32px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-28.06deg]">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents left-[13px] top-[124px]">
      <Group76 />
      <Group77 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute left-[603px] size-[24px] top-[220px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2008)" id="Frame">
          <g id="Vector" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2008">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents left-[603px] top-[197px]">
      <Frame40 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[649px] not-italic text-[20px] text-black top-[233.5px] whitespace-nowrap">
        <p className="leading-[73px]">How does the pet adoption process work?</p>
      </div>
      <div className="absolute h-0 left-[607px] top-[280.25px] w-[569.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 569.001 1">
            <line id="Line 4" stroke="var(--stroke-0, #F2F0ED)" x2="569.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute left-[603px] size-[24px] top-[313px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2008)" id="Frame">
          <g id="Vector" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2008">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents left-[603px] top-[290px]">
      <Frame41 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[649px] not-italic text-[20px] text-black top-[326.5px] whitespace-nowrap">
        <p className="leading-[73px]">What documents are required to adopt a pet?</p>
      </div>
      <div className="absolute h-0 left-[607px] top-[373.25px] w-[569.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 569.001 1">
            <line id="Line 4" stroke="var(--stroke-0, #F2F0ED)" x2="569.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute left-[603px] size-[24px] top-[406px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2008)" id="Frame">
          <g id="Vector" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2008">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents left-[603px] top-[383px]">
      <Frame42 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[649px] not-italic text-[20px] text-black top-[419.5px] whitespace-nowrap">
        <p className="leading-[73px]">Is there an adoption fee? What does it include?</p>
      </div>
      <div className="absolute h-0 left-[607px] top-[466.25px] w-[569.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 569.001 1">
            <line id="Line 4" stroke="var(--stroke-0, #F2F0ED)" x2="569.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute left-[603px] size-[24px] top-[499px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2008)" id="Frame">
          <g id="Vector" />
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #55A7E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2008">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents left-[603px] top-[476px]">
      <Frame43 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[649px] not-italic text-[20px] text-black top-[512.5px] whitespace-nowrap">
        <p className="leading-[73px]">Is there an adoption fee? What does it include?</p>
      </div>
      <div className="absolute h-0 left-[607px] top-[559.25px] w-[569.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 569.001 1">
            <line id="Line 4" stroke="var(--stroke-0, #F2F0ED)" x2="569.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "How does the pet adoption process work?",
    answer: "The pet adoption process typically starts with an application. Once approved, you can meet the pets, pay the adoption fee, and take your new furry friend home. Our staff will guide you through every step to ensure a great match."
  },
  {
    question: "What documents are required to adopt a pet?",
    answer: "You will need a valid government-issued ID, proof of address (like a utility bill), and sometimes a lease agreement if you rent your home. We may also require a vet reference if you currently have other pets."
  },
  {
    question: "Is there an adoption fee? What does it include?",
    answer: "Yes, there is an adoption fee which helps cover the cost of care. This fee typically includes spay/neuter surgery, up-to-date vaccinations, microchipping, and a general veterinary exam before adoption."
  },
  {
    question: "Can I return a pet if it doesn't work out?",
    answer: "Yes, we have a return policy. We want both you and the pet to be happy. If the match isn't right, you can return the pet within 30 days, though adoption fees are generally non-refundable."
  },
  {
    question: "Are the pets spayed or neutered?",
    answer: "Yes! All dogs and cats are spayed or neutered before they are available for adoption. This helps control the pet population and provides health benefits for your new pet."
  },
  {
    question: "Can I adopt if I live in an apartment?",
    answer: "Absolutely! Many pets, especially older animals and certain breeds, thrive in apartments. We will help match you with a pet whose energy level suits your living space."
  },
  {
    question: "Do you offer post-adoption support?",
    answer: "Yes, we offer ongoing support. You can reach out to our team with behavioral questions or health concerns, and we provide resources to help you and your pet adjust to life together."
  },
  {
    question: "Can I bring my current dog to meet a potential new dog?",
    answer: "Yes, we strongly encourage 'meet and greets' if you already have a dog. This ensures that the two dogs get along well before you make a final adoption decision."
  }
];

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="flex flex-col w-[569px] border-b border-[#F2F0ED] pb-[9px] mb-[9px]">
      <div className="flex items-center gap-[22px] w-full cursor-pointer h-[74px]" onClick={onClick}>
        <svg className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19" stroke="#55A7E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12H19" stroke="#55A7E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-['Inter:Medium'] font-medium text-[20px] text-black leading-[73px] whitespace-nowrap">{question}</span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
        <div className="text-gray-600 font-['Inter:Regular'] text-[16px] pl-[46px] leading-relaxed whitespace-normal pr-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

function Group78({ showMore, setShowMore, openIndex, setOpenIndex, containerRef }: { showMore: boolean, setShowMore: (b: boolean) => void, openIndex: number | null, setOpenIndex: (idx: number | null) => void, containerRef: React.RefObject<HTMLDivElement> }) {
  const visibleFaqs = showMore ? faqData : faqData.slice(0, 4);

  return (
    <div ref={containerRef} className="absolute left-[603px] top-[197px] flex flex-col z-10 bg-white w-[569px]">
      {visibleFaqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
      <div
        className="flex justify-end font-['Inter:Medium',sans-serif] font-medium text-[#55a7e0] text-[20px] cursor-pointer hover:underline mt-[10px]"
        onClick={() => setShowMore(!showMore)}
      >
        <span className="leading-[73px]">{showMore ? "See Less Faqs ↑" : "See More Faqs →"}</span>
      </div>
    </div>
  );
}

function Faq({ setFaqExtraHeight }: { setFaqExtraHeight: (h: number) => void }) {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState(637);
  const groupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!groupRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Group78 is at top 197px, plus its own height, plus 40px padding bottom
        const newHeight = Math.max(637, 197 + entry.contentRect.height + 40);
        setContentHeight(newHeight);
        setFaqExtraHeight(newHeight - 637);
      }
    });
    observer.observe(groupRef.current);
    return () => observer.disconnect();
  }, [setFaqExtraHeight]);

  return (
    <div className="absolute bg-white left-[95px] rounded-[64px] top-[4098px] w-[1255px] transition-all duration-300" style={{ height: contentHeight }} data-name="Faq">
      <div className="overflow-visible relative rounded-[inherit] size-full">
        <Group75 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%-119.5px)] not-italic text-[#55a7e0] text-[64px] top-[107px] whitespace-nowrap">
          <p className="leading-[73px] mb-0">Frequently Asked</p>
          <p className="leading-[73px]">Questions</p>
        </div>
        <Group78 showMore={showMore} setShowMore={setShowMore} openIndex={openIndex} setOpenIndex={setOpenIndex} containerRef={groupRef} />
      </div>
      <div aria-hidden="true" className="absolute border-[#4cbfff] border-[0.1px] border-solid inset-[-0.1px] pointer-events-none rounded-[64.1px] shadow-[0px_4px_17.3px_0px_rgba(76,191,255,0.2)] transition-all duration-300" style={{ height: contentHeight }} />
    </div>
  );
}

function Component77951261HandDrawnPaintPawPrint19() {
  return (
    <div className="relative shrink-0 size-[41.454px]" data-name="77951261_Hand Drawn Paint Paw Print 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.4536 41.4536">
        <g id="77951261_Hand Drawn Paint Paw Print 1">
          <rect fill="var(--fill-0, white)" height="41.4536" rx="20.3038" width="41.4536" />
          <path d={svgPaths.p174f5d00} fill="var(--fill-0, #4CBFFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#55a7e0] content-stretch flex gap-[28px] h-[50px] items-center justify-center left-[calc(50%+2.5px)] pl-[26px] pr-[5.922px] py-[4.23px] rounded-[8459.069px] top-[3790px] w-[231px]" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20.304px] text-white whitespace-nowrap">
        <p className="leading-[23.688px]">Get more tips</p>
      </div>
      <Component77951261HandDrawnPaintPawPrint19 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents left-[337px] top-[3635px]">
      <div className="absolute h-[171px] left-[331px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_32px] mask-size-[816px_136px] top-[3602px] w-[823px]" style={{ maskImage: `url('${imgImage18}')` }} data-name="image 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[945.03%] left-[-0.01%] max-w-none top-[-513.45%] w-[131.73%]" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Group83() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[3098px]">
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-0.5px)] size-[943px] top-[3159px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[943px]">
            <div className="absolute bottom-0 left-0 right-0 top-1/2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 942.713 471.5">
                <path d={svgPaths.p38d3fb00} fill="var(--fill-0, #55A7E0)" id="Ellipse 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group84 />
      <div className="absolute h-[110.5px] left-[335px] top-[3642.5px] w-[800px]">
        <div className="absolute inset-[-0.9%_-1.5%_-20.81%_-1.5%]">
          <img alt="" className="block max-w-none size-full" height="134.5" src={imgEllipse3} width="824" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[632px] left-[calc(50%-4px)] top-[3098px] w-[328px]" data-name="dog tips 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.27%] left-[-110.48%] max-w-none top-[-4.27%] w-[306.93%]" src={imgDogTips1} />
        </div>
      </div>
      <div className="absolute left-[777px] size-[366px] top-[3352px]" data-name="confused puppy 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConfusedPuppy1} />
      </div>
      <div className="absolute left-[298px] size-[331px] top-[3387px]" data-name="cat tips 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCatTips1} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-white left-[27px] rounded-[26.608px] top-[3292px]">
      <div className="content-stretch flex items-center overflow-clip px-[26.608px] py-[19.956px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19.685px] text-[rgba(0,0,0,0.75)] w-[321.785px]">
          <p className="leading-[31.989px]">Provide a balanced diet based on the pet’s age, size, and breed.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#55a7e0] border-[0.166px] border-solid inset-0 pointer-events-none rounded-[26.608px] shadow-[0px_2.494px_7.4px_-1.663px_#55a7e0]" />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-[17.91%_19.4%_22.39%_20.9%]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0001 40.0001">
        <g id="Background">
          <path clipRule="evenodd" d={svgPaths.p25be000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pe9ff100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p4077a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p23c76600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p142d9100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p23d32300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p11257400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2c411c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p2df8fe00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_9" />
          <g id="Vector_10" />
          <g id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p77ddc00} fill="var(--fill-0, white)" fillOpacity="0.49" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.pa241800} fill="var(--fill-0, white)" fillOpacity="0.49" fillRule="evenodd" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-[#55a7e0] left-[264px] rounded-[53px] size-[67px] top-[3405px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[55px]" />
      <Background />
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents left-[27px] top-[3292px]">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white left-[1048px] rounded-[26.608px] top-[3258px]">
      <div className="content-stretch flex items-center overflow-clip px-[26.608px] py-[19.956px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19.685px] text-[rgba(0,0,0,0.75)] w-[321.785px]">
          <p className="leading-[31.989px]">Regular brushing, bathing, and nail trimming, Maintain clean surroundings.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#55a7e0] border-[0.166px] border-solid inset-0 pointer-events-none rounded-[26.608px] shadow-[0px_2.494px_7.4px_-1.663px_#55a7e0]" />
    </div>
  );
}

function PetShampooHandDrawnVectorIllustration() {
  return (
    <div className="absolute inset-[14.93%_19.4%_19.4%_20.9%]" data-name="pet-shampoo-hand-drawn-vector-illustration_685085-15512 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
        <g clipPath="url(#clip0_1_1966)" id="pet-shampoo-hand-drawn-vector-illustration_685085-15512 1">
          <g id="Vector" />
          <path d={svgPaths.p25f99b00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p235b200} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1b91ec40} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p5dcc200} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p31b4fa00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2a361200} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1c83ac80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p33b8a9f2} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3c543200} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p34fa1e80} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p67a0900} fill="var(--fill-0, white)" id="Vector_12" />
          <g id="Vector_13" />
          <g id="Vector_14" />
          <g id="Vector_15" />
          <g id="Vector_16" />
          <g id="Vector_17" />
          <g id="Vector_18" />
          <g id="Vector_19" />
          <g id="Vector_20" />
          <g id="Vector_21" />
        </g>
        <defs>
          <clipPath id="clip0_1_1966">
            <rect fill="white" height="44" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute bg-[#55a7e0] left-[1115px] rounded-[53px] size-[67px] top-[3405px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[55px]" />
      <PetShampooHandDrawnVectorIllustration />
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents left-[1048px] top-[3258px]">
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute bg-white left-[214px] rounded-[26.608px] top-[3055px]">
      <div className="content-stretch flex items-center overflow-clip px-[26.608px] py-[19.956px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19.685px] text-[rgba(0,0,0,0.75)] w-[321.785px]">
          <p className="leading-[31.989px]">Schedule routine health checkups, Keep vaccinations up to date.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#55a7e0] border-[0.166px] border-solid inset-0 pointer-events-none rounded-[26.608px] shadow-[0px_2.494px_7.4px_-1.663px_#55a7e0]" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute inset-[19.4%_19.4%_18.05%_20.9%]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 41.9088">
        <g id="Background">
          <path clipRule="evenodd" d={svgPaths.p23eb1a80} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1a691700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p267f5e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pb48a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3e676c00} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p29d95300} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p170e5700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p3aaab300} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.paff5300} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p3f6f6d00} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p300da180} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p77f4380} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p28d60080} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p3733f680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p1d6b8180} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p32acfb80} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p143ee400} fill="var(--fill-0, #55A7E0)" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p1c4c2d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p5e56d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p115f3a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p29347500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p38082e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p1cedd380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p10b78680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p1071b700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p27bf2a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p302d0000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.pccfae00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p3d184c70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p1841fb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p1dcfbd00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p26cc4900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p3465da80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p18506940} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p30994900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p3913a500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.pbfe1b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p113d2280} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p17e80200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p49b9400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p1649200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p223b5ef0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p247cc700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p89b4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p104e8b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p149c0a60} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p3ce54700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p19a4bd00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p22770900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p11e70f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p30f146f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pa068500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.p1547ec80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p6fa5f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p22cc800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p20c2b200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p147825c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p335ff740} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p2a774400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p24786900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p31294900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p349b6280} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p1f274900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p20692700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p185e3490} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p2c4bdc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p32080780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p19240900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p270a6380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p742a3c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p2ca29000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p2a71b280} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p34ad7580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p379890f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1c152c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p1e0e5570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p1af57040} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p16144d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p1dcb500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p257c4a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p36d8c320} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p39253600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p3daf9f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p378b24b2} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.pd87df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p1a0ff800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p1b13fb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p33efa300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p39c8c130} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p18975100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p3f9ec900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p24cc0e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p2a9c6840} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p1301dfc0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p3d515900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p30ddae00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p1c94ecf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.pd8cec00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p3328ab00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p158abb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p17089900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p1474ec80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p138c1f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p38c9d500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p35935780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p2889bf80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p2c59bf80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.pc58d600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p36ab1400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p15541700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p2d342800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2b9e2d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p360e0300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p13414a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p31a8ce70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p2f43daf2} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p22bc1700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p34a2680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p5840d70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.pab17340} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p152dcc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p1cac2700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p1eb89500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p2385a3f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p1e1e5600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p2e839a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p12e7c800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p35504a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.pea5a100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p37a26200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p235e7200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p23e5b6c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p3aea1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3a0dae80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p74a8000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p258aa200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p20b724c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p625e180} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_138" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[#55a7e0] left-[507px] rounded-[53px] size-[67px] top-[3167px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[55px]" />
      <Background1 />
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents left-[214px] top-[3055px]">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-white left-[863px] rounded-[26.608px] top-[3023px]">
      <div className="content-stretch flex items-center overflow-clip px-[26.608px] py-[19.956px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19.685px] text-[rgba(0,0,0,0.75)] w-[316px]">
          <p className="leading-[31.989px]">Daily exercise keeps pets healthy and active, Helps prevent obesity and behavioral issues.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#55a7e0] border-[0.166px] border-solid inset-0 pointer-events-none rounded-[26.608px] shadow-[0px_2.494px_7.4px_-1.663px_#55a7e0]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute left-[878px] size-[67px] top-[3167px]">
      <div className="absolute inset-[-2.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71">
          <g id="Frame 14">
            <rect fill="var(--fill-0, #55A7E0)" height="69" rx="34.5" width="69" x="1" y="1" />
            <rect height="69" rx="34.5" stroke="var(--stroke-0, white)" strokeWidth="2" width="69" x="1" y="1" />
            <path clipRule="evenodd" d={svgPaths.p130c5880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents left-[863px] top-[3023px]">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function PetCareTipsHeader() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[2850px] z-[50] flex items-center justify-center pointer-events-none" data-name="Pet Care Tips">
      <svg width="753" height="157" viewBox="0 0 753 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M672.587 42.3329C673.079 42.1145 674.626 41.4278 678.773 44.9838C679.244 45.4538 679.145 45.4949 679.622 45.9708C681.426 47.7693 687.583 47.6455 689.325 46.9763C689.741 46.891 690.156 46.8057 690.572 46.7205C691.016 47.2294 691.128 47.1561 691.111 47.8803C689.576 48.4974 689.846 48.8802 684.727 52.5963C684.093 54.2388 684.868 54.1516 686.655 57.2043C684.585 66.7183 693.864 74.6627 693.04 68.353C692.951 67.6661 692.853 67.7252 692.497 67.0592C692.614 66.941 692.841 66.9861 692.958 66.8678C692.958 66.8678 692.554 64.5775 692.54 64.2026C699.263 65.1907 700.553 69.0702 705.173 64.5573L705.574 64.6747C730.811 66.9676 730.81 66.7189 732.989 67.0349C741.996 68.3415 743.246 66.6012 744.42 68.897C745.63 71.2645 740.098 73.1532 739.123 73.6561C738.576 73.939 736.769 74.8717 739.003 81.362C739.104 82.1141 739.659 86.2687 740.824 90.6708L740.905 91.5743C742.663 97.9641 743.695 105.681 743.861 106.92C740.977 108.407 741.219 108.897 741.442 109.023C741.852 109.255 743.764 107.958 744.282 107.658C752.83 124.468 755.666 127.131 749.766 128.914C745.349 130.25 743.789 131.03 743.131 129.237C742.422 127.307 743.605 126.778 746.159 125.696C746.708 124.396 746.18 124.421 745.357 123.284C740.034 115.922 735.997 109.044 733.914 107.986C733.919 109.099 733.937 109.06 733.8 110.13C732.098 110.079 730.877 110.616 730.797 110.734C729.949 111.991 733.615 110.716 733.845 110.636C735.672 123.634 738.772 132.724 734.373 132.861C726.729 133.1 726.047 132.564 726.024 130.596C726.014 129.76 726.53 129.41 726.622 129.348C728.086 128.355 728.222 128.837 730.194 128.684C732.65 129.566 733.205 128.232 732.468 127.973C732.33 127.925 732.325 128.109 730.652 127.814C728.713 122.519 725.579 110.43 724.542 108.816C723.257 106.576 716.037 96.8287 713.608 91.0602C713.065 89.7698 713.333 89.5344 712.083 88.8733C708.094 89.1072 708.101 89.5061 707.852 89.5679C707.141 89.4964 707.184 89.513 706.512 89.7391C703.873 90.3061 703.884 90.1509 701.32 90.9007C698.621 90.6296 698.703 91.2951 698.799 91.4782C699.042 91.9396 699.171 91.6065 700.157 91.3057C699.519 92.9096 693.086 109.064 692.651 111.537C692.323 119.369 691.627 122.285 691.511 128.273C691.496 129.025 692.125 131.557 689.365 132.643C689.238 132.693 684.517 132.742 681.908 131.971C681.053 130.716 680.854 130.449 681.675 128.999C681.791 128.934 681.727 128.46 685.141 128.27C687.514 130.052 687.69 128.891 687.673 128.686C687.654 128.432 685.72 127.851 685.543 127.798C685.361 118.175 685.004 117.073 684.716 116.188C684.504 114.692 684.611 114.724 684.625 112.948C684.635 112.483 684.645 112.018 684.654 111.552C689.101 102.746 692.689 96.8937 695.945 90.7111C697.25 88.234 695.098 90.2116 695.06 90.2804C684.739 108.776 684.381 109.684 683.675 111.475C680.597 111.238 680.518 111.729 680.65 111.935C681.483 113.237 681.957 112.292 683.317 112.947L683.263 113.405C682.178 118.534 682.124 118.486 680.99 123.634C680.747 124.328 680.735 124.284 680.801 124.964C680.137 127.889 679.92 127.841 679.997 129.671C680.011 130.01 680.132 132.908 677.245 132.884C671.494 132.839 669.203 133.477 669.566 129.812C669.646 129.607 669.726 129.402 669.806 129.197C671.645 128.776 671.623 128.891 673.528 128.71C673.699 128.786 677.283 130.355 675.867 128.722C675.77 128.611 675.731 128.706 674.27 127.797C675.102 111.801 676.874 111.723 674.849 102.735C670.938 85.3712 670.005 68.8284 668.485 68.1625C668.313 68.0871 668.113 68.0891 667.941 68.0137C668.069 67.9365 668.255 68.1687 668.383 68.0914C669.678 67.3111 668.156 63.9385 668.008 63.6106C668.453 63.5985 671.245 63.5223 673.485 62.6639C674.235 62.3767 676.266 61.228 676.332 60.9269C676.597 59.719 674.646 60.9595 674.523 61.0372C672.033 62.6202 669.016 62.3158 667.084 63.0204C665.977 63.3481 666.227 63.6407 665.465 64.4883C664.732 65.3047 657.853 63.7299 657.406 62.269C654.914 54.1315 658.013 49.7804 660.025 46.0245L660.377 45.4544L660.518 45.1176C662.424 45.6613 662.887 46.6068 663.863 44.8656C664.545 44.7976 664.604 44.6196 668.513 46.2905C668.886 46.4504 671.304 47.4838 672.349 42.9567C672.429 42.7487 672.508 42.5407 672.587 42.3327L672.587 42.3329Z" fill="#EBD350" />
        <path fillRule="evenodd" clipRule="evenodd" d="M612.667 23.1672C613.187 24.3282 616.928 32.6726 623.685 34.6349C625.297 35.6531 622.098 36.6904 620.792 43.2976C620.255 46.0166 622.122 48.3472 621.923 46.0605C621.532 41.5706 622.464 40.6664 624.776 36.3127C625.778 34.4254 626.363 35.7064 628.936 35.856C632.422 36.0588 627.51 39.0039 627.086 42.8062C626.871 44.7258 628.453 45.3308 628.314 44.2059C627.776 39.8627 630.183 40.4973 631.211 36.2827C631.341 35.7485 632.269 36.9521 636.894 32.4179C649.824 40.9889 649.717 41.0887 655.005 44.6C654.955 44.7474 655.19 44.899 655.141 45.0464C655.057 45.2943 654.776 45.4291 654.648 45.6575C654.477 45.9645 653.156 48.33 653.108 49.7731C653.005 52.8732 655.752 45.4564 655.905 45.0443C658.894 46.1842 659.689 46.0719 660.024 46.0245C658.012 49.7804 654.913 54.1315 657.405 62.269C657.853 63.73 664.732 65.3047 665.465 64.4883C666.226 63.6408 665.976 63.3482 667.083 63.0205L668.008 63.6105C668.156 63.9384 669.677 67.311 668.383 68.0914C668.254 68.1686 668.069 67.9364 667.941 68.0137C654.845 66.033 648.115 65.7707 637.618 57.3941C637.039 56.9319 633.089 54.1842 632.693 53.9085C631.097 53.4621 631.452 54.4415 630.489 58.1749C630.252 59.0941 630.161 59.1738 630.826 59.8358C629.052 59.6731 629.092 59.7129 628.942 59.6962L628.003 59.6644L626.613 59.5889C612.931 59.0389 612.935 59.3358 611.756 59.1868C609.852 58.9464 604.642 54.5513 604.639 54.4281C604.623 53.8877 618.157 39.1786 618.228 38.6216C618.565 35.9704 611.883 44.7691 604.342 53.0446C602.249 55.3407 597.794 53.2572 597.535 54.4719C597.128 56.3791 601.037 53.3989 605.225 56.3088C609.004 58.9343 609.043 58.7743 612.966 61.0941C613.468 61.3939 613.419 61.4121 613.997 61.5667C614.313 62.2845 614.461 62.1712 620.43 66.6648C622.402 68.4406 620.909 68.7609 619.621 71.1245C614.099 81.2619 613.731 81.0113 613.285 81.9071C612.265 83.9572 612.638 84.302 611.313 84.8631C611.138 84.7923 610.963 84.7215 610.788 84.6507C610.145 84.2729 610.207 84.2618 609.444 84.0522C607.159 81.8062 606.937 82.1628 597.864 75.7187C597.581 75.5274 597.297 75.336 597.014 75.1447C596.073 74.4386 596.105 74.4493 595.157 73.7508C585.942 66.9585 586.255 66.4046 584.732 66.0407C582.936 62.6108 579.331 62.0173 582.024 52.5604C585.343 45.603 586.2 46.1919 590.922 40.0899C592.992 37.4161 599.162 30.8082 599.898 30.0194C605.592 23.9216 610.2 23.5457 612.667 23.167V23.1672Z" fill="#FE76B1" />
        <path fillRule="evenodd" clipRule="evenodd" d="M613.998 61.5667C616.226 61.2372 616.212 61.3464 621.97 61.3469C628.768 61.3476 628.759 61.2802 630.332 61.382C631.715 63.0072 633.774 66.3585 634.469 65.0848C634.645 64.7621 634.665 64.6029 631.727 61.3966C632.184 61.439 632.641 61.4814 633.097 61.5237C635.288 62.2031 644.322 63.4351 644.692 79.9523C643.287 78.8712 639.439 73.2671 639.918 76.2868C639.929 76.3545 642.549 79.7497 644.507 81.3809C644.063 84.3615 644.112 84.3393 643.079 87.1635C641.527 87.0308 641.669 87.5248 638.926 90.9394C637.434 92.7961 639.449 91.9635 639.512 91.8992C639.901 91.5011 641.456 89.2832 641.501 89.2816C641.74 89.2724 641.796 89.77 642.035 89.7608C641.151 91.1601 639.341 94.7941 634.538 97.7393C633.919 97.0026 627.588 89.1635 628.906 92.9849C628.992 93.2334 629.101 93.1257 631.055 95.4709C632.299 96.9639 632.114 97.1108 633.756 98.2203C632.799 98.9041 632.801 98.8018 620.893 105.342C620.347 105.985 620.343 105.941 620.1 106.342C613.982 109.972 598.243 118.259 596.327 119.268C596.234 119.317 595.429 119.741 595.189 119.934C594.799 118.113 594.632 118.205 593.635 116.662C592.934 116.194 592.984 116.214 592.221 115.851C592.13 115.795 592.135 115.802 591.187 115.333C588.809 111.043 587.837 109.535 586.108 106.508C586.272 106.295 589.421 102.213 587.182 103.321C586.66 103.579 586.772 103.642 585.467 105.414C583.044 101.28 583.103 101.281 580.624 97.2128C583.472 95.873 583.411 95.8709 586.212 94.382C589.49 98.803 589.926 98.7604 590.195 98.397C590.43 98.081 589.284 95.6308 586.762 94.0757C588.368 93.2322 592.161 91.217 592.63 90.9677C594.008 90.2355 593.971 90.2484 595.394 89.5279C595.357 89.6177 594.927 90.6494 594.927 90.6494C593.333 91.9356 594.865 92.4637 595.407 91.9523C595.609 91.7622 597.565 89.918 597.583 89.2559C597.589 89.0023 597.22 88.8369 597.227 88.5834L597.457 88.4682C598.453 87.9019 598.462 87.9211 598.574 87.7988C599.896 87.9116 599.882 87.8448 608.96 85.4209C610.266 87.725 610.566 85.2219 610.581 85.0905L610.789 84.6512C610.964 84.7219 611.139 84.7927 611.314 84.8635C612.066 85.4307 612.111 85.7677 612.474 85.3624C613.265 84.4803 613.157 84.424 614.064 83.6871C619.041 87.7566 619.093 87.6825 619.525 88.0362C616.378 90.2636 615.705 93.1284 617.359 92.09C617.663 91.899 617.614 91.8592 620.255 88.6601C621.404 89.5424 623.896 92.0289 625.518 89.6182C627.624 86.4879 618.438 83.5399 620.181 82.4091C621.382 81.6295 626.81 89.5685 628.168 85.1278C629.083 82.1394 619.567 78.5073 622.88 78.4338C624.255 78.4033 629.048 85.0507 630.488 81.4274C631.397 79.1418 629.566 78.2336 627.441 76.3914C627.862 76.0193 630.202 73.953 632.025 71.0655C632.149 70.8691 632.109 69.1801 630.954 70.676C630.4 71.3928 629.657 71.4664 629.639 71.4777C630.976 65.4591 623.424 68.7292 622.501 68.9252C622.153 65.5401 624.139 62.2472 622.362 63.1109C621.901 63.3349 622.046 65.4854 620.43 66.6652C614.462 62.1716 614.313 62.2849 613.998 61.5671L613.998 61.5667Z" fill="#4D6EA9" />
        <path fillRule="evenodd" clipRule="evenodd" d="M628.941 59.6961C629.092 59.7129 629.052 59.6732 630.826 59.8358C631.455 60.0553 631.339 60.2991 632.199 60.3151C632.959 60.3291 632.86 60.1046 633.588 59.8723C638.11 60.2173 638.242 60.1455 641.783 62.9222C645.973 66.2082 646.973 74.2466 647.106 75.3174C647.184 78.3471 647.217 78.3159 647.14 81.3586C647.097 120.703 646.754 120.81 647.384 121.965L647.495 122.302C645.875 121.711 645.96 121.354 644.273 121.469L643.792 121.445C643.681 121.358 643.48 121.55 643.37 121.462C643.113 121.258 643.139 119.01 642.121 120.108C639.928 122.472 640.264 122.718 640.064 122.912C639.96 123.014 639.733 122.843 639.629 122.945C638.142 122.944 621.554 122.942 621.042 122.891C620.618 122.849 620.775 122.586 620.358 122.504C620.154 122.464 620.348 122.755 620.17 122.72C620.193 121.32 620.215 119.92 620.238 118.52C620.36 117.097 620.507 113.387 620.525 112.94C622.832 115.332 623 115.226 623.234 115.078C623.872 114.675 622.857 113.429 620.601 111.086C620.637 109.682 620.672 108.278 620.708 106.873C620.505 106.696 620.302 106.519 620.099 106.342C620.342 105.941 620.346 105.985 620.892 105.342C621.183 105.493 621.261 105.919 621.551 106.071C621.716 106.157 632.145 100.34 633.059 99.8299C650.995 89.826 646.911 68.5152 638.694 62.7754C636.493 61.2378 634.148 60.6982 634.086 60.7459C633.818 60.9527 633.802 61.3915 633.535 61.601C633.419 61.6926 633.214 61.4316 633.097 61.5233C632.64 61.4809 632.183 61.4386 631.727 61.3962C631.262 61.3914 630.797 61.3865 630.332 61.3817C628.759 61.2799 628.768 61.3471 621.97 61.3466C616.212 61.346 616.225 61.237 613.997 61.5664C613.418 61.4118 613.468 61.3936 612.965 61.0939C614.785 59.8261 616.408 60.3092 618.254 60.3048C627.317 60.2837 627.358 60.3612 628.465 59.8246C628.465 59.8246 628.903 59.7061 628.941 59.6958V59.6961Z" fill="#4D6DA7" />
        <path fillRule="evenodd" clipRule="evenodd" d="M584.733 66.041C586.255 66.4049 585.942 66.9588 595.157 73.7512C596.105 74.4496 596.073 74.4389 597.014 75.145C595.874 75.628 595.216 75.6788 595.966 76.7086C596.276 77.1341 598.208 79.788 600.24 81.7098C600.803 82.2424 601.98 81.9113 600.885 80.5798C597.483 76.4443 597.014 76.6888 597.144 76.2499C597.229 75.9637 597.78 76.0051 597.865 75.719C606.937 82.1631 607.159 81.8066 609.445 84.0525C603.868 85.8002 603.746 85.3017 598.297 87.3773C597.834 87.3579 597.37 87.3384 596.907 87.319C593.52 86.2391 591.991 86.0087 588.824 82.9078C591.211 79.85 589.356 79.5461 589.15 79.7009C588.879 79.9049 588.661 80.8114 588.637 80.9139C588.473 81.5971 588.266 81.4484 587.908 81.9657C585.01 78.5623 584.609 75.7988 584.366 74.8544C589.039 71.1942 588.072 70.2411 587.622 70.1549C586.786 69.9945 584.412 73.6215 584.188 73.9649C583.743 69.9757 583.728 69.9604 584.733 66.041H584.733Z" fill="#4D6FAA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M580.624 97.2129C583.103 101.282 583.044 101.28 585.467 105.414C585.68 105.778 585.894 106.143 586.108 106.508C587.837 109.535 588.809 111.044 591.187 115.333C591.092 115.624 590.996 115.915 590.9 116.206C589.886 120.699 589.595 120.776 590.004 121.243C591.216 122.63 590.691 118.316 592.22 115.851C592.983 116.214 592.934 116.194 593.635 116.662C593.201 117.005 593.31 117.123 592.813 117.31C591.121 117.946 593.895 118.132 594.373 118.6C593.815 119.132 593.819 119.077 593.088 119.335C591.439 119.916 594.044 119.95 594.978 120.853C596.02 123.127 595.584 123.212 595.904 126.422C592.629 122.369 589.911 124.57 587.56 123.225C586.301 122.505 576.786 105.442 574.507 100.732C576.036 99.8978 580.137 97.4981 580.624 97.213L580.624 97.2129Z" fill="#EDD657" />
        <path fillRule="evenodd" clipRule="evenodd" d="M643.325 121.548C643.41 122.149 643.556 122.086 643.487 122.69C643.418 123.289 644.176 123.178 644.233 123.124C644.318 123.042 644.305 123.042 645.205 122.016C645.375 122.062 645.933 121.78 645.625 122.695C645.058 124.382 646.144 123.774 646.189 123.694C646.88 122.489 647.075 122.654 648.449 122.688C648.882 122.808 650.876 123.046 652.23 124.337C647.065 126.791 648.358 128.22 646.859 129.455C645.032 130.961 638.438 130.585 620.042 130.124C620.055 126.378 620.066 126.428 620.171 122.72C620.348 122.755 620.155 122.464 620.359 122.504C620.776 122.586 620.618 122.849 621.043 122.891C621.555 122.942 638.143 122.944 639.629 122.945C641.502 123.151 641.298 123.558 642.727 124.722C642.921 124.88 652.458 132.65 645.574 126.024C643.059 123.602 640.101 122.852 643.325 121.548L643.325 121.548Z" fill="#EDD658" />
        <path fillRule="evenodd" clipRule="evenodd" d="M622.501 68.925C623.424 68.729 630.976 65.4589 629.639 71.4775C629.368 71.7787 629.096 72.08 628.825 72.3813C626.822 73.1665 626.767 72.8338 624.673 73.2613C624.531 73.2905 617.627 74.6999 623.35 74.5159C625.383 74.4504 625.316 74.744 626.922 75.9688L627.441 76.3911C629.566 78.2333 631.397 79.1415 630.488 81.4271C629.048 85.0504 624.255 78.4031 622.88 78.4335C619.567 78.507 629.083 82.1391 628.168 85.1275C626.81 89.5681 621.382 81.6292 620.181 82.4087C618.438 83.5396 627.624 86.4876 625.518 89.6179C623.896 92.0286 621.404 89.5422 620.255 88.6597L619.525 88.0359C619.093 87.6822 619.041 87.7563 614.064 83.6867C613.979 82.4828 614.086 82.5178 614.695 81.4518C621.105 70.2373 621.641 69.7336 622.501 68.9247L622.501 68.925Z" fill="#FEE9E9" />
        <path fillRule="evenodd" clipRule="evenodd" d="M687.925 56.3187C690.498 55.9362 690.467 56.0803 693.039 56.2253C697.414 56.5497 703.348 59.3554 704.77 60.3898C705.066 60.7977 705.069 60.737 705.366 61.1363C705.55 62.3185 705.739 62.3214 705.21 63.3628C701.719 62.2474 694.988 59.8476 697.293 61.7504C697.94 62.2849 704.01 64.0347 704.603 64.2056L705.173 64.5572C700.553 69.0703 699.263 65.1907 692.539 64.2025C692.23 63.4973 692.241 63.5392 691.944 62.844C690.79 60.15 690.688 64.2104 692.497 67.0592C692.853 67.7251 692.951 67.6661 693.04 68.3529C693.864 74.6626 684.584 66.7184 686.655 57.2043C687.078 56.9091 687.502 56.6139 687.925 56.3187Z" fill="#FEE9EA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M652.229 124.337C653.839 124.925 657.183 125.59 657.282 129.202C657.365 132.229 656.117 132.6 654.02 133.307C651.201 133.275 651.241 133.428 648.449 133.091C647.463 133.037 647.513 133.008 646.579 133.078C644.535 133.102 643.914 133.11 621.026 132.807C619.414 132.397 620.154 131.785 620.042 130.124C638.438 130.586 645.032 130.961 646.859 129.455C648.358 128.22 647.064 126.792 652.23 124.337L652.229 124.337Z" fill="#CFD8EA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M574.507 100.732C576.787 105.442 586.301 122.505 587.56 123.225C589.911 124.57 592.629 122.369 595.904 126.421C595.925 127.011 596.324 130.126 595.473 131.047C593.466 133.22 592.116 134.359 589.191 132.291C588.11 130.806 573.163 103.543 572.376 102.685C573.114 101.05 573.448 101.395 574.507 100.732Z" fill="#CFD8EB" />
        <path fillRule="evenodd" clipRule="evenodd" d="M683.674 111.475C684.38 109.684 684.738 108.776 695.059 90.2804C695.097 90.2117 697.25 88.234 695.945 90.7111C692.688 96.8937 689.1 102.746 684.654 111.552C684.481 112.256 684.477 112.239 684.624 112.948C684.61 114.724 684.504 114.692 684.716 116.188C684.617 116.311 684.99 116.504 684.892 116.628C684.687 116.884 683.717 116.313 683.744 117.59C683.832 121.818 683.567 121.794 684.245 125.953C684.501 127.522 683.042 126.408 681.834 127.765C681.116 128.57 680.862 128.172 680.866 128.259C680.869 128.346 680.924 128.312 681.675 128.999C680.853 130.449 681.053 130.715 681.907 131.971C681.857 132.307 681.806 132.644 681.755 132.981C679.494 131.562 679.537 134.167 677.703 134.253C670.618 134.585 670.306 133.828 668.441 131.966C668.36 131.885 667.938 131.464 668.006 130.599C668.093 129.495 668.495 129.688 669.565 129.812C669.202 133.477 671.493 132.839 677.244 132.885C680.131 132.908 680.01 130.01 679.996 129.672C679.919 127.842 680.137 127.89 680.8 124.965L680.989 123.634C682.124 118.486 682.177 118.534 683.263 113.406C683.548 112.697 683.568 112.746 683.641 111.942L683.674 111.475L683.674 111.475Z" fill="#2B230A" fillOpacity="0.21" />
        <path fillRule="evenodd" clipRule="evenodd" d="M633.097 61.5234C633.214 61.4317 633.419 61.6927 633.536 61.6011C633.802 61.3916 633.818 60.9528 634.087 60.746C634.149 60.6984 636.493 61.2379 638.695 62.7755C646.912 68.5153 650.995 89.8261 633.06 99.83C632.145 100.34 621.716 106.157 621.552 106.071C621.261 105.919 621.183 105.493 620.893 105.342C632.801 98.8015 632.798 98.9038 633.755 98.22L634.538 97.739C639.341 94.7937 641.151 91.1597 642.034 89.7605C642.646 88.462 642.588 88.4929 643.079 87.1631C644.112 84.339 644.062 84.3612 644.507 81.3806L644.691 79.952C644.322 63.4348 635.288 62.2028 633.097 61.5234Z" fill="#260E14" />
        <path fillRule="evenodd" clipRule="evenodd" d="M626.613 59.5892C627.326 59.7733 627.291 59.7729 628.003 59.6647L628.942 59.6965C628.904 59.7067 628.465 59.8252 628.465 59.8252C627.358 60.3619 627.317 60.2844 618.254 60.3055C616.408 60.3098 614.785 59.8268 612.966 61.0945C609.043 58.7747 609.004 58.9347 605.225 56.3092C601.037 53.3993 597.128 56.3795 597.535 54.4723C597.794 53.2576 602.249 55.3411 604.342 53.045C611.883 44.7694 618.565 35.9708 618.228 38.622C618.157 39.179 604.623 53.8883 604.639 54.4285C604.642 54.5517 609.852 58.9468 611.756 59.1872C612.935 59.3362 612.931 59.0394 626.613 59.5893L626.613 59.5892Z" fill="#453B59" />
        <path fillRule="evenodd" clipRule="evenodd" d="M636.796 31.1743C636.797 31.1872 636.551 31.2377 636.895 32.4181C632.269 36.9523 631.341 35.7487 631.211 36.2829C630.183 40.4976 627.776 39.8629 628.314 44.2061C628.454 45.331 626.872 44.726 627.086 42.8064C627.511 39.0041 632.423 36.059 628.936 35.8562C626.364 35.7066 625.778 34.4256 624.776 36.3129C622.465 40.6666 621.533 41.5708 621.924 46.0607C622.123 48.3473 620.256 46.0168 620.793 43.2978C622.098 36.6904 625.297 35.6532 623.686 34.6351C624.054 33.9137 624.131 33.8832 623.76 33.1742C623.507 32.9865 623.253 32.7988 623 32.6112C624.356 30.5194 624.154 33.9473 626.616 34.4435C628.649 34.8534 629.741 35.4035 629.545 33.9697C629.376 32.7361 630.348 32.6807 630.576 33.5515C631.16 35.7854 632.072 35.1515 633.928 33.8088C635.53 32.6496 635.251 32.3819 636.796 31.1743Z" fill="#40141C" />
        <path fillRule="evenodd" clipRule="evenodd" d="M733.914 107.986C733.829 107.832 733.476 107.962 733.598 106.92C736.483 82.2661 736.326 79.7426 737.521 81.4249C737.768 81.7725 734.531 107.762 734.415 107.938C734.323 108.078 734.006 107.846 733.914 107.986Z" fill="#593C16" />
        <path fillRule="evenodd" clipRule="evenodd" d="M620.43 66.6651C622.046 65.4853 621.901 63.3348 622.362 63.1108C624.138 62.247 622.153 65.5399 622.501 68.9251C621.64 69.734 621.105 70.2376 614.695 81.4521C614.086 82.5181 613.979 82.4831 614.064 83.6871C613.157 84.424 613.265 84.4803 612.474 85.3624C612.111 85.7677 612.066 85.4307 611.313 84.8635C612.638 84.3025 612.265 83.9575 613.285 81.9075C613.731 81.0117 614.099 81.2623 619.621 71.1249C620.909 68.7613 622.402 68.441 620.43 66.6652L620.43 66.6651Z" fill="#30223B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M633.992 40.0164C632.686 52.9086 631.928 53.8246 631.212 53.036C630.356 52.0931 632.315 51.9831 633.094 37.2293C633.098 37.1451 633.16 35.9762 633.851 36.4942C634.077 36.6639 633.999 39.7346 633.992 40.0164Z" fill="#5A202E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M613.132 22.3657C616.789 28.967 617.988 30.4869 622.419 33.1592C623.339 33.6462 623.325 33.7138 623.41 33.6841C623.747 33.5664 623.434 33.2882 623.76 33.1742C624.131 33.8831 624.054 33.9138 623.686 34.6352C616.928 32.6729 613.188 24.3284 612.667 23.1675C612.822 22.9003 612.977 22.6329 613.132 22.3657Z" fill="#28090C" />
        <path fillRule="evenodd" clipRule="evenodd" d="M609.445 84.0522C610.207 84.2618 610.146 84.273 610.789 84.6508L610.581 85.0901C610.041 85.2003 609.5 85.3104 608.96 85.4206C599.882 87.8443 599.896 87.9112 598.574 87.7984L598.297 87.377C603.746 85.3014 603.868 85.7999 609.445 84.0522Z" fill="#29151F" fillOpacity="0.99" />
        <path fillRule="evenodd" clipRule="evenodd" d="M680.511 44.8657C682.664 45.1628 684.989 45.0578 688.863 45.0639C689.15 45.1081 689.436 45.1522 689.723 45.1965L689.763 45.5974C689.454 46.0548 689.484 46.0545 688.942 46.222C688.417 46.2801 686.088 46.5379 682.337 46.217C681.056 46.1074 680.584 45.3688 680.026 44.9168L680.51 44.8658L680.511 44.8657Z" fill="#F9E055" fillOpacity="0.98" />
        <path fillRule="evenodd" clipRule="evenodd" d="M678.773 44.984C679.143 45.0441 679.927 44.9313 680.027 44.917C680.584 45.369 681.057 46.1076 682.338 46.2172C686.088 46.5381 688.418 46.2803 688.943 46.2222C689.329 46.5197 689.309 46.4866 689.329 46.5197C689.464 46.7357 689.179 46.744 689.325 46.9766C687.584 47.6458 681.426 47.7695 679.622 45.971C679.145 45.4951 679.244 45.4541 678.773 44.9841L678.773 44.984Z" fill="#654A1C" />
        <path fillRule="evenodd" clipRule="evenodd" d="M597.014 75.1445C597.298 75.3358 597.581 75.5272 597.865 75.7185C597.78 76.0047 597.229 75.9633 597.144 76.2494C597.014 76.6883 597.483 76.4438 600.885 80.5794C601.981 81.9109 600.803 82.242 600.24 81.7093C598.208 79.7874 596.276 77.1335 595.966 76.7081C595.217 75.6782 595.874 75.6275 597.014 75.1445H597.014Z" fill="#374589" />
        <path fillRule="evenodd" clipRule="evenodd" d="M643.792 121.445L643.324 121.549C640.101 122.852 643.059 123.603 645.574 126.024C652.458 132.651 642.92 124.881 642.726 124.723C641.297 123.558 641.502 123.151 639.629 122.945C639.733 122.844 639.96 123.014 640.064 122.913C640.264 122.719 639.928 122.473 642.121 120.109C643.14 119.01 643.113 121.259 643.37 121.463C643.481 121.55 643.682 121.358 643.792 121.445Z" fill="#37355D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M628.825 72.3813C628.765 72.5976 629.255 72.8725 628.474 73.6466C627.466 74.6455 627.555 74.6743 626.922 75.9689C625.317 74.744 625.383 74.4505 623.35 74.516C617.627 74.7 624.531 73.2906 624.674 73.2614C626.767 72.834 626.822 73.1667 628.825 72.3813H628.825Z" fill="#465B8A" />
        <path fillRule="evenodd" clipRule="evenodd" d="M598.697 111.128C598.923 111.403 602.866 116.206 600.637 115.131C600.446 115.039 593.649 108.001 596.434 108.73C596.689 108.797 596.75 108.813 598.697 111.128Z" fill="#354186" />
        <path fillRule="evenodd" clipRule="evenodd" d="M641.573 109.61C642.421 110.613 642.399 110.571 643.288 111.593C643.364 111.681 646.508 114.888 645.16 115.139C644.534 115.256 638.164 108.28 640.563 108.705C640.67 108.724 640.638 108.772 641.573 109.61Z" fill="#364186" />
        <path fillRule="evenodd" clipRule="evenodd" d="M608.425 94.8944C608.278 94.7181 605.107 90.9314 607.519 92.1666C608.066 92.4468 612.186 97.4451 612.251 97.6001C613.748 101.192 608.667 95.1807 608.425 94.8944Z" fill="#354086" />
        <path fillRule="evenodd" clipRule="evenodd" d="M629.638 71.478C629.657 71.4666 630.4 71.393 630.953 70.6762C632.108 69.1803 632.149 70.8692 632.025 71.0657C630.201 73.9533 627.862 76.0194 627.44 76.3917L626.922 75.9694C627.555 74.6748 627.466 74.646 628.473 73.6471C629.254 72.873 628.765 72.5981 628.825 72.3818C629.096 72.0806 629.367 71.7792 629.638 71.478Z" fill="#374489" />
        <path fillRule="evenodd" clipRule="evenodd" d="M667.083 63.0208C669.016 62.3161 672.033 62.6205 674.523 61.0376C674.645 60.9598 676.597 59.7193 676.332 60.9273C676.266 61.2282 674.235 62.377 673.485 62.6643C671.244 63.5227 668.453 63.5989 668.008 63.611L667.084 63.0209L667.083 63.0208Z" fill="#503514" />
        <path fillRule="evenodd" clipRule="evenodd" d="M634.538 97.7393L633.755 98.2203C632.114 97.1108 632.299 96.9638 631.055 95.4709C629.1 93.1257 628.992 93.2334 628.906 92.9849C627.588 89.1635 633.919 97.0026 634.538 97.7393Z" fill="#364086" />
        <path fillRule="evenodd" clipRule="evenodd" d="M600.037 100.838C599.972 101.002 597.727 106.668 598.354 102.272C598.519 101.115 599.767 97.2119 599.906 96.7766C600.123 96.0976 600.761 96.1195 600.949 96.3298C601.576 97.0314 601.066 97.1214 600.037 100.838Z" fill="#364287" />
        <path fillRule="evenodd" clipRule="evenodd" d="M645.04 98.0392C644.902 98.5054 643.828 103.432 642.887 103.148C641.804 102.821 644.807 93.8229 645.294 96.6597C645.313 96.7703 645.275 96.762 645.04 98.0392H645.04Z" fill="#364287" />
        <path fillRule="evenodd" clipRule="evenodd" d="M622.279 100.36C622.206 100.591 620.91 104.695 620.454 102.781C620.312 102.187 622.428 94.1536 623.127 96.5701C623.349 97.3375 623.116 97.3143 622.279 100.36Z" fill="#364287" />
        <path fillRule="evenodd" clipRule="evenodd" d="M632.963 85.0287C632.914 85.1634 631.822 88.1625 631.507 86.0711C631.426 85.5354 633.462 77.6985 634.168 79.8903C634.389 80.5756 634.187 80.5642 632.963 85.0287Z" fill="#364187" />
        <path fillRule="evenodd" clipRule="evenodd" d="M631.85 117.628C633.062 113.348 632.977 113.322 633.216 113.021C635.153 110.583 633.734 115.544 633.673 115.758C633.615 115.959 630.89 125.49 631.85 117.628Z" fill="#364186" />
        <path fillRule="evenodd" clipRule="evenodd" d="M705.21 63.3633C705.007 63.6442 704.805 63.9252 704.602 64.2061C704.01 64.0352 697.94 62.2854 697.293 61.7509C694.988 59.848 701.718 62.2478 705.21 63.3633Z" fill="#452826" />
        <path fillRule="evenodd" clipRule="evenodd" d="M629.857 105.041C635.918 98.053 628.893 110.003 627.54 108.769C627.128 108.393 629.636 105.313 629.857 105.041Z" fill="#354086" />
        <path fillRule="evenodd" clipRule="evenodd" d="M608.495 104.116C609.067 103.46 609.053 103.453 609.113 103.407C612.149 101.12 607.12 108.363 606.18 108.769C603.322 110.001 608.318 104.34 608.495 104.116Z" fill="#354086" />
        <path fillRule="evenodd" clipRule="evenodd" d="M644.692 79.9521L644.507 81.3807C642.549 79.7495 639.929 76.3543 639.918 76.2867C639.439 73.2669 643.287 78.871 644.692 79.9521Z" fill="#364187" />
        <path fillRule="evenodd" clipRule="evenodd" d="M684.727 52.5967C684.88 52.7113 684.677 53.1292 687.273 53.6761L687.459 53.9578C687.507 55.2157 687.436 55.1894 687.925 56.3192C687.502 56.6144 687.079 56.9096 686.656 57.2048C684.868 54.152 684.094 54.2392 684.727 52.5968V52.5967Z" fill="#FE77B6" fillOpacity="0.99" />
        <path fillRule="evenodd" clipRule="evenodd" d="M643.08 87.1634C642.588 88.4932 642.646 88.4623 642.035 89.7608C641.796 89.77 641.74 89.2724 641.502 89.2816C641.456 89.2833 639.901 91.5011 639.512 91.8992C639.449 91.9635 637.434 92.7961 638.926 90.9394C641.669 87.5249 641.527 87.0308 643.08 87.1634Z" fill="#38458A" />
        <path fillRule="evenodd" clipRule="evenodd" d="M586.762 94.0758C589.284 95.6308 590.43 98.0811 590.195 98.3971C589.926 98.7605 589.49 98.8032 586.212 94.382L586.762 94.0758Z" fill="#364186" />
        <path fillRule="evenodd" clipRule="evenodd" d="M591.872 130.726C592.784 129.834 592.97 129.685 593.44 127.769C594.453 123.641 595.337 130.675 591.762 131.928C591.671 131.96 590.211 131.782 591.871 130.726L591.872 130.726Z" fill="#3D2729" />
        <path fillRule="evenodd" clipRule="evenodd" d="M584.188 73.9645C584.412 73.6211 586.786 69.9942 587.622 70.1546C588.072 70.2408 589.038 71.1939 584.365 74.854L584.188 73.9645Z" fill="#364188" />
        <path fillRule="evenodd" clipRule="evenodd" d="M653.475 126.511C657.382 130.692 655.377 131.482 654.98 131.387C654.163 131.19 655.51 129.663 653.02 127.423C652.926 127.34 650.864 125.485 652.643 125.902C652.643 125.902 653.408 126.463 653.475 126.511Z" fill="#3F292B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M619.525 88.0361L620.255 88.66C617.614 91.8591 617.663 91.8989 617.359 92.0899C615.705 93.1284 616.378 90.2636 619.525 88.0361Z" fill="#354086" />
        <path fillRule="evenodd" clipRule="evenodd" d="M630.332 61.3819C630.797 61.3867 631.262 61.3916 631.727 61.3964C634.665 64.6027 634.645 64.7619 634.468 65.0846C633.773 66.3584 631.715 63.0071 630.332 61.3819Z" fill="#364186" />
        <path fillRule="evenodd" clipRule="evenodd" d="M591.187 115.333C592.135 115.802 592.13 115.796 592.221 115.851C590.691 118.316 591.216 122.63 590.004 121.243C589.595 120.776 589.886 120.699 590.9 116.206C590.996 115.915 591.092 115.624 591.187 115.333Z" fill="#553917" />
        <path fillRule="evenodd" clipRule="evenodd" d="M655.005 44.6001L655.905 45.0443C655.753 45.4565 653.005 52.8732 653.108 49.7732C653.156 48.3301 654.477 45.9645 654.648 45.6576C654.776 45.4292 655.057 45.2944 655.141 45.0465C655.191 44.8991 654.956 44.7475 655.005 44.6001Z" fill="#4F1C29" />
        <path fillRule="evenodd" clipRule="evenodd" d="M597.226 88.5831C597.22 88.8367 597.589 89.0022 597.582 89.2557C597.565 89.9178 595.609 91.7619 595.407 91.952C594.864 92.4635 593.333 91.9353 594.926 90.6492C594.926 90.6492 595.357 89.6174 595.394 89.5277C596.005 89.2128 596.616 88.8979 597.226 88.583V88.5831Z" fill="#374389" />
        <path fillRule="evenodd" clipRule="evenodd" d="M620.601 111.086C622.858 113.429 623.872 114.675 623.234 115.078C623.001 115.226 622.833 115.332 620.525 112.94L620.601 111.086Z" fill="#374289" />
        <path fillRule="evenodd" clipRule="evenodd" d="M692.54 64.2023C692.555 64.5772 692.958 66.8676 692.958 66.8676C692.841 66.9859 692.614 66.9407 692.497 67.059C690.688 64.2102 690.79 60.1498 691.944 62.8438C692.242 63.539 692.231 63.4971 692.54 64.2023Z" fill="#5E4536" />
        <path fillRule="evenodd" clipRule="evenodd" d="M620.573 22.357C620.453 22.4147 617.165 23.9927 618.925 22.1028C620.688 20.21 625.109 21.9307 622.845 22.1893C622.027 22.2827 622.033 22.0914 620.573 22.357Z" fill="#531D28" />
        <path fillRule="evenodd" clipRule="evenodd" d="M663.698 44.389L663.863 44.8659C662.887 46.6071 662.424 45.6615 660.518 45.1179C662.318 43.1162 663.022 44.2468 663.698 44.389Z" fill="#210301" fillOpacity="0.99" />
        <path fillRule="evenodd" clipRule="evenodd" d="M651.274 130.12C650.801 129.142 650.878 129.157 650.365 128.241C649.347 126.423 651.833 127.628 652.297 130.1C652.88 133.208 651.3 130.198 651.274 130.12Z" fill="#56464B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M590.071 127.959C590.203 127.765 591.608 125.71 591.815 125.611C592.178 125.436 592.885 126.175 591.204 128.183C591.145 128.254 587.245 131.35 590.071 127.959Z" fill="#4C3A3D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M684.174 50.5831C684.032 50.6016 681.291 50.9583 682.495 49.9667C683.089 49.4775 683.351 50.1178 685.209 48.9667C686.224 48.3375 686.629 49.1675 685.975 49.6587C685.846 49.756 685.842 49.7272 684.174 50.5831Z" fill="#543916" />
        <path fillRule="evenodd" clipRule="evenodd" d="M587.908 81.9659C588.266 81.4485 588.473 81.5972 588.637 80.9141C588.661 80.8116 588.879 79.9051 589.15 79.701C589.356 79.5462 591.211 79.8501 588.824 82.9079C588.518 82.5938 588.213 82.2799 587.908 81.9659H587.908Z" fill="#384589" fillOpacity="0.96" />
        <path fillRule="evenodd" clipRule="evenodd" d="M585.466 105.414C586.771 103.642 586.66 103.579 587.181 103.321C589.421 102.213 586.272 106.295 586.107 106.508C585.894 106.143 585.68 105.778 585.466 105.414Z" fill="#3D4887" />
        <path fillRule="evenodd" clipRule="evenodd" d="M644.273 121.47C645.96 121.354 645.875 121.711 647.495 122.303C647.812 122.431 648.13 122.56 648.448 122.688C647.074 122.654 646.879 122.49 646.188 123.694C646.143 123.774 645.057 124.382 645.625 122.695C645.932 121.781 645.375 122.063 645.204 122.016C644.894 121.834 644.583 121.652 644.273 121.47Z" fill="#654E28" fillOpacity="0.96" />
        <path fillRule="evenodd" clipRule="evenodd" d="M593.635 116.662C594.632 118.205 594.799 118.113 595.189 119.933L595.067 120.372C594.691 119.474 594.708 119.52 594.373 118.6C593.895 118.132 591.121 117.946 592.813 117.31C593.31 117.123 593.201 117.004 593.635 116.662L593.635 116.662Z" fill="#635238" fillOpacity="0.96" />
        <path fillRule="evenodd" clipRule="evenodd" d="M631.221 27.8027C631.407 28.3014 631.671 28.2579 631.437 28.929C630.869 30.5567 631.209 31.0216 629.777 31.2006C630.364 28.7239 630.659 28.4197 631.221 27.8027Z" fill="#542E35" />
        <path fillRule="evenodd" clipRule="evenodd" d="M623.954 24.7202L623.728 25.0691C623.584 25.1165 614.437 27.5922 621.91 24.5512C621.986 24.52 622.499 24.3114 622.903 24.2614C624.096 24.114 623.835 24.6239 623.954 24.7202Z" fill="#4C1A24" />
        <path fillRule="evenodd" clipRule="evenodd" d="M743.861 106.92C744.002 107.166 744.142 107.412 744.282 107.658C743.764 107.958 741.852 109.255 741.442 109.023C741.219 108.896 740.977 108.406 743.861 106.92Z" fill="#5A3F18" fillOpacity="0.98" />
        <path fillRule="evenodd" clipRule="evenodd" d="M683.674 111.474L683.642 111.941C683.533 112.277 683.425 112.612 683.317 112.947C681.957 112.292 681.483 113.237 680.65 111.935C680.518 111.728 680.597 111.237 683.674 111.474Z" fill="#6A4D1E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M733.8 110.13L733.846 110.636C733.615 110.716 729.949 111.991 730.798 110.734C730.878 110.616 732.098 110.08 733.8 110.13Z" fill="#5A3F17" />
        <path fillRule="evenodd" clipRule="evenodd" d="M675.276 47.0213C675.785 50.8643 673.076 45.7023 674.001 45.6547C674.513 45.6283 675.204 46.8902 675.276 47.0213Z" fill="#4E3314" />
        <path fillRule="evenodd" clipRule="evenodd" d="M594.373 118.6C594.708 119.52 594.691 119.474 595.067 120.372L594.978 120.852C594.044 119.95 591.439 119.916 593.088 119.335C593.819 119.077 593.815 119.132 594.373 118.6Z" fill="#725826" fillOpacity="0.97" />
        <path fillRule="evenodd" clipRule="evenodd" d="M691.982 111.182C690.212 111.347 690.103 111.6 689.745 111.123C688.991 110.116 691.994 110.271 692.05 110.409C692.148 110.648 691.885 110.942 691.982 111.182Z" fill="#755923" />
        <path fillRule="evenodd" clipRule="evenodd" d="M685.543 127.798C685.72 127.851 687.653 128.432 687.673 128.686C687.689 128.891 687.513 130.052 685.141 128.27C685.275 128.113 685.409 127.955 685.543 127.798Z" fill="#5D3F18" fillOpacity="0.95" />
        <path fillRule="evenodd" clipRule="evenodd" d="M730.652 127.813C732.325 128.108 732.33 127.925 732.468 127.973C733.205 128.232 732.65 129.566 730.194 128.684C730.347 128.394 730.499 128.104 730.652 127.813Z" fill="#705722" fillOpacity="0.89" />
        <path fillRule="evenodd" clipRule="evenodd" d="M674.27 127.797C675.731 128.706 675.77 128.611 675.867 128.723C677.282 130.356 673.699 128.786 673.527 128.711C673.689 128.57 673.851 128.429 674.013 128.289L674.27 127.797H674.27Z" fill="#6E521E" fillOpacity="0.93" />
        <path fillRule="evenodd" clipRule="evenodd" d="M643.792 121.445L644.273 121.47C644.583 121.652 644.894 121.834 645.204 122.016C644.304 123.042 644.317 123.042 644.232 123.124C644.175 123.179 643.417 123.29 643.486 122.69C643.556 122.087 643.41 122.15 643.324 121.549L643.792 121.445Z" fill="#7B642B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M610.581 85.0903C610.565 85.2218 610.265 87.7248 608.959 85.4208C609.5 85.3106 610.04 85.2005 610.581 85.0903Z" fill="#38468A" />
        <path fillRule="evenodd" clipRule="evenodd" d="M632.663 27.6201C632.664 27.6217 633.102 27.8488 633.155 28.3985C633.634 33.3902 632.112 27.8485 632.097 27.7504L632.663 27.6201Z" fill="#44151E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M632.15 59.6846C632.63 59.7471 633.109 59.8096 633.588 59.8722C632.86 60.1045 632.959 60.329 632.2 60.315C631.34 60.299 631.456 60.0552 630.827 59.8357C631.268 59.7853 631.709 59.735 632.15 59.6846Z" fill="#48659B" fillOpacity="0.72" />
        <path fillRule="evenodd" clipRule="evenodd" d="M700.157 91.3055C699.17 91.6063 699.042 91.9395 698.799 91.478C698.703 91.2948 698.621 90.6294 701.32 90.9005C700.932 91.0355 700.544 91.1705 700.157 91.3055Z" fill="#6D5322" fillOpacity="0.92" />
        <path fillRule="evenodd" clipRule="evenodd" d="M747.328 125.733C747.217 124.901 747.015 124.654 747.825 124.462C750.8 123.759 747.423 125.679 747.328 125.733Z" fill="#6C521E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M596.907 87.3188C597.37 87.3382 597.833 87.3578 598.296 87.3772L598.573 87.7985C598.462 87.9207 598.453 87.9015 597.456 88.468C596.969 87.4299 596.979 87.4365 596.907 87.3188Z" fill="#1E2770" fillOpacity="0.18" />
        <path fillRule="evenodd" clipRule="evenodd" d="M689.763 45.5974C690.033 45.9717 690.302 46.3461 690.572 46.7203C690.156 46.8056 689.74 46.8909 689.324 46.9762C689.179 46.7437 689.464 46.7353 689.329 46.5193C689.308 46.4862 689.329 46.5193 688.942 46.2218C689.484 46.0545 689.454 46.0546 689.763 45.5972V45.5974Z" fill="#8C7E40" fillOpacity="0.24" />
        <path fillRule="evenodd" clipRule="evenodd" d="M588.997 118.587C587.775 117.496 588.912 117.515 588.998 117.52C589.804 117.569 589.508 117.973 588.997 118.587Z" fill="#1C1709" />
        <path fillRule="evenodd" clipRule="evenodd" d="M687.458 53.9575C687.703 54.3732 688.12 54.2889 687.925 56.3189C687.435 55.189 687.506 55.2153 687.458 53.9575Z" fill="#652A3E" fillOpacity="0.87" />
        <path fillRule="evenodd" clipRule="evenodd" d="M642.372 126.774C642.294 126.743 640.758 126.131 641.869 125.858C642.73 125.646 642.959 126.114 642.372 126.774Z" fill="#4B2E12" />
        <path fillRule="evenodd" clipRule="evenodd" d="M640.549 125.052C639.484 124.031 640.462 124.034 640.543 124.038C641.351 124.073 641.153 124.523 640.549 125.052Z" fill="#161207" />
        <path fillRule="evenodd" clipRule="evenodd" d="M673.049 48.0119C671.885 46.5471 673.406 47.0929 673.462 47.1456C673.86 47.5208 673.512 47.5218 673.049 48.0119Z" fill="#181307" />
        <path fillRule="evenodd" clipRule="evenodd" d="M589.922 116.2C588.218 115.891 589.375 115.286 589.457 115.272C590.126 115.154 589.9 115.511 589.922 116.2Z" fill="#2B1B0B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M623 32.6108C623.253 32.7985 623.507 32.9862 623.76 33.1738C623.434 33.2877 623.747 33.566 623.41 33.6837C623.326 33.7134 623.339 33.6458 622.419 33.1588C622.613 32.9762 622.806 32.7934 623 32.6108Z" fill="#CF6090" />
        <path fillRule="evenodd" clipRule="evenodd" d="M646.579 133.077C647.513 133.008 647.463 133.037 648.449 133.091C647.491 133.255 647.513 133.251 646.579 133.077Z" fill="#7C737B" fillOpacity="0.85" />
        <path fillRule="evenodd" clipRule="evenodd" d="M683.641 111.942C683.568 112.746 683.548 112.697 683.263 113.406L683.316 112.948C683.424 112.612 683.533 112.277 683.641 111.942Z" fill="#543C16" fillOpacity="0.79" />
        <path fillRule="evenodd" clipRule="evenodd" d="M619.711 8.9132L620.065 9.35811C620.123 9.65621 620.181 9.95441 620.239 10.2525C620.063 9.80604 619.887 9.35956 619.711 8.91309L619.711 8.9132Z" fill="#4F3917" fillOpacity="0.71" />
        <path fillRule="evenodd" clipRule="evenodd" d="M706.512 89.7386C707.185 89.5125 707.142 89.4959 707.852 89.5674L706.512 89.7386Z" fill="#7E6720" fillOpacity="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M680.99 123.634L680.8 124.965C680.735 124.284 680.746 124.328 680.99 123.634Z" fill="#80681E" fillOpacity="0.79" />
        <path fillRule="evenodd" clipRule="evenodd" d="M684.654 111.552C684.644 112.017 684.635 112.483 684.625 112.948C684.477 112.239 684.481 112.256 684.654 111.552Z" fill="#998834" fillOpacity="0.35" />
        <path fillRule="evenodd" clipRule="evenodd" d="M626.613 59.5889L628.004 59.6643C627.291 59.7726 627.326 59.7729 626.613 59.5889Z" fill="#8E70AB" />
        <path d="M621.881 10.5772C622.862 10.2298 623.062 10.6476 623.336 11.4457L635.56 11.5349L636.225 12.4832C637.206 13.5067 637.536 13.5865 637.206 12.718C637.02 11.2908 637.992 11.1406 638.638 12.4316C639.298 12.8541 639.642 12.84 639.666 12.3893C640 11.2579 641.535 11.3988 642.372 11.9246C642.646 11.6241 643.195 11.3424 643.506 11.4645C643.953 11.6382 644.273 12.2391 644.264 12.7884C644.218 15.4033 642.214 16.8305 640.038 16.469L633.849 13.4973C632.036 13.2344 629.981 14.7883 627.912 14.07C627.182 13.8165 626.238 14.4362 625.973 14.8587C624.968 16.4737 626.21 19.3374 624.262 20.3468C624.234 20.8303 624.076 20.9618 623.792 20.7505C621.69 20.8068 619.877 19.5721 618.645 17.976L617.92 17.037C617.599 16.6192 617.724 15.9197 618.371 15.7836C619.11 15.6286 619.951 16.0089 620.556 15.5394C620.621 15.2108 620.212 14.7742 619.342 14.2296C618.259 13.2344 617.864 12.2954 618.166 11.4082L620.049 11.9011L620.3 11.5772C619.403 10.3613 619.315 9.50214 620.035 8.99512L621.872 10.5866L621.881 10.5772Z" fill="#EDD659" />
        <path d="M618.171 11.3983C618.705 13.802 620.556 14.9897 623.22 16.0225C622.16 16.7878 621.253 15.8347 620.561 15.5343C619.082 14.8911 618.013 13.3325 617.385 11.6847C617.301 11.4406 617.822 11.3091 618.171 11.403V11.3983Z" fill="#301509" />
        <path d="M637.211 12.7176C638.508 15.1776 639.917 14.619 642.423 14.3326C641.605 15.6048 639.81 15.403 638.387 14.8255C637.55 14.4875 636.546 13.5908 636.225 12.4829C636.565 12.4829 636.895 12.5815 637.206 12.7176H637.211Z" fill="#3F2411" />
        <path d="M624.968 13.7179C623.862 14.7273 622.481 14.4127 621.867 13.4363C622.899 13.2203 623.713 12.9668 624.968 13.7179Z" fill="#735724" />
        <path d="M624.192 18.2338C623.643 19.0366 622.286 19.4356 621.137 18.4169C622.062 17.7878 622.816 17.769 624.192 18.2338Z" fill="#5F431C" />
        <path d="M641.484 9.01365C635.886 9.30942 629.818 9.27655 624.057 9.0606C623.955 9.0606 623.857 8.84934 623.76 8.58644C624.099 5.84008 625.369 2.39421 628.233 0.896617C631.306 -0.713645 635.825 -0.070479 638.443 2.15009C640.545 3.93405 641.163 6.68981 641.484 9.01365Z" fill="#4E6FAA" />
        <path d="M623.271 9.1076C629.395 9.01371 635.49 9.14046 641.549 9.48787C642.59 9.75077 642.548 10.9995 642.376 11.9197C641.688 12.6661 640.591 12.6239 639.67 12.3845C639.68 13.2483 639.201 12.9384 638.643 12.4267C638.155 12.4455 637.643 12.4737 637.211 12.7131C636.96 13.1497 636.63 13.0699 636.23 12.4784L623.299 12.3422C622.318 12.3328 622.29 10.9291 621.881 10.577C621.839 10.0888 621.955 9.59115 622.351 9.30947C622.583 9.14516 622.96 9.08882 623.271 9.1076Z" fill="#4E6FAA" />
        <path d="M641.484 9.01334L641.549 9.4875L623.792 9.52975C623.462 9.52975 623.244 9.32788 623.271 9.10723L623.76 8.59082L632.78 8.85372L641.484 9.01803V9.01334Z" fill="#2D1E2C" />
        <path d="M639.67 12.3843C639.67 12.6988 640.028 13.1401 640.345 13.1073C640.605 13.0791 641.302 12.5955 641.632 13.342C640.498 14.3701 639.098 13.5345 638.647 12.4265L639.675 12.3843H639.67Z" fill="#40291C" />
        <path d="M640.042 16.4687L640 17.4875C639.512 17.5485 639.377 17.8818 639.6 18.4827C638.912 20.8629 637.869 23.4991 636.27 25.4474C636.224 25.8981 632.887 28.5364 632.298 28.5364C631.71 28.5364 631.71 28.6835 631.161 28.2992L629.901 31.6324C630.799 32.8624 628.753 33.5901 627.693 33.7309C623.699 34.252 618.501 28.0551 623.383 25.5294C622.992 25.2993 623.127 25.1397 623.797 25.0505C622.676 24.0881 623.415 23.2713 624.652 24.0881L625.047 24.1163C624.168 22.8347 623.908 21.5765 624.266 20.3418C624.02 20.032 624.034 19.7174 624.075 19.3559C624.15 18.694 624.661 15.619 624.829 15.1683C625.647 12.9618 627.191 13.0557 629.218 13.3327C632.607 12.3844 635.43 12.9102 637.689 14.9054C639.089 15.2669 639.87 15.788 640.037 16.4687H640.042Z" fill="#FEE8E8" />
        <path d="M640 17.4878C640.256 17.5254 640.54 17.915 640.419 18.1263C640.27 18.3986 639.801 18.4549 639.601 18.4831C639.345 17.9197 638.22 17.9854 637.727 17.807C637.55 16.6897 639.456 16.8212 640 17.4878Z" fill="#5A3F3E" />
        <path d="M634.044 22.7175C634.732 22.5954 635.188 22.8301 635.788 23.1869L635.964 17.9712H636.639L636.736 22.6471C636.755 23.4217 636.02 23.6282 635.606 23.6423C635.007 23.6658 634.43 23.8113 634.04 22.7175H634.044Z" fill="#634746" />
        <path d="M624.652 24.0832C624.066 23.0222 623.559 21.9566 623.797 20.7407C623.834 20.5623 624.117 20.4167 624.266 20.3369C624.406 23.4401 626.335 25.839 629.106 28.0784C626.842 27.853 625.577 25.7733 624.647 24.0832H624.652Z" fill="#4C2E30" />
        <path d="M632.961 24.8392C632.64 26.4307 630.274 24.3885 629.865 23.2853C629.623 22.6374 629.865 21.9802 630.725 21.7173C630.557 23.229 630.939 24.2946 632.957 24.8345L632.961 24.8392Z" fill="#654B4B" />
        <path d="M629.901 31.6276C629.864 30.3131 630.329 29.1113 631.162 28.2944C631.059 29.3648 630.976 31.2051 629.901 31.6276Z" fill="#582F36" />
        <path d="M635.183 16.3091C633.76 16.5157 632.905 16.187 631.603 16.511C632.282 15.3467 634.091 15.0415 635.183 16.3091Z" fill="#503332" />
        <path d="M626.284 16.3279C626.633 15.9946 627.251 15.5673 627.051 14.6284C627.791 14.9852 627.442 15.5767 627.507 15.8631C627.674 16.5814 626.656 16.9804 626.284 16.3279Z" fill="#3F2727" />
        <path d="M638.633 19.4406C638.918 19.4406 639.149 19.2073 639.149 18.9195C639.149 18.6317 638.918 18.3984 638.633 18.3984C638.348 18.3984 638.117 18.6317 638.117 18.9195C638.117 19.2073 638.348 19.4406 638.633 19.4406Z" fill="#654847" />
        <path d="M633.584 18.0368C633.836 18.0368 634.04 17.8309 634.04 17.5768C634.04 17.3227 633.836 17.1167 633.584 17.1167C633.332 17.1167 633.128 17.3227 633.128 17.5768C633.128 17.8309 633.332 18.0368 633.584 18.0368Z" fill="#6F5655" />
        <path fillRule="evenodd" clipRule="evenodd" d="M618.666 17.6157C621.461 18.5452 620.908 19.8853 623.865 20.1615C623.866 20.4524 623.873 21.7302 624.865 23.6587C624.279 24.0979 624.276 24.0628 623.954 24.72C623.836 24.6237 624.096 24.1137 622.903 24.2612C622.499 24.3112 621.987 24.5198 621.91 24.551C614.437 27.592 623.585 25.1163 623.728 25.0689C623.681 25.1514 622.732 27.0195 622.562 27.5153C622.299 28.2838 624.505 31.4795 625.205 31.6938C628.25 32.6253 629.509 31.4519 629.778 31.201C631.209 31.0219 630.869 30.557 631.437 28.9293C631.672 28.2582 631.407 28.3016 631.222 27.8031C631.514 27.7857 631.806 27.7683 632.098 27.7509C632.113 27.849 633.635 33.3905 633.155 28.3989C633.103 27.8493 632.665 27.6221 632.664 27.6206C634.872 26.8549 634.595 26.4302 636.593 25.1871C638.201 27.9715 637.801 28.1484 636.797 31.1743C635.252 32.3819 635.531 32.6496 633.928 33.8088C632.072 35.1515 631.161 35.7854 630.576 33.5515C630.348 32.6806 629.376 32.7361 629.545 33.9697C629.742 35.4035 628.649 34.8532 626.616 34.4434C624.155 33.9473 624.356 30.5194 623 32.6112C622.807 32.7938 622.613 32.9765 622.419 33.1591C617.989 30.4867 616.789 28.9668 613.132 22.3656C614.157 19.4327 614.826 18.0109 618.666 17.6159L618.666 17.6157Z" fill="#FE76B1" />
        <path d="M48.864 84.728C48.864 88.312 48 91.672 46.272 94.808C44.608 97.944 41.952 100.472 38.304 102.392C34.72 104.312 30.176 105.272 24.672 105.272H13.44V131H-2.28882e-05V63.992H24.672C29.856 63.992 34.272 64.888 37.92 66.68C41.568 68.472 44.288 70.936 46.08 74.072C47.936 77.208 48.864 80.76 48.864 84.728ZM24.096 94.424C27.808 94.424 30.56 93.592 32.352 91.928C34.144 90.2 35.04 87.8 35.04 84.728C35.04 78.2 31.392 74.936 24.096 74.936H13.44V94.424H24.096ZM107.846 103.256C107.846 105.176 107.718 106.904 107.462 108.44H68.5822C68.9022 112.28 70.2462 115.288 72.6142 117.464C74.9822 119.64 77.8942 120.728 81.3502 120.728C86.3422 120.728 89.8942 118.584 92.0062 114.296H106.502C104.966 119.416 102.022 123.64 97.6702 126.968C93.3182 130.232 87.9742 131.864 81.6382 131.864C76.5182 131.864 71.9102 130.744 67.8142 128.504C63.7822 126.2 60.6142 122.968 58.3102 118.808C56.0702 114.648 54.9502 109.848 54.9502 104.408C54.9502 98.904 56.0702 94.072 58.3102 89.912C60.5502 85.752 63.6862 82.552 67.7182 80.312C71.7502 78.072 76.3902 76.952 81.6382 76.952C86.6942 76.952 91.2062 78.04 95.1742 80.216C99.2062 82.392 102.31 85.496 104.486 89.528C106.726 93.496 107.846 98.072 107.846 103.256ZM93.9262 99.416C93.8622 95.96 92.6142 93.208 90.1822 91.16C87.7502 89.048 84.7742 87.992 81.2542 87.992C77.9262 87.992 75.1102 89.016 72.8062 91.064C70.5662 93.048 69.1902 95.832 68.6782 99.416H93.9262ZM133.304 88.856V114.584C133.304 116.376 133.72 117.688 134.552 118.52C135.448 119.288 136.92 119.672 138.968 119.672H145.208V131H136.76C125.432 131 119.768 125.496 119.768 114.488V88.856H113.432V77.816H119.768V64.664H133.304V77.816H145.208V88.856H133.304ZM174.486 97.4C174.486 90.808 175.958 84.92 178.902 79.736C181.91 74.488 185.974 70.424 191.094 67.544C196.278 64.6 202.07 63.128 208.47 63.128C215.958 63.128 222.518 65.048 228.15 68.888C233.782 72.728 237.718 78.04 239.958 84.824H224.502C222.966 81.624 220.79 79.224 217.974 77.624C215.222 76.024 212.022 75.224 208.374 75.224C204.47 75.224 200.982 76.152 197.91 78.008C194.902 79.8 192.534 82.36 190.806 85.688C189.142 89.016 188.31 92.92 188.31 97.4C188.31 101.816 189.142 105.72 190.806 109.112C192.534 112.44 194.902 115.032 197.91 116.888C200.982 118.68 204.47 119.576 208.374 119.576C212.022 119.576 215.222 118.776 217.974 117.176C220.79 115.512 222.966 113.08 224.502 109.88H239.958C237.718 116.728 233.782 122.072 228.15 125.912C222.582 129.688 216.022 131.576 208.47 131.576C202.07 131.576 196.278 130.136 191.094 127.256C185.974 124.312 181.91 120.248 178.902 115.064C175.958 109.88 174.486 103.992 174.486 97.4ZM247.981 104.216C247.981 98.84 249.037 94.072 251.149 89.912C253.325 85.752 256.237 82.552 259.885 80.312C263.597 78.072 267.725 76.952 272.269 76.952C276.237 76.952 279.693 77.752 282.637 79.352C285.645 80.952 288.045 82.968 289.837 85.4V77.816H303.373V131H289.837V123.224C288.109 125.72 285.709 127.8 282.637 129.464C279.629 131.064 276.141 131.864 272.173 131.864C267.693 131.864 263.597 130.712 259.885 128.408C256.237 126.104 253.325 122.872 251.149 118.712C249.037 114.488 247.981 109.656 247.981 104.216ZM289.837 104.408C289.837 101.144 289.197 98.36 287.917 96.056C286.637 93.688 284.909 91.896 282.733 90.68C280.557 89.4 278.221 88.76 275.725 88.76C273.229 88.76 270.925 89.368 268.813 90.584C266.701 91.8 264.973 93.592 263.629 95.96C262.349 98.264 261.709 101.016 261.709 104.216C261.709 107.416 262.349 110.232 263.629 112.664C264.973 115.032 266.701 116.856 268.813 118.136C270.989 119.416 273.293 120.056 275.725 120.056C278.221 120.056 280.557 119.448 282.733 118.232C284.909 116.952 286.637 115.16 287.917 112.856C289.197 110.488 289.837 107.672 289.837 104.408ZM329.94 86.072C331.668 83.256 333.908 81.048 336.66 79.448C339.476 77.848 342.676 77.048 346.26 77.048V91.16H342.708C338.484 91.16 335.284 92.152 333.108 94.136C330.996 96.12 329.94 99.576 329.94 104.504V131H316.5V77.816H329.94V86.072ZM404.752 103.256C404.752 105.176 404.624 106.904 404.368 108.44H365.488C365.808 112.28 367.152 115.288 369.52 117.464C371.888 119.64 374.8 120.728 378.256 120.728C383.248 120.728 386.8 118.584 388.912 114.296H403.408C401.872 119.416 398.928 123.64 394.576 126.968C390.224 130.232 384.88 131.864 378.544 131.864C373.424 131.864 368.816 130.744 364.72 128.504C360.688 126.2 357.52 122.968 355.216 118.808C352.976 114.648 351.856 109.848 351.856 104.408C351.856 98.904 352.976 94.072 355.216 89.912C357.456 85.752 360.592 82.552 364.624 80.312C368.656 78.072 373.296 76.952 378.544 76.952C383.6 76.952 388.112 78.04 392.08 80.216C396.112 82.392 399.216 85.496 401.392 89.528C403.632 93.496 404.752 98.072 404.752 103.256ZM390.832 99.416C390.768 95.96 389.52 93.208 387.088 91.16C384.656 89.048 381.68 87.992 378.16 87.992C374.832 87.992 372.016 89.016 369.712 91.064C367.472 93.048 366.096 95.832 365.584 99.416H390.832ZM483.037 63.992V74.84H465.181V131H451.741V74.84H433.885V63.992H483.037ZM499.66 71.48C497.292 71.48 495.308 70.744 493.708 69.272C492.172 67.736 491.404 65.848 491.404 63.608C491.404 61.368 492.172 59.512 493.708 58.04C495.308 56.504 497.292 55.736 499.66 55.736C502.028 55.736 503.98 56.504 505.516 58.04C507.116 59.512 507.916 61.368 507.916 63.608C507.916 65.848 507.116 67.736 505.516 69.272C503.98 70.744 502.028 71.48 499.66 71.48ZM506.284 77.816V131H492.844V77.816H506.284ZM533.002 85.496C534.73 83.064 537.098 81.048 540.106 79.448C543.178 77.784 546.666 76.952 550.57 76.952C555.114 76.952 559.21 78.072 562.858 80.312C566.57 82.552 569.482 85.752 571.594 89.912C573.77 94.008 574.858 98.776 574.858 104.216C574.858 109.656 573.77 114.488 571.594 118.712C569.482 122.872 566.57 126.104 562.858 128.408C559.21 130.712 555.114 131.864 550.57 131.864C546.666 131.864 543.21 131.064 540.202 129.464C537.258 127.864 534.858 125.848 533.002 123.416V156.344H519.562V77.816H533.002V85.496ZM561.13 104.216C561.13 101.016 560.458 98.264 559.114 95.96C557.834 93.592 556.106 91.8 553.93 90.584C551.818 89.368 549.514 88.76 547.018 88.76C544.586 88.76 542.282 89.4 540.106 90.68C537.994 91.896 536.266 93.688 534.922 96.056C533.642 98.424 533.002 101.208 533.002 104.408C533.002 107.608 533.642 110.392 534.922 112.76C536.266 115.128 537.994 116.952 540.106 118.232C542.282 119.448 544.586 120.056 547.018 120.056C549.514 120.056 551.818 119.416 553.93 118.136C556.106 116.856 557.834 115.032 559.114 112.664C560.458 110.296 561.13 107.48 561.13 104.216ZM604.977 131.864C600.625 131.864 596.721 131.096 593.265 129.56C589.809 127.96 587.057 125.816 585.009 123.128C583.025 120.44 581.937 117.464 581.745 114.2H595.281C595.537 116.248 596.529 117.944 598.257 119.288C600.049 120.632 602.257 121.304 604.881 121.304C607.441 121.304 609.425 120.792 610.833 119.768C612.305 118.744 613.041 117.432 613.041 115.832C613.041 114.104 612.145 112.824 610.353 111.992C608.625 111.096 605.841 110.136 602.001 109.112C598.033 108.152 594.769 107.16 592.209 106.136C589.713 105.112 587.537 103.544 585.681 101.432C583.889 99.32 582.993 96.472 582.993 92.888C582.993 89.944 583.825 87.256 585.489 84.824C587.217 82.392 589.649 80.472 592.785 79.064C595.985 77.656 599.729 76.952 604.017 76.952C610.353 76.952 615.409 78.552 619.185 81.752C622.961 84.888 625.041 89.144 625.425 94.52H612.561C612.369 92.408 611.473 90.744 609.873 89.528C608.337 88.248 606.257 87.608 603.633 87.608C601.201 87.608 599.313 88.056 597.969 88.952C596.689 89.848 596.049 91.096 596.049 92.696C596.049 94.488 596.945 95.864 598.737 96.824C600.529 97.72 603.313 98.648 607.089 99.608C610.929 100.568 614.097 101.56 616.593 102.584C619.089 103.608 621.233 105.208 623.025 107.384C624.881 109.496 625.841 112.312 625.905 115.832C625.905 118.904 625.041 121.656 623.313 124.088C621.649 126.52 619.217 128.44 616.017 129.848C612.881 131.192 609.201 131.864 604.977 131.864Z" fill="#55A7E0" />
      </svg>
    </div>
  );
}

function PetCare() {
  return (
    <div className="absolute inset-0 translate-y-[110px]" data-name="Pet care">
      <Button2 />
      <PetCareTipsHeader />
      <Group83 />
      <Group85 />
      <Group86 />
      <Group87 />
      <Group88 />
    </div>
  );
}

function AdoptNowButton() {
  const navigate = useNavigate();
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[1700px] z-[50] flex items-center justify-center pointer-events-auto">
      <button onClick={() => navigate("/available-pets")} className="group flex items-center gap-[12px] rounded-full bg-white pl-5 pr-1.5 py-1 text-[20px] font-semibold text-[#4cbfff] shadow-[0px_4px_8px_rgba(76,191,255,0.38)] border-b-[0.5px] border-[rgba(0,106,255,0.37)] transition-transform hover:scale-105 active:scale-95">
        <span className="leading-[24px]">Adopt Now</span>
        <Component77951261HandDrawnPaintPawPrint />
      </button>
    </div>
  );
}

export default function LandingPage({ onHeightChange }: { onHeightChange?: (height: number) => void }) {
  const [faqExtraHeight, setFaqExtraHeight] = useState(0);

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(5361 + faqExtraHeight);
    }
  }, [faqExtraHeight, onHeightChange]);

  return (
    <div className="relative w-[1440px] mx-auto overflow-hidden bg-transparent transition-all duration-300" style={{ height: 5361 + faqExtraHeight }} data-name="pet adoption landing page">
      <Group8 />
      <Button />
      <AdoptNowButton />
      <HeroSection />
      <div className="absolute h-[104.478px] left-[-0.16px] top-[1026.99px] w-[1441.295px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1441.3 104.478">
          <path d={svgPaths.p3cd28c00} fill="var(--fill-0, #070707)" id="Union" />
        </svg>
      </div>
      <HowItWorks />
      <PetFootpeint />
      <Faq setFaqExtraHeight={setFaqExtraHeight} />
      <PetCare />
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

// ─── Exported nav bar for reuse on other pages ───────────────────────────────
export function LandingNavBar({ activePage = "home" }: { activePage?: "home" | "available-pets" | "about" }) {
  const navigate = useNavigate();

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: active ? "'Poppins',sans-serif" : "Inter,sans-serif",
    fontWeight: active ? 500 : 200,
    fontSize: 18,
    color: active ? "#4cbfff" : "rgba(0,0,0,0.75)",
    textDecoration: active ? "underline" : "none",
    textDecorationColor: "#4cbfff",
    cursor: "pointer",
    letterSpacing: -0.45,
    background: "none",
    border: "none",
    padding: 0,
    lineHeight: "28px",
    transition: "color 0.2s",
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px 0",
      }}
    >
      <nav
        style={{
          width: "min(1260px, 94vw)",
          background: "rgba(255,255,255,0.93)",
          borderRadius: 49,
          boxShadow: "0 4px 17px rgba(76,191,255,0.18)",
          border: "1px solid rgba(76,191,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 62,
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo — matches Group15 / Frame1 from Figma */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div className="absolute flex inset-[6.45%_91.03%_48.99%_6.78%] items-center justify-center translate-x-[-9px] translate-y-[1px]" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-47.9747cqw,52.0253cqh)] rotate-[42.68deg] w-[hypot(52.0253cqw,47.9747cqh)]">
              <Group10 />
            </div>
          </div>
          <span style={{ fontFamily: "'Times New Roman',serif", color: "#4CBFFF", fontSize: 34, fontWeight: 400, letterSpacing: -1, lineHeight: "48px" }}>Paw</span>
        </div>

        {/* Nav links — matches Container from Figma */}
        <div style={{ display: "flex", gap: 54, alignItems: "center" }}>
          <button onClick={() => navigate("/")} style={linkStyle(activePage === "home")}>Home</button>
          <button onClick={() => navigate("/available-pets")} style={linkStyle(activePage === "available-pets")}>Available Pets</button>
          <button style={linkStyle(activePage === "about")}>About Us</button>
        </div>

        {/* Contact Us — matches Button1 from Figma */}
        <button
          style={{
            background: "#000", color: "#f1f2ff",
            fontFamily: "Inter,sans-serif", fontWeight: 700,
            fontSize: 14, padding: "9px 24px",
            borderRadius: 9999, border: "none", cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}