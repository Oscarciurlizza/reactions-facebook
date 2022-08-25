import { useState } from 'react'
import { VscKebabVertical } from "react-icons/vsc";

import Angry from '../assets/angry.svg'
import Funny from '../assets/haha.svg'
import Like from '../assets/like.svg'
import Love from '../assets/love.svg'
import Sad from '../assets/sad.svg'
import Surprise from '../assets/wow.svg'

const Reaction = (
  {
    like,
    love,
    funny,
    surprise,
    sad,
    angry,
  }) => {

    const [modal, setModal] = useState(false);

    const handleClick = () => {
      setModal(modal ? false : true);
    }

  return (
    <>
        <div>
        <button
          type='button'
          className='cursor-pointer'
          onClick={handleClick} >
          <VscKebabVertical />
        </button>
      </div>
        {
          modal && 
          (
            <div
              className='absolute top-20 left-52 w-2/6'>
              <div className="grid grid-cols-2 modal flex-col gap-4 p-4">
                <div
                  className='flex items-end gap-2'>
                  <img 
                    src={Like} 
                    alt="like" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {like}
                  </span>
                </div>
                <div
                  className='flex gap-2'>
                  <img 
                    src={Love} 
                    alt="love" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {love}
                  </span>
                </div>
                <div
                  className='flex gap-2'>
                  <img 
                    src={Funny} 
                    alt="funny" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {funny}
                  </span>
                </div>
                <div
                  className='flex gap-2'>
                  <img 
                    src={Surprise} 
                    alt="surprise" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {surprise}
                  </span>
                </div>
                <div
                  className='flex gap-2'>
                  <img 
                    src={Sad} 
                    alt="sad" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {sad}
                  </span>
                </div>
                <div
                  className='flex gap-2'>
                  <img 
                    src={Angry} 
                    alt="angry" 
                  />
                  <span
                    className='text-xs font-bold text-white'>
                    {angry}
                  </span>
                </div>
              </div>
            </div>
          )
        }
    </>
  )
}

export default Reaction
