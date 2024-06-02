import { Button } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import EditNote from "../components/models/EditNote";

const Note = () => {
    const note = {id:1, name: "Koupit salam", description:"ergtrh tr h trghert h tre h ert h"}
    return (
        <Container>
            <Col md={3}>
                <div>{note.name}</div>
                <div>{note.id}</div>
                <div>{note.description}</div>
                <Button>Edit Note</Button>
                <EditNote />
            </Col>
        </Container>
    )
}

export default Note;