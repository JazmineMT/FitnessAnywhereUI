import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import main from '../pics/main.jpg'
import {Image} from '../styling/LandingStyles'


const Landing = props => {

    return (
        <div>
      <Router>
      <nav>
        <div>
          <h1>Anywhere Fitness</h1>
          <NavLink className='nav' exact to ='/about'> About </NavLink>
          <NavLink className='nav' exact to='/help'> Help </NavLink>
        </div>
        <div>
            <h2>The world if your gym.</h2>
            <h2>Welcome</h2>
        </div>
      </nav>
      </Router>

      <div>
          <Image
          className='main'
          src={main}
          alt='thumbnail'
          />
      </div>

        <div> 
            <footer>
                <button> Login </button>
                <button> Register </button>
            </footer>
        </div>
        </div>
    )

}

export default Landing 
