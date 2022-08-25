import { useState, useEffect } from "react";

import Icon from "./Icon";
import ModalEmojis from "./ModalEmojis";
import Reaction from "./Reaction";

const Footer = () => {

  const [mouseEnter, setMouseEnter] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [like, setLike] = useState(JSON.parse(localStorage.getItem('like')) ?? 0);
  const [love, setLove] = useState(JSON.parse(localStorage.getItem('love')) ?? 0);
  const [funny, setFunny] = useState(JSON.parse(localStorage.getItem('funny')) ?? 0);
  const [surprise, setSurprise] = useState(JSON.parse(localStorage.getItem('surprise')) ?? 0);
  const [sad, setSad] = useState(JSON.parse(localStorage.getItem('sad')) ?? 0);
  const [angry, setAngry] = useState(JSON.parse(localStorage.getItem('angry')) ?? 0);

  useEffect(() => {
   localStorage.setItem('like', JSON.stringify(like));
  }, [like]);
  useEffect(() => {
   localStorage.setItem('love', JSON.stringify(love));
  }, [love]);
  useEffect(() => {
   localStorage.setItem('funny', JSON.stringify(funny));
  }, [funny]);
  useEffect(() => {
   localStorage.setItem('surprise', JSON.stringify(surprise));
  }, [surprise]);
  useEffect(() => {
   localStorage.setItem('sad', JSON.stringify(sad));
  }, [sad]);
  useEffect(() => {
   localStorage.setItem('angry', JSON.stringify(angry));
  }, [angry]);

  const handleMouseEnter = () => {
    setMouseEnter(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  }

  return (
    <div
      className='bg-white px-5 h-20 flex justify-between items-center rounded-b-xl relative'>
      <Icon 
        handleMouseEnter={handleMouseEnter}
      />
      {
        mouseEnter && (
          <ModalEmojis
            setMouseEnter={setMouseEnter}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            like={like}
            setLike={setLike}
            love={love}
            setLove={setLove}
            funny={funny}
            setFunny={setFunny}
            surprise={surprise}
            setSurprise={setSurprise}
            sad={sad}              
            setSad={setSad}
            angry={angry}
            setAngry={setAngry}
          />
        )
      }
      <Reaction 
        like={like}
        love={love}
        funny={funny}
        surprise={surprise}
        sad={sad}
        angry={angry}
      />
    </div>
  )
}

export default Footer
