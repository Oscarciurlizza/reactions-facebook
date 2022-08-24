import Header from "./Header"
import Photo from "./Photo"
import Footer from "./Footer"

const Post = ({ avatar, name, user, photo }) => {
  return (
    <div
      className='w-80 mx-auto shadow-lg shadow-gray-500 mt-4 mb-4 md:mt-0 md:mb-0'>
      <Header 
        avatar={avatar}
        name={name}
        user={user}
      />
      <Photo
        photo={photo}
      />
      <Footer />
    </div>
  )
}

export default Post
