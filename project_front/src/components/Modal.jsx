import React from 'react';
import Style from './Modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modal} id={Style.modalDiv}>
        {children}
        <div className={Style.centerButton}>
          <button className={Style.closeModalButton} onClick={onClose}>Cancelar</button>
        </div>
      </div>

    </div>
  );
};

export default Modal;
