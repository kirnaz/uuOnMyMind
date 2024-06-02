import React from "react";
import {Col, Card} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NOTE_ROUTE } from "../utils/consts";


const NoteItem = ({notes}) => {

  const history = useHistory()

  return (
    <Col md={3} className={"mt-3"} onClick={() => history.push(NOTE_ROUTE + '/' + notes.id)}>
        <Card style= {{width: 150, cursor: 'pointeer'}} border={"light"}>
            <div>{notes.name}</div>
            <div>Type</div>
            <div>Desc</div>
        </Card>
    </Col>
  );
};

export default NoteItem;
