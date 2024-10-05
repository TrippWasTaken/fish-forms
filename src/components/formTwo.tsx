import { AnimatePresence, motion } from 'framer-motion'
import { FishSVG } from './fishSVG'
import { CreateNew } from './createNew'
import { useState } from 'react'

export const FormTwo = () => {
  const [submitNew, setSumbitNew] = useState(null)

  const newVariants = {
    openNew: {
      opacity: 0,
      y: -400,
      transition: {
        duration: 1
      }
    },
    animateNew: {
      opacity: 1,
      y: 0
    },
    exitNew: {
      opacity: 0,
      y: -400,
      transition: {
        duration: 1
      }
    }
  }
  return (
    <div className="flex size-full flex-col items-center justify-center py-20">
      <h1 className="text-6xl">Form two flow</h1>
      <div className="glass relative size-[90%] overflow-hidden rounded-b-3xl shadow-2xl">
        <div className="absolute bottom-0 left-0 z-20 size-full bg-none">
          <AnimatePresence mode="sync">
            {!submitNew && (
              <motion.div
                key="form"
                variants={newVariants}
                initial="oepnNew"
                animate="animateNew"
                exit="exitNew"
                className="absolute bottom-0 left-0 z-20 size-full bg-none"
              >
                <CreateNew setSubmitNew={setSumbitNew} submitNew={submitNew} />
              </motion.div>
            )}

            {submitNew && (
              <motion.button
                key="cancelBtn"
                initial={{ translateY: -100 }}
                animate={{
                  translateY: 0
                }}
                exit={{
                  translateY: -100
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
                className="btn btn-error btn-lg absolute bottom-5 left-5"
                onClick={() => setSumbitNew(null)}
              >
                Cancel
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <div className=" glass absolute z-10 size-full overflow-hidden rounded-b-3xl bg-white/5" />

        <motion.div
          animate={{
            scale: 1.1
          }}
          transition={{
            scale: {
              ease: 'linear',
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror'
            }
          }}
          className="absolute bottom-0 left-0 h-[90%] w-full bg-blue-500"
        />
      </div>
    </div>
  )
}
