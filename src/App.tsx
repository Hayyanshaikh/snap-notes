import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import useDarkModeStore from './stores/useDarkModeStore'

const App: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className={`${isDarkMode ? "dark" : ""} h-screen`}>

      <div className="bg-white dark:bg-dark transition-all flex flex-col sm:flex-row min-h-full">
        <div className='border-b sm:border-b-0 sm:border-r transition-all bg-white dark:bg-darker dark:border-white/[10%] border-black/[20%] py-3 px-4'>
          <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className='sm:py-3 pb-3 sm:px-8 flex-1'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App;