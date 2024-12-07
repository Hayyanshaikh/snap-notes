import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App: React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row h-screen'>
      <div className='border-b sm:border-r py-3 px-4'>
        <Sidebar />
      </div>
      <div className='sm:py-3 pb-3 sm:px-8 flex-1'>
        <Content />
      </div>
    </div>
  )
}

export default App;