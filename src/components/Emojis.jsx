import { emojis } from '../helpers/index.js'

const Emojis = (
  { 
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
  
  const handleClick = value => {
    console.log(value);
    switch(value) {
      case "like":
        setLike(like + 1);
      break;
      case "love":
        setLove(love + 1);
      break;
      case "funny":
        setFunny(funny + 1);
      break;
      case "surprise":
        setSurprise(surprise + 1);
      break;
      case "sad":
        setSad(sad + 1);
      break;
      case "angry":
        setAngry(angry + 1);
      break;
      default:
        null;
      break;
    }
  }

  return (
    <div
      className='flex justify-center gap-2'>
      {
        emojis.map(emoji => (
          <img
            onClick={() => handleClick(emoji.name)}
            key={emoji.id}
            className='w-10 cursor-pointer'
            src={emoji.url} 
            alt={`${emoji.name}-emoji`} 
          />
        ))
      }
    </div>
  )
}

export default Emojis
