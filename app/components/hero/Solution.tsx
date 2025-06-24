import Image from 'next/image'
import React from 'react'

const Solution = ({ closeModal }: { closeModal: () => void }) => {
    return (
    <div className="w-[360px] h-[320.14px] rounded-[31px] bg-[#98E5CD]">
        <button
        onClick={closeModal}
        className="absolute top-2 right-4 text-black font-bold text-lg"
      >
        ✕
      </button>
      <div className="flex flex-col gap-y-4 py-10">
      <div className="flex justify-center items-center gap-2 mx-10">
        <Image
              src="/hero/check.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className=" text-base font-semibold">
            Smart introductions and
            engagement tools            </p>
        </div>
        <div className="flex justify-center items-center gap-2 mx-10">
        <Image
              src="/hero/check.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className=" text-base font-semibold">
            Interactive, SEO-optimized
profiles with real-time updates           </p>
        </div>
        <div className="flex justify-center items-center gap-2 mx-10">
        <Image
              src="/hero/check.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className=" text-base font-semibold">
            Digital business cards with
auto-sync & instant sharing
            </p>
        </div>
        <div className="flex justify-center items-center text-center gap-2 mx-4">
        <Image
            src="/hero/icons/ai.svg"
            alt="ai"
            width={373}
            height={38}
            className="h-fit "
          />
        </div>
       
      </div>
    </div>
  )
}

export default Solution