import React from "react";
import Style from './Modal.module.css'

function Modal(props) {
  const { title, children, onClose } = props;

  return (
    <div className={Style.modaloverlay}>
      <div className={Style.modal}>
        <div className="modal-header">
          <h2>{title}</h2>
          <div className="modal-content">{children}</div>
          <button className="modal-close-btn" onClick={onClose}>
            Cancelar
          </button>
        </div>

      </div>
    </div>
  );
}

export default Modal;
