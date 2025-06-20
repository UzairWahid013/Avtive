'use client';
import Image from "next/image";
import { GradientHeading } from "../headings/GradientHeading";
import { Button } from "@/components/ui/button";

export default function Success() {
    return (
        <div className='overflow-x-hidden w-screen h-screen fixed top-0 left-0 z-50 bg-white'>
            <div className="w-screen h-screen p-10 overflow-hidden bg-gradient-to-r from-[#FFFFF] to-[#E8F4E8]">
                <Button onClick={() => window.location.reload()} variant='outline'>Back</Button>
                <div className="m-auto w-fit flex flex-col items-center">
                    <Image src='/full_logo.svg'
                        alt="Logo"
                        width={300}
                        height={100}
                    />

                    <GradientHeading heading="Welcome to Avtive Early Access!" styles="mt-24 max-w-[700px] text-center" isUppercase={false} />
                    <p className="font-medium text-lg text-black mt-6">Thanks for signing up! The future of effortless networking starts now.</p>
                    <Image src='/celebration.svg'
                        alt="Logo"
                        width={500}
                        height={300}
                        className="-mt-10"
                    />
                </div>
            </div>
        </div>
    );
}
