import React from 'react'
import { FishSVG } from './fishSVG'
import { motion } from 'framer-motion'

export const FishGrid = ({ fish }) => {
  console.log(fish)
  return (
    <div className="relative flex aspect-square h-[256px] items-center justify-center place-self-center overflow-hidden rounded-3xl border-2 border-zinc-800 bg-gradient-to-t from-slate-50/10 via-slate-300/10 to-slate-50/10 shadow-md ">
      {fish && (
        <motion.div
          initial={{
            opacity: 0,
            translateY: 100
          }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none flex aspect-square w-[90%] items-center justify-center "
        >
          <FishSVG
            size={fish.fishSize}
            rotate={fish.fishRotate ? 45 : 0}
            shape={fish.fishShape}
            color={fish.fishColor}
            type={fish.fishType}
          />
        </motion.div>
      )}
    </div>
  )
}
