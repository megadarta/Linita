import React from 'react';
import Swiper from 'react-id-swiper';

const Scrollbar = () => {
  const params = {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }
  return (
    <Swiper {...params}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Swiper>
  )
};
export default Scrollbar;