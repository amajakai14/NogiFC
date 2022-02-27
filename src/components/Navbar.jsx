import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <a href='#void' className='navbar-box underline'>News</a>
        <a href='#void' className='navbar-box underline'>Contents</a>
        <a href='#void' className='navbar-box underline'>Webboard</a>
        <a className='navbar-box underline'
            href='https://www.nogizaka46.com/'
            target={"_blank"}
            rel={"noopener noreferrer"}>
            Official Site
        </a>
        <a href='#void' className='navbar-box underline'>Log In/Register</a>
    </div>
  )
}
