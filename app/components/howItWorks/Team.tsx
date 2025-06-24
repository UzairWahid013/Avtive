import React from 'react';
import { GradientHeading } from '../headings/GradientHeading';
import Image from 'next/image';

const Team = () => {
  return (
    <>
    <div className="hidden md:block w-full h-100 my-10 relative">
      <div className="absolute left-32 top-10 flex justify-center items-center w-[236px] h-[60px] border border-dashed rounded-[10px]">
        <h1 className="text-lg bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-normal text-[18px] leading-[25px]">
          Sign-Up or Register
        </h1>
      </div>

      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-61.5 top-30" />
      <Image src="/howItWorks/path1.svg" width={180} height={72} alt="Team" className="absolute left-62 top-30" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-106 top-47" />

      <div className="absolute left-110 top-40.5 w-[164px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3;]">
        <h1 className="font-bold text-[20px] leading-[24px] text-[#0A3E94]">Dashboard</h1>
      </div>

      <Image src="/howItWorks/path2.svg" width={180} height={72} alt="Team" className="absolute left-152 top-16" />
      <Image src="/howItWorks/arrowright.svg" width={8} height={6} alt="Team" className="absolute left-197 top-14.5" />

      <div className="absolute left-204 top-8.5 w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Customize Your Card
        </h1>
      </div>

      <Image src="/howItWorks/path3.svg" width={280.00042724609375} height={178} alt="Team" className="absolute left-129 top-20" />
      <div className="absolute left-212 top-27 text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Select templates, themes, and styles that fit your brand.
        </p>
      </div>

      <div className="absolute left-204 top-56 w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Create Your Profile
        </h1>
      </div>
      <div className="absolute left-212 top-75 text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Sign up and add your personal, professional, and social details.
        </p>
      </div>

      <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Team" className="absolute left-129 top-63" />
      <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Team" className="absolute left-149 top-63" />
      <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Team" className="absolute left-169 top-63" />
      <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Team" className="absolute left-127.5 top-71" />
      <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Team" className="absolute left-147.5 top-71" />
      <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Team" className="absolute left-167.5 top-71" />

      <div className="absolute left-120.5 top-75 w-[68px] h-[32px] rounded-[5px] bg-[#E3F3EF] flex items-center justify-center">
        <h1 className="font-inter font-bold text-[12px] leading-[24px]">Role 1</h1>
      </div>
      <div className="absolute left-140.5 top-75 w-[68px] h-[32px] rounded-[5px] bg-[#EEF4FF] flex items-center justify-center">
        <h1 className="font-inter font-bold text-[12px] leading-[24px]">Role 2</h1>
      </div>
      <div className="absolute left-160.5 top-75 w-[68px] h-[32px] rounded-[5px] border-1 flex items-center justify-center">
        <h1 className="font-inter font-bold text-[12px] leading-[24px]">+</h1>
      </div>

      <Image src="/howItWorks/path5.svg" width={269} height={123} alt="Team" className="absolute left-129 top-63" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-196 top-62.5" />

      <Image src="/howItWorks/path6.svg" width={2} height={27} alt="Team" className="absolute left-129 top-86.5" />
      <Image src="/howItWorks/path6.svg" width={2} height={27} alt="Team" className="absolute left-149 top-86.5" />
      <Image src="/howItWorks/path6.svg" width={2} height={27} alt="Team" className="absolute left-169 top-86.5" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-128.5 top-85" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-148.5 top-85" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-168.5 top-85" />

      <div className="absolute left-308 top-35 w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Share & Stay Connected
        </h1>
      </div>
      <div className="absolute left-314 top-53 text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Share instantly via tap or scan.
          Avtive handles reminders and follow-ups.
        </p>
      </div>
      <Image src="/howItWorks/path7.svg" width={92} height={84} alt="Team" className="absolute left-282 top-42.5" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-281 top-62.5" />
      <Image src="/howItWorks/circle.svg" width={7} height={7} alt="Team" className="absolute left-304 top-41.5" />
    </div>


    {/* --- Mobile Layout --- */}


    <div className="block md:hidden flex flex-col items-center gap-2 px-4 my-10">
    {/* Step 1 */}
    <div className="flex justify-center items-center w-[236px] h-[60px] border border-dashed rounded-[10px]">
        <h1 className="text-lg bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-normal text-[18px] leading-[25px]">
          Sign-Up or Register
        </h1>
      </div>
      <Image src="/howItWorks/path8.svg" width={7} height={76} alt="Team" className="" />
        <div className="w-[164px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3;]">
        <h1 className="font-bold text-[20px] leading-[24px] text-[#0A3E94]">Dashboard</h1>
      </div>
      <Image src="/howItWorks/path9.svg" width={7} height={36} alt="Team" className="my-2" />
      <div className="w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Customize Your Card
        </h1>
      </div>
      <div className="text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Select templates, themes, and styles that fit your brand.
        </p>
      </div>
      <div className='flex gap-2 my-5'>
      <div className="flex flex-col items-center">
    <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Line 1" />
    <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Arrow 1" />
    <div className="w-[68px] h-[32px] rounded-[5px] bg-[#E3F3EF] flex items-center justify-center mt-1">
      <h1 className="font-inter font-bold text-[12px] leading-[24px]">Role 1</h1>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Line 1" />
    <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Arrow 1" />
    <div className="w-[68px] h-[32px] rounded-[5px] bg-[#EEF4FF] flex items-center justify-center mt-1">
      <h1 className="font-inter font-bold text-[12px] leading-[24px]">Role 2</h1>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/howItWorks/path4.svg" width={2} height={33} alt="Line 1" />
    <Image src="/howItWorks/arrowbottom.svg" width={14} height={6} alt="Arrow 1" />
    <div className="w-[68px] h-[32px] rounded-[5px] border-1 flex items-center justify-center mt-1">
      <h1 className="font-inter font-bold text-[12px] leading-[24px]">+</h1>
    </div>
  </div>
  </div>
  <Image src="/howItWorks/path9.svg" width={7} height={36} alt="Team" className="my-2" />

  <div className="w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Create Your Profile
        </h1>
      </div>
      <div className="text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Sign up and add your personal, professional, and social details.
        </p>
      </div>

      <Image src="/howItWorks/path9.svg" width={7} height={36} alt="Team" className="my-2" />
      <div className="w-[299px] h-[60px] rounded-[10px] flex items-center justify-center bg-[#F3F3F3]">
        <h1 className="bg-gradient-to-r from-[#0FB287] to-[#0A3E94] text-transparent bg-clip-text font-bold text-[20px] leading-[24px]">
          Share & Stay Connected
        </h1>
      </div>
      <div className="text-center w-[238px] h-[45px] rounded-[10px] ">
        <p className="text-[16px] leading-[23px]">
          Share instantly via tap or scan.
          Avtive handles reminders and follow-ups.
        </p>
      </div>


    </div>

    </>
  );
};

export default Team;
