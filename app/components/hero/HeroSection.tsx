'use client';
import React, { useState } from "react";
import Image from "next/image";
import { TextComponent } from "./TextComponent";
import AnimatedButton from "./../AnimatedButton/AnimatedButton";
import Problem from "./Problem";
import Solution from "./Solution";
function HeroSection({ handleModalOpen }: { handleModalOpen: () => void }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"problem" | "solution" | null>(null);
  const openModal = (type: "problem" | "solution") => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };
  return (
    <div className="w-full max-w-[1920px] mx-auto mb-40">
      <TextComponent />

      {/* Mobile CTA Button */}
      <div className="flex justify-center mb-10 md:hidden">
        <AnimatedButton onClick={handleModalOpen}>Join Waitlist</AnimatedButton>
      </div>

      {/* Desktop Hero Content */}
      <div className="relative w-full h-[70vh] items-center gap-5 px-10 hidden lg:flex justify-around">
        {/* Background Image */}
        <Image
          src="/hero/color_background.png"
          alt="background"
          width={900}
          height={900}
          layout="responsive"
          className="absolute inset-0 w-full h-full object-cover z-[-1] mt-10"
        />

        {/* Right Side Animated Icons */}
        <div className="absolute top-1/3 2xl:top-1/2 right-30 2xl:right-60">
          <Image
            src="/hero/icons/digital.svg"
            alt="digital"
            width={296.77}
            height={139}
            className="w-60 h-fit relative -left-5"
          />
          <Image
            src="/hero/icons/smart.svg"
            alt="smart"
            width={132}
            height={25}
            className="h-fit relative left-45 bottom-25 animate-bounce duration-1000"
          />
          <Image
            src="/hero/icons/seo.svg"
            alt="seo"
            width={170}
            height={26}
            className="mt-2 h-fit relative left-60 bottom-12 animate-bounce duration-1000"
          />
          <Image
            src="/hero/icons/ai.svg"
            alt="ai"
            width={373}
            height={38}
            className="h-fit mt-2 relative left-2 bottom-5"
          />
        </div>

        {/* Left Side Error/Problem Highlights */}
        <div className="absolute top-1/3 2xl:top-1/2 left-30 2xl:left-32">
          {/* Main Banner */}
          <div className="flex items-center bg-[#FFFFFF80] w-[403px] h-[38px] justify-center rounded-4xl">
            <p className="text-center text-sm font-semibold">
              Missed follow-ups & poor contact management
            </p>
            <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
          </div>

          {/* Warning Label */}
          <Image
            src="/hero/icons/warring.svg"
            alt="warning"
            width={265.65}
            height={66.61}
            className="h-fit relative left-1/6 mt-5 animate-fade-in-right duration-1000 delay-200"
          />

          {/* Problem Boxes */}
          <div className="flex flex-col items-center relative left-85 bottom-10 bg-[#FFFFFF80] w-[171px] h-[100.46px] justify-center rounded-[20px]">
            <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className="text-center text-xs font-medium">
              Limited networking <br />
              and outdated contact <br />
              methods
            </p>
          </div>

          <div className="flex flex-col items-center relative left-15 bottom-18 bg-[#FFFFFF80] w-[171px] h-[86.46px] rounded-[20px]">
            <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className="text-center text-xs font-medium">
              Awkward interactions <br />
              and social anxiety
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Background */}
      {/* Mobile Background with Buttons */}
<div className="relative block lg:hidden w-full">
  {/* Background Image */}
  <Image
    src="/hero/Mobile_bg.svg"
    alt="mobile background"
    width={900}
    height={900}
    layout="responsive"
    className="w-full h-auto object-cover"
  />

  {/* Left Button */}
  <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
  <button className="text-[9.5px] bg-[#FFD2CF] text-black px-2 py-1 rounded-sm"             onClick={() => openModal("problem")}  >Problem</button>
  </div>

  {/* Right Button */}
  <div className="absolute top-1/2 right-1 transform -translate-y-1/2">
  <button className="text-[9.5px] bg-[#B3E8D8] text-black px-2 py-1 rounded-sm"             onClick={() => openModal("solution")}
  >Solution</button>
  </div>
</div>
{modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="relative">
  {modalType === "problem" && <Problem closeModal={closeModal} />}
  {modalType === "solution" && <Solution closeModal={closeModal} />}
</div>
        </div>
      )}

    </div>
  );
}

export { HeroSection };
