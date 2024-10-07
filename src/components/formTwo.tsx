import { AnimatePresence, motion } from 'framer-motion'
import { FishSVG } from './fishSVG'
import { CreateNew } from './createNew'
import { useRef, useState } from 'react'
import FormTwoSpawnFish from './formTwoSpawnFish'

export const FormTwo = () => {
  const [submitNew, setSumbitNew] = useState(null)
  const [dragging, setDragging] = useState()
  const [fish, setFish] = useState<{ x: number; y: number }[]>([])

  const tankSize = useRef(null)
  const rmRef = useRef(null)

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
      y: 400,
      transition: {
        duration: 1
      }
    }
  }
  return (
    <div
      className="glass relative size-[90%] overflow-hidden rounded-b-3xl shadow-2xl"
      ref={tankSize}
    >
      <motion.div className="absolute bottom-0 left-0 z-20 size-full bg-none">
        <motion.div
          key="draggingCont"
          animate={{ opacity: dragging ? 1 : 0 }}
          className="absolute flex h-[10%] w-full items-center justify-center bg-error/50"
          ref={rmRef}
        >
          <div className="text-2xl">Remove fish</div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitNew && (
            <motion.div
              key="submitNewFormCont"
              variants={newVariants}
              initial="openNew"
              animate="animateNew"
              exit="exitNew"
              className="absolute bottom-0 left-0 z-20 size-full bg-none"
            >
              <CreateNew setSubmitNew={setSumbitNew} submitNew={submitNew} />
            </motion.div>
          )}

          {submitNew && (
            <>
              <FormTwoSpawnFish
                rmRef={rmRef}
                setDragging={setDragging}
                setFish={setFish}
                fish={fish}
                fishCount={submitNew[1]}
                tankSize={tankSize.current}
              />
              <motion.div
                className="absolute bottom-0"
                key="btnCancelKey"
                initial={{ translateY: 200 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                animate={{
                  translateX: 0,
                  translateY: 0
                }}
                exit={{
                  translateX: -200
                }}
              >
                <button
                  className="btn btn-error btn-lg absolute bottom-5 left-5"
                  onClick={() => setSumbitNew(null)}
                >
                  Cancel
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="glass absolute z-10 size-full overflow-hidden rounded-b-3xl bg-white/5" />

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
  )
}
