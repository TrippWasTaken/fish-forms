import { fakeFish } from 'utils/fishTanks'
import { DummyTank } from './dummyTank'
import { Welcome } from './welcome'
import { motion } from 'framer-motion'
import { FormOne } from './formOne'
import { FormTwo } from './formTwo'
import { useState } from 'react'

function App() {
  const [displayForm, setDisplayForm] = useState(0)
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-auto bg-zinc-800 text-white">
      <Welcome />
      <div>
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
      {displayForm === 1 && <FormOne />}
      {displayForm === 2 && <FormTwo />}
    </div>
  )
}

export default App
