import React from "react";
import { GradientHeading } from "../headings/GradientHeading";
import DigitalBusinessCard from "./BusinessCards";
function FeatureSection() {
    return (
        <div id="feature" className="bg-white -mt-35 relative z-50 md:mt-30">
            <div className="flex justify-center items-center flex-col">
                
                <p className="text-center font-medium text-[12px] text-lg md:text-[25px] text-[#535862] mb-3">Intelligent tools for effortless networking</p>
                <GradientHeading 
  heading="Explore Our Powerful Features" 
  styles="text-center text-[30px] leading-[32px] w-[350px] sm:w-auto sm:!max-w-[710px] sm:!text-6xl sm:leading-[57px]" 
/>      
                </div>
            <DigitalBusinessCard />
        </div>
    );
};
export { FeatureSection };
