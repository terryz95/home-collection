import React from 'react'
import Banner from './components/Banner'
import PillowItem, { PillowItemProps } from './components/PillowItem'
import './App.css'

function App() {
  const urlList: PillowItemProps[] = []
  return (
    <div className='App'>
      <Banner />
      <div className='container'>
        {urlList.map((item) => (
          <PillowItem
            icon={item.icon}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
