
const Photo = ({ photo, type }) => {
  return (
    <div
      className={`bg-white ${type !== 'avatar' ? 'w-full' : ''}`}>
      <img
        className={`object-cover ${type === 'avatar' ? 'w-8 h-8 rounded-full border-2 border-green-300' : 'w-full h-96'}`} 
        src={photo} 
        alt="image-post" 
      />
    </div>
  )
}

export default Photo
