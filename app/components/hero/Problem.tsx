import Image from "next/image";
import React from "react";

const Problem = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="w-[360px] h-[320.14px] rounded-[31px] bg-[#FFAFAB]">
      <button
        onClick={closeModal}
        className="absolute top-2 right-4 text-black font-bold text-lg"
      >
        ✕
      </button>
      <div className="flex flex-col gap-y-4 py-8">
      <div className="flex justify-center items-center text-center mx-10">
        <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className="text-center text-base font-semibold">
              Missed follow-ups & poor contact management
            </p>
        </div>
        <div className="flex justify-center items-center text-center mx-10">
        <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className="text-center text-base font-semibold">
            Limited networking 
              and outdated contact 
              methods            </p>
        </div>
        <div className="flex justify-center items-center text-center mx-10">
        <Image
              src="/animate-icons/error1.svg"
              alt="error"
              width={43.19}
              height={39.86}
              className="animate-bounce duration-1000"
            />
            <p className="text-center text-base font-semibold">
            Awkward interactions
            and social anxiety
            </p>
        </div>
        <div className="flex justify-center items-center text-center gap-2 mx-8">
        <Image
            src="/hero/icons/warring.svg"
            alt="warning"
            width={265.65}
            height={66.61}
            className="h-fit "
          />
        </div>
       
      </div>
    </div>
  );
};

export default Problem;
