import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VPPackage } from '../types';

interface CharacterStageProps {
  currentPkg: VPPackage;
}

export const CharacterStage: React.FC<CharacterStageProps> = ({ currentPkg }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentPkg.id}
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(3px)' }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1], // cinematic cubic-bezier
          }}
          className="absolute inset-0 flex items-center justify-center z-10 p-3 sm:p-4"
        >
          {/* Subtle Silhouette Backlight Glow */}
          <div
            className="absolute w-[280px] sm:w-[420px] lg:w-[520px] h-[280px] sm:h-[420px] lg:h-[520px] rounded-full blur-[110px] opacity-40 transition-colors duration-1000"
            style={{
              backgroundColor: currentPkg.theme.primaryColor,
            }}
          />

          {/* Official Character Cutout Asset - Guaranteed 100% Fit from Head to Shoes */}
          <div className="relative w-full h-full max-h-[460px] sm:max-h-[500px] xl:max-h-[540px] flex items-center justify-center">
            <img
              src={currentPkg.characterAsset}
              alt={currentPkg.agentName}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full w-auto h-auto object-contain object-center drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
