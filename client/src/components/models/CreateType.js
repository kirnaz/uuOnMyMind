import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const CreateType = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control>placeholder={"Enter name of new Type"}</Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
