import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// fill links
const FIRST_LINK = '';
const SECOND_LINK = '';
const THIRD_LINK = '';

const onClick = (link: string) => window.open(link)
const App = () => {

  return (
    <div className='root'>
      <div className='container'>
        <div className='firstButton'>
          <button onClick={() => onClick(FIRST_LINK)}>1</button>
        </div>
        <div className='buttonSection'>
          <button onClick={() => onClick(SECOND_LINK)}>2</button>
          <button onClick={() => onClick(THIRD_LINK)}>3</button>
        </div>
      </div>
      <div className='sensorContainer'>
        <div className="circle">Sensor 1</div>
        <div className="circle">Sensor 2</div>
      </div>
    </div>
  )
}

export default App
