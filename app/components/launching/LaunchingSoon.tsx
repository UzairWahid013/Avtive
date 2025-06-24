import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function LaunchingSoon() {
  return (
    <div>
      {/* Mobile Heading & Description */}
      <div className="md:hidden flex flex-col items-center mx-auto text-center mt-30">
        <h1 className="w-[280px] text-3xl text-[#0A3E94] font-extrabold uppercase tracking-wide leading-[1.1] mb-2">
          Launching Soon!
        </h1>
        <p className="w-[350px] text-xs leading-[1.4] font-medium text-gray-600">
          Join the Waitlist Today! Be among the first to experience Avtive with
          priority access & exclusive perks.
        </p>
      </div>

      {/* Three Images Positioned to Create Scene */}
      <div className="relative w-full sm:mt-30 mt-5 h-[300px] md:h-[552px] md:my-20">
        {/* Avtive Logo - Background with lower z-index */}
        <Image
          src="/launching/Avtive.svg"
          alt="Avtive logo"
          width={591.33978271484375}
          height={552.86940002441406}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[230px] sm:w-[350px] sm:h-[325px] md:w-[450px] md:h-[420px] lg:w-[591px] lg:h-[552px] max-w-full z-0"
        />
        
        {/* Left Hand Image - Animated from left side */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3 
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="absolute left-0 top-2/3 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/launching/lefthand.png"
            alt="left hand"
            width={1979}
            height={785}
            className="w-[400px] h-[158px] sm:w-[600px] sm:h-[238px] md:w-[900px] md:h-[357px] lg:w-[1200px] lg:h-[476px] xl:w-[1979px] xl:h-[785px]"
          />
        </motion.div>
        
        {/* Right Hand Image - Animated from right side */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6 
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/launching/righthand.png"
            alt="right hand"
            width={1979}
            height={785}
            className="w-[400px] h-[158px] sm:w-[600px] sm:h-[238px] md:w-[900px] md:h-[357px] lg:w-[1200px] lg:h-[476px] xl:w-[1979px] xl:h-[785px]"
          />
        </motion.div>
      </div>

      {/* Mobile App Badges */}
      <div className="md:hidden flex flex-col items-center mx-auto text-center mb-20 -mt-5">
        <p className="text-[11px] font-medium mb-2">Coming Soon on</p>
        <div className="flex gap-2">
          <Image
            src="/social/googleplay.svg"
            alt="google play"
            width={67.06}
            height={21.95}
          />
          <Image
            src="/social/appstore.svg"
            alt="app store"
            width={67.06}
            height={21.95}
          />
        </div>
      </div>
    </div>
  );
}

export { LaunchingSoon };