import React from 'react'
import AddNote from './components/AddNote'

const App: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <div className='border-r py-3 px-4'>
        <div className='flex items-center flex-col'>
          <h4 className='font-semibold font-outfit text-base capitalize mb-8'>Spads</h4>
          <AddNote />
        </div>
      </div>
      <div className='content'></div>
    </div>
  )
}

export default App