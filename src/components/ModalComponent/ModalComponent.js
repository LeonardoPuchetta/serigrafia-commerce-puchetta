import React from 'react';
import { Modal } from 'react-bootstrap';

import './ModalComponent.css'

export default function ModalComponent(props) {

  const {title,bodyModal,isVisibleModal,handleCloseModal,size} = props;

  return (
              <Modal show={isVisibleModal} onHide={handleCloseModal} size={size}>
                  <Modal.Header closeButton>
                      <Modal.Title className='custom-modal-title'>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {bodyModal}
                  </Modal.Body>
              </Modal>
  )
}
