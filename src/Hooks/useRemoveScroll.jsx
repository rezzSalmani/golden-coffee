import { useEffect } from 'react';

export const useRemoveScroll = isModalOpen => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  // useEffect(() => {
  //     const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

  //     if (isModalOpen) {
  //       document.body.style.overflow = 'hidden';
  //       document.body.style.marginRight = `${scrollbarWidth}px`;
  //     } else {
  //       document.body.style.overflow = 'auto';
  //       document.body.style.marginRight = '0';
  //     }

  //     return () => {
  //       document.body.style.overflow = 'auto';
  //       document.body.style.marginRight = '0';
  //     };
  //   }, [isModalOpen]);
};
