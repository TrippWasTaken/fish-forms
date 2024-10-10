import { Welcome } from './welcome'
import { FormOne } from './formOne'
import { FormTwo } from './formTwo'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [displayForm, setDisplayForm] = useState(0)
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-auto bg-zinc-800 text-white">
      <AnimatePresence mode="wait">
        {displayForm !== 0 && (
          <motion.button
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            exit={{ translateY: -100 }}
            className="btn-lg absolute left-5 top-5 z-[1000] rounded-2xl bg-blue-500"
            onClick={() => setDisplayForm(0)}
          >
            Home
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {displayForm === 0 && (
          <motion.div
            key="welcomePage"
            transition={{ duration: 1, ease: 'easeInOut' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Welcome />
            <div className="flex gap-5">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setDisplayForm(1)}
              >
                Form 1
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => setDisplayForm(2)}
              >
                Form 2
              </button>
            </div>
          </motion.div>
        )}
        {displayForm === 1 && <FormOne />}
        {displayForm === 2 && <FormTwo />}
      </AnimatePresence>
    </div>
  )
}

export default App
