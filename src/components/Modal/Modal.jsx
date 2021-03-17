import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Modal = ({ title, isOpen, onCancel, children }) => {
  console.log(isOpen)
  return (
    <>
      <div className="modalOverlay">
        <div className="modalWindow">
          <div className="modalHeader">
            <div className="modalTitle">{title}</div>
            {/* <Ikon name="times" onClick={onCancel} /> */}
          </div>
          <div className="modalBody">{children}</div>
          <div className="modalFooter">
            <Button onClick={onCancel}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultPros = {
  title: 'Заголовок',
  isOpen: false,
  onCancel: () => { },
  children: null,
};

export default Modal;
