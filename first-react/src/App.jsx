import { useState } from 'react'
import ironhack from './assets/ironhack.png'
import navBar from './assets/two_lines.png'
import surubelnita from './assets/surubelnita.png'
import play from './assets/play.png'
import roata from './assets/roata.png'
import popup from './assets/iese_din_ecran.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='first'>
        <div id='firsthalf'> 
              <div className='header'>
                    <img src={ironhack} className="logo ironhack" alt="Ironhack logo" />
              </div>

              <div id='content'>
                    <h1>Say Hello to ReactJS</h1>
                    <h2>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h2>
                    <button id='btn'>Awesome!</button>
              </div>      
          </div>
          
          <div id='secondhalf'>
            <img src={navBar} className="logo navBar" alt="navBar logo" />
          </div>  
      </div>

      <div className="second">
            <div className="description"> 
                <img src={surubelnita} alt="Surubelnita" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="description"> 
                <img src={play} alt="play image" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="description"> 
                <img src={roata} alt="settings image" />
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="description"> 
                <img src={popup} alt="popup image" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
      </div>

    </div>
  )
}

export default App
