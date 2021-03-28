import React from 'react'
import Header from 'components/Header'
import PillowItem, { PillowItemProps } from 'components/PillowItem'
import sites from 'sites.json'
import './App.css'

function App() {
  const urlList: PillowItemProps[] = sites
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        {urlList.map((item) => (
          <PillowItem
            key={item.title}
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
