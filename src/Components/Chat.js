import React from 'react'
import { CiCamera } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import Messages from './Messages';
import Input from './Input';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <CiCamera />
          <IoPersonAddOutline />
<IoMdMore />
        </div>
      </div> 
              <Messages/>
<Input/>
    </div>
  )
}

export default Chat