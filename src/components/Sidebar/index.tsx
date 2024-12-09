import React from 'react'
import AddNote from '../AddNote'
import Button from '../common/Button'
import { Moon, Sun } from '@phosphor-icons/react'

interface Props {
  toggleDarkMode?: Function;
  isDarkMode?: boolean
}

const Sidebar: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className='flex items-center flex-row sm:flex-col gap-2 justify-between h-full'>
      <div className='flex flex-row sm:flex-col flex-1 items-center'>
        <h4 className='font-semibold font-outfit text-base capitalize sm:mb-6 transition-all dark:text-white text-dark'>Spads</h4>
        <AddNote />
      </div>
      <Button onClick={() => toggleDarkMode && toggleDarkMode()} className='bg-black/[10%] dark:bg-light h-9 w-9'>
        {
          isDarkMode ? <Sun size={18} weight='bold' className='text-orange-300' /> :
            <Moon size={18} weight='bold' className='text-dark' />
        }

      </Button>
    </div>
  )
}

export default Sidebar;