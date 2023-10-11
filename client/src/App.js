import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

const App = () => {
    const dark={
    backgroundColor: 'bg-black',
    textColor:"text-orange-200"
}
  return (
    <div className={`min-h-screen ${dark.backgroundColor} ${dark.textColor} pt-5`}>
    <Header/>
    <Body/>
    <Footer/>
  </div>
  )
}

export default App
