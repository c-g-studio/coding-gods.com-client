import React, { FC } from 'react';
import s from './Modal.module.css';

type TModalProps = {
  children: React.ReactNode;
};

const Modal: FC<TModalProps> = ({ children }) => {
  return (
    <div
      className={`absolute right-0 top-[113px] flex h-full w-full md:w-[334px] ${s.modalBlur}`}
    >
      {children}
    </div>
  );
};

export default Modal;
