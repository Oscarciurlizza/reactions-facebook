import { useState } from "react";

const ModalEmojis = (
  {
    mouseEnter,
    setMouseEnter,
    like,
    setLike,
    love,
    setLove,
    funny,
    setFunny,
    surprise,
    setSurprise,
    sad,         
    setSad,
    angry,
    setAngry,
  }) => { 

  const handleMouseLeave = () => {
    setMouseEnter(false);
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className='bg-white w-11/12 flex justify-center flex-row absolute bottom-16 right-20 rounded-full'>
        <img
          className='w-10 cursor-pointer'
          onClick={() => setLike(like + 1)} 
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif' 
          alt="#" 
        />
        <img
          className='w-10 cursor-pointer'
          onClick={() => setLove(love + 1)} 
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif' 
          alt="#" 
        />
        <img
          className='w-10 cursor-pointer'
          onClick={() =>setFunny(funny + 1)} 
          src='https://public-files.gumroad.com/pw6v4qlldf8h6ji2s0c5pimhsqlr' 
          alt="#" 
        />
        <img
          className='w-10 cursor-pointer'
          onClick={() => setSurprise(surprise + 1)} 
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif' 
          alt="#" 
        />
        <img
          className='w-10 cursor-pointer'
          onClick={() => setSad(sad + 1)} 
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eee1d34559659.56d59de621daa.gif' 
          alt="#" 
        />
        <img
          className='w-10 cursor-pointer'
          onClick={() => setAngry(angry + 1)} 
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif' 
          alt="#" 
        />
    </div>
  )
}

export default ModalEmojis
