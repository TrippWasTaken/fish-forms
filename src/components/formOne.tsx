import React, { useState } from 'react'
import { FishGrid } from './fishGrid'
import { FormOneCreator } from './formOneCreator'
import { AnimatePresence, motion } from 'framer-motion'

export const FormOne = () => {
  const defaultArr = new Array(10).fill(null)
  const [fishGrid, setFishGrid] = useState([])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex size-[90%] flex-col items-center justify-center"
    >
      <div className="flex size-[90%] flex-1">
        <div className="w-1/2">
          <FormOneCreator setFishGrid={setFishGrid} fishGrid={fishGrid} />
        </div>
        <div className="flex flex-1 flex-wrap content-start gap-10 p-10">
          <AnimatePresence mode="wait">
            {defaultArr.map((_, index) => (
              <FishGrid
                key={index}
                targetIndex={index}
                fish={fishGrid[index]}
                setFish={setFishGrid}
              />
            ))}
          </AnimatePresence>
          <div className="place-self-center text-6xl">
            Fish Count: {fishGrid.length} {fishGrid.length === 10 && '(max)'}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
