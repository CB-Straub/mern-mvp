import React from 'react'
import './Backdrop.css'

const Backdrop = ({show, click }) => {
  return  show &&
    // show is destructured prop {show} from state logic in App.js which defaults to false, will only show backdrop if we change state to true
    <div className='backdrop' onClick={click}></div>
    // onClick closes the sideDrawer  from the state in the App component.  setSideToggle
  
}

export default Backdrop