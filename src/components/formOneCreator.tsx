/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion'
import { FishSVG } from './fishSVG'

export const FormOneCreator = () => {
  const [fishSize, setFishSize] = useState(100)
  const [fishShape, setFishShape] = useState(100)
  const [fishRotate, setFishRotate] = useState(false)
  const [fishColor, setFishColor] = useState(0)
  const [fishName, setFishName] = useState('')

  const getShape = () => {
    if (fishShape === 1) return '0%'
    if (fishShape === 2) return '100%'
    if (fishShape === 3) return '200%'
  }
  return (
    <div className="size-full h-auto min-h-full p-10">
      <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-white/20 shadow-md">
        <div className="relative flex items-center justify-center p-20">
          <div className="relative aspect-square w-4/5">
            <FishSVG
              size={fishSize}
              rotate={fishRotate ? 45 : 0}
              shape={fishShape}
            />
          </div>
        </div>

        <div className="relative w-full flex-1 bg-black/5 ">
          <h1 className="absolute top-[-30px] w-full text-center text-[30px] font-bold uppercase ">
            Properties
          </h1>

          <div className="relative p-10">
            <div className="h-15 m-6 flex flex-col items-center justify-center rounded-3xl bg-white p-5 text-3xl  shadow-md">
              <div className="mix-blend-difference">Size</div>
              <input
                type="range"
                min={35}
                max={100}
                onChange={(e) => setFishSize(parseInt(e.target.value))}
                value={fishSize}
                className="[--range-shdw: black] range range-lg"
              />
            </div>

            <div className="relative m-6 grid h-20 w-full grid-cols-3">
              <motion.div
                className="absolute h-full w-1/3 rounded-3xl bg-white shadow-xl"
                animate={{
                  translateX: getShape()
                }}
                transition={{ ease: easeIn, duration: 0.2 }}
              />
              <button
                className="flex size-full items-center justify-center text-4xl mix-blend-difference"
                onClick={() => setFishShape(1)}
              >
                Square
              </button>
              <button
                className="flex size-full items-center justify-center text-4xl mix-blend-difference"
                onClick={() => setFishShape(2)}
              >
                Round
              </button>
              <button
                className="flex size-full items-center justify-center text-4xl mix-blend-difference"
                onClick={() => setFishShape(3)}
              >
                Circle
              </button>
            </div>

            <div className="relative m-6 h-20 w-full">
              <motion.div
                className="absolute h-20 w-full rounded-3xl bg-white shadow-md"
                animate={{
                  width: fishRotate ? '100%' : '0%'
                }}
                transition={{
                  duration: 0.2,
                  ease: easeInOut
                }}
              />

              <button
                className="flex size-full items-center justify-center text-4xl mix-blend-difference"
                onClick={() => setFishRotate((prev) => !prev)}
              >
                Rotate
              </button>
            </div>

            <div className="m-6 w-full bg-white">Color</div>
          </div>
        </div>
      </div>
    </div>
  )
}
