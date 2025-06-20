'use client';
import Image from "next/image";
import { GradientHeading } from "../headings/GradientHeading";
import { X } from 'lucide-react';

interface SuccessProps {
    onClose: () => void;
}

export default function Success({ onClose }: SuccessProps) {
    return (
        <div className="overflow-x-hidden w-screen bg-black/30 h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="w-[95%] py-20 md:w-full p-6 md:w-[60%] md:p-20 md:max-w-[600px] bg-white rounded-2xl">
                
                {/* Close Button */}
                <div className="flex justify-end md:-mt-[3.5rem] md:-mr-[4rem] -mt-2 -mr-2">
                    <button onClick={onClose} className="hover:bg-gray-100 rounded-full p-2">
                        <X className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src='/full_logo.svg'
                        alt="Logo"
                        width={240}
                        height={72}
                        className="mb-6"
                    />

                    <div className="relative h-[150px] w-[150px] mb-6">
                        <Image src='/handshake.svg' alt="Success" fill className="object-contain" />
                    </div>

                    <GradientHeading
                        heading="WELCOME TO AVTIVE EARLY ACCESS!"
                        styles="max-w-[500px] text-center leading-tight mb-4 md:!text-4xl !text-2xl"
                        isUppercase={false}
                    />

                    <p className="font-medium text-base md:text-lg text-[#535862] max-w-[450px] text-center mb-6">
                        Thanks for signing up! The future of effortless networking starts now.
                    </p>
                </div>
            </div>
        </div>
    );
}
