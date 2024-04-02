import React from 'react'
import { LuImagePlus } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <IoIosAttach />
        <input type="text"
        style={{display:'none'}}
          id="file" />
        <label htmlFor="file"><LuImagePlus /></label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input