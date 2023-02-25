import React from 'react';
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        
        {children}
        {/* <button className="modal-close" onClick={onClose}>
          X
        </button> */}
        <button onClick={onClose}>Cancelar</button>
      </div>
      
    </div>
  );
};

export default Modal;
