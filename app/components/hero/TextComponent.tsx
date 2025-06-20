import React from "react";
import { GradientHeading } from "../headings/GradientHeading";
function TextComponent() {
    return (
        <div className="text-center mt-18 md:mt-[5rem]">
                <GradientHeading 
                heading="Redefining Networking" 
                styles="text-[40px] sm:text-7xl sm:leading-[70px] leading-[38px]" 
                />           
            <p className="mt-2 text-[12px] md:text-[25px] font-medium text-[#535862] mb-10">
                The Future of Networking Starts Here
            </p>
        </div>
    );
};

export { TextComponent };
