/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FormTwoNewField } from './formTwoNewField'

export const CreateNew = ({ submitNew, setSubmitNew }) => {
  const [newStart, setNewStart] = useState(false)

  const [fishCount, setFishCount] = useState(1)
  const [tankName, setTankName] = useState('')

  const newClick = () => {
    setNewStart(true)
  }

  const parentVariants = {
    open: {
      height: '30rem',
      width: '30rem'
    },
    closed: {
      height: '6rem',
      width: '16rem',
      transition: {
        delay: 1
      }
    }
  }

  const children = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 }
    }
  }

  return (
    <motion.div
      animate={newStart ? 'open' : 'closed'}
      className="flex size-full items-center justify-center"
    >
      <motion.div
        initial={false}
        variants={parentVariants}
        className="flex h-full flex-col items-start rounded-3xl bg-zinc-700 p-6 text-4xl text-white shadow-lg"
      >
        <motion.button className="w-full" onClick={() => newClick()}>
          New Tank
        </motion.button>

        <motion.div
          initial={false}
          variants={children}
          className="flex w-full flex-1 flex-col justify-evenly gap-4 text-2xl"
        >
          <FormTwoNewField key={1}>
            <div className="flex w-full flex-col items-center rounded-3xl bg-white p-4 text-black shadow-lg">
              <div className="text-nowrap">Tank Name</div>
              <input
                type="text"
                value={tankName}
                onChange={(e) => setTankName(e.target.value)}
                placeholder="Type here"
                className="input input-lg input-bordered w-full max-w-xs bg-transparent"
              />
            </div>
          </FormTwoNewField>
          <FormTwoNewField key={2}>
            <div className="flex w-full flex-col items-center rounded-3xl bg-white p-4 text-black shadow-lg">
              <div>Fish Count</div>
              <input
                type="range"
                min={1}
                max={10}
                onChange={(e) => setFishCount(parseInt(e.target.value))}
                value={fishCount}
                className="[--range-shdw: black] range range-lg"
              />
              <div>{fishCount}</div>
            </div>
          </FormTwoNewField>
          <FormTwoNewField key={4}>
            <div className="grid grid-flow-col gap-4">
              <button
                className="btn btn-error btn-lg rounded-3xl shadow-lg"
                onClick={() => setNewStart(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary btn-lg rounded-3xl shadow-lg"
                onClick={() => {
                  setSubmitNew([tankName, fishCount])
                }}
              >
                Create
              </button>
            </div>
          </FormTwoNewField>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
