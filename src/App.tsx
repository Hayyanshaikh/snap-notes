import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import useDarkModeStore from './stores/useDarkModeStore'

const App: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className={`${isDarkMode ? "dark" : ""} h-screen`}>

      <div className="bg-white dark:bg-darker transition-all flex flex-col sm:flex-row  min-h-full">
        <div className='border-b h-full sm:fixed sm:border-b-0 sm:border-r transition-all dark:border-white/[10%] border-black/[20%] py-3 px-4'>
          <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className='pb-4 sm:px-8 sm:pl-[calc(34px_+_82px)] flex-1'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App;