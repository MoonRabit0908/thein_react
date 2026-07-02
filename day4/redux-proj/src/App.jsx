import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counterSlice";
import { addTodo, deleteTodo } from "./todoSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todo.list);

  const todoDispatch = useDispatch();

  const handleAdd = () => {
    if (text === "") return;
    todoDispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <h1> {count} </h1>
      <button onClick={() => dispatch(increase())}>더하기</button>
      <button onClick={() => dispatch(decrease())}>빼기</button>
      <hr />

      <h1>할 일 목록</h1>
      <p>
        목록 입력 : <input value={text} onChange={(e) => setText(e.target.value)} autoFocus />
      </p>
      <br />
      <button type="text" onClick={handleAdd}>추가</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => todoDispatch(deleteTodo(todo.id))}>삭제</button>
        </div>
      ))}
    </>
  );
}

export default App;