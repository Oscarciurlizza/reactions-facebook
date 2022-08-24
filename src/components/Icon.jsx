import { VscGift ,VscComment, VscRocket } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { GrTip, GrNewWindow } from "react-icons/gr";



const Icon = ({ handleMouseEnter }) => {
  return (
    <div
      className='text-lg flex items-center gap-5'>
      <FcLike
          onMouseEnter={handleMouseEnter}
        />
      <GrTip />
      <GrNewWindow />
    </div>
  )
}

export default Icon
