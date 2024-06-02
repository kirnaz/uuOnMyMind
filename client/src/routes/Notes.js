import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "../components/Filter";
import NotesList from "../components/NotesList";
import { Button } from "react-bootstrap";
import CreateType from "../components/models/CreateType";
import CreateNote from "../components/models/CreateNote";

const Notes = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Filter />
                </Col>
                <Col md={9}>
                    <NotesList />
                </Col>
                <Button >Create Note</Button>
                <Button >Create Type</Button>
                <CreateType />
                <CreateNote />
            </Row>
        </Container>
    )
}

export default Notes;