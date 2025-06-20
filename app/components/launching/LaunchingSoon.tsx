import React from "react";
import Image from "next/image";

function LaunchingSoon() {
  return (
    <div>
      <div className="md:hidden flex flex-col items-center mx-auto text-center mt-30">
        <h1 className="w-[280px] text-3xl text-[#0A3E94] font-extrabold uppercase tracking-wide leading-[1.1] mb-2">
          Launching Soon!
        </h1>
        <p className="w-[350px] text-xs leading-[1.4] font-medium text-gray-600">
          Join the Waitlist Today! Be among the first to experience Avtive with
          priority access & exclusive perks.
        </p>
      </div>

      <Image
        src="/launching/phone.svg"
        layout="responsive"
        width={1979}
        height={785}
        alt="phone"
        className="m-auto w-full h-auto sm:mt-30 mt-5"
      />
      <div className="md:hidden flex flex-col items-center mx-auto text-center mb-30 -mt-5">
        <p className="text-[11px] font-medium mb-2">
          Coming Soon on
        </p>
        <div className="flex gap-2">
              <Image
                src='/social/googleplay.svg'
                alt="x"
                width={67.06}
                height={21.95}
              />
              <Image
                src='/social/appstore.svg'
                alt="x"
                width={67.06}
                height={21.95}
              />
            </div>
      </div>
    </div>
  );
}

export { LaunchingSoon };
