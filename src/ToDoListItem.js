import React from "react";

const ToDoListItem = (props) => {
  const { toDo, index } = props;
  return (
    <li>
      <input
        onChange={(event) => {
          props.checkDoneHandler(event, index);
        }}
        type="checkbox"
        checked={toDo.done}
      />{" "}
      <span
        style={{
          textDecoration: toDo.done ? "line-through" : "inherit",
        }}
      >
        {toDo.title}
      </span>
      <button onClick={() => props.removeToDo(index)}>Remove</button>
    </li>
  );
};

export default ToDoListItem;
