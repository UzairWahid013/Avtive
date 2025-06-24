import React, { useState } from 'react'
import { GradientHeading } from '../headings/GradientHeading'
import { Button } from '@/components/ui/button'
import Individual from './Individual'
import Team from './Team'
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('individual')

  const animationProps = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  return (
    <div className='max-w-full flex flex-col justify-center items-center'>
      <GradientHeading 
        heading="How it works" 
        styles="!max-w-[810px] text-center text-4xl md:!text-6xl mb-2" 
      />
      <p className="mb-10 text-center text-lg md:text-[25px]">
        Smart, instant, and effortless digital networking
      </p>

      <div className="w-[334.82px] h-[49.81px] rounded-xl bg-[#F0F0F0] flex items-center justify-center gap-2">
        <Button 
          className={`w-[159.11px] h-[38.74px] rounded-lg font-semibold text-[13px] hover:bg-white ${
            activeTab === 'individual' ? 'bg-white' : 'bg-transparent'
          }`}              
          variant="secondary"
          onClick={() => setActiveTab('individual')}
        >
          Individual
        </Button>
        <Button 
          className={`w-[159.11px] h-[38.74px] rounded-lg font-semibold text-[13px] hover:bg-white ${
            activeTab === 'team' ? 'bg-white' : 'bg-transparent'
          }`}
          variant="secondary"
          onClick={() => setActiveTab('team')}
        >
          Team
        </Button>
      </div>

      {/* Render animated component only */}
      <motion.div className="w-full mt-8" {...animationProps} key={activeTab}>
        {activeTab === 'individual' ? <Individual /> : <Team />}
      </motion.div>
    </div>
  )
}

export default HowItWorks
