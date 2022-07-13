import React, { useState } from 'react'
import './Nav.css'
import {useEffect} from 'react'

function Nav() {
  const[show,handleshow]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        handleshow(true)
      }else{
        handleshow(false)
      }
    });
    // return ()=>{
    //   window.removeEventListener("scroll")
    // }
    }
  ,[])

    
  return (
    <div className={`nav ${show&&'nav__show'}`} >
      <img
      className='nav__logo' 
      src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      alt="Netflix Logo"
      />
      <img
      className='nav__avatar'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      alt='netflix Avatar'
      />
      

    </div>
  )
}

export default Nav;