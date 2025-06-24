import React from 'react';
import { GradientHeading } from '../headings/GradientHeading';
import Image from 'next/image';

const Individual = () => {
  return (
    <>
      {/* Desktop View (md and up) */}
      <div className="hidden md:flex relative w-[1584px] h-[436px] mx-auto bg-[url('/howItWorks/Frame_10.svg')] bg-no-repeat bg-center bg-contain my-10">
        {/* Step 1 */}
        <div className="absolute left-[40px] w-[528.17px] h-[420.41px] flex flex-col items-center py-5">
          <GradientHeading
            heading="Create Your Profile"
            styles="!max-w-[810px] text-center !text-3xl mb-2"
          />
          <p className="max-w-[426px] mb-10 text-center text-[25px] leading-[29px]">
            Sign up and add your personal,
            professional, and social details.
          </p>
          <Image src="/howItWorks/1.svg" width={325} height={198} alt="1" />
        </div>

        {/* Step 2 */}
        <div className="absolute left-[530px] top-[15px] w-[528.17px] h-[420.41px] flex flex-col items-center py-5">
          <Image src="/howItWorks/2.svg" width={331} height={205} alt="2" />
          <GradientHeading
            heading="Customize Your Card"
            styles="!max-w-[810px] text-center !text-3xl mb-2"
          />
          <p className="max-w-[377px] mb-10 text-center text-[25px] leading-[29px]">
            Select templates, themes, and styles that fit your brand.
          </p>
        </div>

        {/* Step 3 */}
        <div className="absolute left-[1015px] top-[20px] w-[528.17px] h-[420.41px] flex flex-col items-center py-10">
          <GradientHeading
            heading="Share & Stay Connected"
            styles="!max-w-[810px] text-center !text-3xl mb-2"
          />
          <p className="max-w-[377px] mb-10 text-center text-[25px] leading-[29px]">
            Share instantly via tap or scan. <br />
            Avtive handles reminders and follow-ups.
          </p>
          <Image src="/howItWorks/3.svg" width={246} height={238} alt="3" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 space-y-12 my-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center  relative">
        <Image src="/howItWorks/no1.svg" width={33} height={33} alt="1" className='absolute left-11 top-2'/>

          <Image src="/howItWorks/1.svg" width={325} height={198} alt="1" />
          <GradientHeading
            heading="Create Your Profile"
            styles="text-center !text-2xl mt-5"
          />
          <p className="text-center text-[16px] leading-[23px] mb-10">
            Sign up and add your personal, <br /> professional, and social details.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center relative">
        <Image src="/howItWorks/no2.svg" width={33} height={33} alt="1" className='absolute left-11 top-2'/>

          <Image src="/howItWorks/2.svg" width={331} height={205} alt="2" />
          <GradientHeading
            heading="Customize Your Card"
            styles="text-center !text-2xl mt-5"
          />
          <p className="text-center text-[16px] leading-[23px] mb-10">
            Select templates, themes, and  <br />styles that fit your brand.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center relative">
        <Image src="/howItWorks/no3.svg" width={33} height={33} alt="1" className='absolute left-11 top-2'/>

          <Image src="/howItWorks/3.svg" width={256} height={238} alt="3" />
          <GradientHeading
            heading="Share & Stay Connected"
            styles="text-center !text-2xl mt-5"
          />
          <p className="text-center text-[16px] leading-[23px]">
            Share instantly via tap or scan. <br /> Avtive handles reminders <br /> and follow-ups.
          </p>
        </div>
      </div>
    </>
  );
};

export default Individual;
