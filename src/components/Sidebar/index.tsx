import React from 'react'
import AddNote from '../AddNote'

const Sidebar: React.FC = () => {
  return (
    <div className='flex items-center flex-row sm:flex-col gap-2 justify-between sm:justify-start'>
      <h4 className='font-semibold font-outfit text-base capitalize sm:mb-6'>Spads</h4>
      <AddNote />
    </div>
  )
}

export default Sidebar