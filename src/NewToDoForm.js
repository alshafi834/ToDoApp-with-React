import React from "react";

const NewToDoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitHandler}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        onChange={props.newToDoChange}
        id="newTodo"
        name="newTodo"
        type="text"
        value={props.newTodo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewToDoForm;
