import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Fire Chat</span>
      <div className="user">
        <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
        <span>Mark</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar