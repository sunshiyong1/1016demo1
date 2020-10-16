import React from 'react'
import { NavLink, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import FC from './about/FC'
import LD from './about/LD'
import WH from './about/WH'
import '../styles/about.css'
function About() {
  return (
    <div>
      <div className="left">
        <li> <NavLink to="/about/wh">企业文化</NavLink> </li>
        <li> <NavLink to="/about/ld">企业领导</NavLink> </li>
        <li> <NavLink to="/about/fc">企业风采</NavLink> </li>
      </div>
      <br/>
      <div className="right">
        <Route path="/about/wh" component={WH}></Route>
        <Route path="/about/ld" component={LD}></Route>
        <Route path="/about/fc" component={FC}></Route>
        <Redirect to="/about/wh"></Redirect>
      </div>
    </div>
  )
}

export default About