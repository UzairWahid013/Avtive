'use client';
import React from "react";
import { TextComponent } from "./TextComponent";
import Image from "next/image";

function HeroSection() {
    return (
        <div>
            <TextComponent />
            <div className="relative w-full h-[70vh]  items-center gap-5 px-10 hidden lg:flex justify-around">
                <Image src={'/hero/color_background.png'} alt="background" width={900} height={900}
                    layout="responsive"
                    className="absolute inset-0 w-full h-full object-cover z-[-1] mt-10" />
                <div className="absolute top-1/3 2xl:top-1/2 right-30 2xl:right-60 ">
                    <Image
                        src={'/hero/icons/digital.svg'}
                        alt="error"
                        width={296.77}
                        height={139}
                        className="w-60 h-fit relative -left-5"
                    />
                    <Image
                        src={'/hero/icons/smart.svg'}
                        alt="warning"
                        width={132}
                        height={25}
                        className="h-fit relative left-45 bottom-25 "
                    />
                    <Image
                        src={'/hero/icons/seo.svg'}
                        alt="limited"
                        width={170}
                        height={26}
                        className="mt-2 h-fit relative left-60 bottom-12"
                    />

                    <Image
                        src={'/hero/icons/ai.svg'}
                        alt="awkword"
                        width={373}
                        height={38}
                        className="h-fit mt-2 relative left-2 bottom-5"
                    />
                </div>
                <div className="absolute top-1/3 2xl:top-1/2 left-30 2xl:left-32">
                    <div className="flex items-center bg-[#FFFFFF80] w-[403px] h-[38px] justify-center rounded-4xl">
                        <p className="text-center text-sm font-semibold">Missed follow-ups & poor contact management</p>
                        <Image
                            src={'/animate-icons/error1.svg'}
                            alt="error"
                            width={43.19}
                            height={39.86}
                            className="animate-bounce duration-1000"
                        />
                    </div>
                    <Image
                        src={'/hero/icons/warring.svg'}
                        alt="warning"
                        width={265.65}
                        height={66.61}
                        className="h-fit relative left-1/6 mt-5 animate-fade-in-right duration-1000 delay-200"
                    />
                    <div className="flex flex-col items-center relative left-85 bottom-10  bg-[#FFFFFF80] w-[171px] h-[87.46px] justify-center rounded-[20px]">
                        <Image
                            src={'/animate-icons/error1.svg'}
                            alt="error"
                            width={43.19}
                            height={39.86}
                            className="animate-bounce duration-1000"
                        />
                        <p className="text-center text-xs font-medium">Limited networking<br /> and outdated contact <br />methods</p>
                    </div>

                    <div className="flex flex-col items-center relative left-15 bottom-18 bg-[#FFFFFF80] w-[171px] h-[76.46px] rounded-[20px]">
                        <Image
                            src={'/animate-icons/error1.svg'}
                            alt="error"
                            width={43.19}
                            height={39.86}
                            className="animate-bounce duration-1000"
                        />
                        <p className="text-center text-xs font-medium">Awkward interactions <br />
                            and social anxiety</p>
                    </div>
                </div>

            </div>
            <Image src={'/hero/Mobile_bg.svg'} alt="background" width={900} height={900}
                layout="responsive"
                className=" w-full lg:w-full h-full object-cover mt-0 block lg:hidden" />
        </div>
    );
};

export { HeroSection };
