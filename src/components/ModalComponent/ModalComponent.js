import React from 'react';
import { Modal ,Button} from 'react-bootstrap';

export default function ModalComponent(props) {

  const {title,bodyModal,isVisibleModal,handleCloseModal} = props;

  return (
              <Modal show={isVisibleModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{bodyModal}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                  </Modal.Footer>
              </Modal>
  )
}
