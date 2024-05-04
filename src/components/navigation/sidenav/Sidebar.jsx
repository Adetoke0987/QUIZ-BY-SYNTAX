import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../links/Navlinks'

const Sidebar = () => {
  return (
    <div>
      <div className={styles.sideNavigation}>
        <h3>Menu</h3>
        <div>
        <NavLinks to="/profile" label="User Profile" className={style.linktext}>
            Profile
          </NavLinks>
          <NavLinks to="/profile" label="Quizzes" className={style.linktext}>
            Quizzes
          </NavLinks>
          <NavLinks to="/profile" label="Results" className={style.linktext}>
            Results
          </NavLinks> 
        </div>
      </div>
    </div>
  )
}

export default Sidebar
