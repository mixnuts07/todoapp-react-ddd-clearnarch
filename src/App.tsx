import { useState } from "react";
import Todo from "../domains/Todo";
import Id from "../domains/Id";
import Title from "../domains/Title";
import Description from "../domains/Description";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id != todo.id));
  };

  return (
    <div className="text-5xl font-extrabold text-transparent bg-gradient-to-t from-pink-500 to-violet-500">
      <div className="">
        <input
          type="text"
          placeholder="input your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="input your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => addTodo()}>ADD TODO</button>
      </div>
      {todos.map((it) => (
        <div key={it.id} className="">
          <h1>TIMESTAMP: {it.id}</h1>
          <h1>TITLE: {it.title}</h1>
          <h1>DESCRIPTION: {it.description}</h1>
          <button onClick={() => deleteTodo(it.id)}>DELETE TODO</button>
        </div>
      ))}
    </div>
  );
}

export default App;
