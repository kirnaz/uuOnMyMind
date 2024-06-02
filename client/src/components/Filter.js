import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup';


const Filter = observer(() => {
    const {notes} = useContext(Context)
  return (
    <ListGroup>
      {notes.types.map(type => 
        <ListGroup.Item 
            style={{cursor: 'pointer'}}
            active={type.id === notes.selectedType.id}
            onClick={() => notes.setSelectedType(type)}
            key={type.id}
            >
            {type.name}
        </ListGroup.Item>
        )}
    </ListGroup>
  );
});

export default Filter;
