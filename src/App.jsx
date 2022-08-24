import Post from './components/Post';

const App = () => {

  return (
    <div
      className='bg-indigo-200 md:h-screen flex justify-center items-center'>
      <div
        className='md:grid grid-cols-2 md:w-4/5 11/12'>
          <Post
            avatar='https://cdn.dribbble.com/users/544003/screenshots/5947752/spiderman_miles.jpg'
            name='Spiderman'
            user='@spiderman'             
            photo='https://cdn.dribbble.com/users/1735338/screenshots/5568911/media/07f78b336b7b93ef8df08d626948271a.jpg'
          />
          <Post
            avatar='https://cdn.dribbble.com/users/58050/screenshots/14231495/media/5cffafebda9af3c553d2fc4197545833.jpg'
            name='Iron Man'
            user='@ironman'             
            photo='https://cdn.dribbble.com/users/1276550/screenshots/3276500/media/7aea4e6ab0cd2346b4e68a17b8d043b0.jpg'
          />
      </div>
    </div>
  )
}

export default App
