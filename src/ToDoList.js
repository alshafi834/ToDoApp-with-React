import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
  return (
    <ul>
      {props.toDos.map((toDo, index) => {
        return (
          <ToDoListItem
            key={index}
            index={index}
            toDo={toDo}
            checkDoneHandler={props.checkDoneHandler}
            removeToDo={props.removeToDo}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
