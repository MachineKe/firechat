import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChatInfo">
              <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />

        <span>Jane</span>
      </div>
    </div>
  )
}

export default Search