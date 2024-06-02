import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NoteItem from "./NoteItem";

const NotesList = observer(() => {
  const { notes } = useContext(Context);

  return (
    <Row className="d-flex">
        {notes.notes.map(notes => 
            <NoteItem key={notes.id} notes={notes} />
          )}
      
    </Row>
  );
});

export default NotesList;
