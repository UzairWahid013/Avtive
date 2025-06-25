"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import AccessPopup from "../components/AccessPopup/AccessPopup";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar handleModalOpen={handleModalOpen} />
      
      <div className="overflow-x-hidden">
        {isModalOpen && <AccessPopup handleModalClose={handleModalClose} />}
        
        <div>
          <div className="px-2 block md:hidden">
            <h2 className="leading-tight text-center max-w-[520px] m-auto text-[30px] sm:text-5xl md:text-[75px] font-extrabold text-[#0A3E94] bg-clip-text">
              LAUNCHING <br /> SOON !
            </h2>
            <p className="text-center font-medium text-lg md:text-2xl text-[#535862] mb-5">
              Join the Waitlist Today! Be among the first to experience Avtive with
              priority access & exclusive perks.
            </p>
          </div>
          <div className="relative h-[380px] sm:h-[520px] mx-auto max-w-[1800px] ">
            {/* left hand */}
            <motion.div
              className="bottom-0 absolute h-[180px] w-[230px] sm:h-[300px] sm:w-[380px] md:w-[480px] lg:w-[620px] xl:w-[750px] 2xl:w-[890px] "
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image src="/launching/lefthand.png" alt="left hand" fill />
            </motion.div>
            {/* diamond */}
            <div className="-z-10 relative mx-auto h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
              <Image src="/launching/diamond.svg" alt="" fill />
            </div>
            {/* right hand */}
            <motion.div
              className="absolute right-0 top-7 sm:top-10 h-[200px] w-[240px] sm:h-[300px] sm:w-[380px] md:w-[480px] lg:w-[620px] xl:w-[750px] 2xl:w-[820px] "
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src="/launching/righthand.png" alt="right hand" fill />
            </motion.div>
          </div>
          <div className="flex flex-col items-center -mt-7 mb-10 sm:hidden">
            <p className="text-[#0B0B09] text-[11px] font-medium">Coming Soon on</p>
            <div className="flex gap-[7px] mt-[7px]">
              <Image src="/social/googleplay.svg" alt="x" width={67} height={22} />
              <Image src="/social/appstore.svg" alt="x" width={67} height={22} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;