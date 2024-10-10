import React, { FC, useState } from 'react'
import { FishSVG } from './fishSVG'
import { motion } from 'framer-motion'

export const FishGrid: FC<{
  fish: {
    fishSize: number
    fishRotate: boolean
    fishShape: number
    fishColor: number
    fishType: number
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFish: any
  targetIndex?: number
}> = ({ fish, setFish, targetIndex }) => {
  const [hover, setHover] = useState(false)
  return (
    <motion.div className="relative flex aspect-square h-[256px] items-center justify-center place-self-center overflow-hidden rounded-3xl border-2 border-zinc-800 bg-gradient-to-t from-slate-50/10 via-slate-300/10 to-slate-50/10 shadow-md ">
      <motion.button
        initial={{ opacity: 0 }}
        onMouseEnter={() => fish && setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          opacity: hover ? 1 : 0
        }}
        onDoubleClick={() => {
          setFish((prev: unknown[]) => {
            const newArr = prev.filter(
              (_: unknown, index: number | undefined) => index !== targetIndex
            )

            return newArr
          })
          setHover(false)
        }}
        className="absolute z-[100] flex size-full cursor-pointer items-center justify-center bg-error/75 text-3xl"
      >
        <div>Remove?</div>
      </motion.button>
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
    </motion.div>
  )
}
