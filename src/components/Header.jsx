import Photo from './Photo'

const Header = ({ avatar, name, user }) => {
  return (
    <header
      className='bg-white px-5 h-20 flex rounded-t-xl'>
      <div
        className='flex items-center gap-3'>
        <Photo
          photo={avatar} 
          type='avatar'
        />
        <div
          className='flex flex-col'>
          <h2
            className='text-sm font-bold'>
            {name}
          </h2>
          <p
            className='text-gray-500 text-xs font-bold'>
            {user}
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
