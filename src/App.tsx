import { useState } from "react";
import Todo from "../domains/Todo";
import Id from "../domains/Id";
import Title from "../domains/Title";
import Description from "../domains/Description";

function App() {
  const sampleTodo: Todo[] = [
    {
      id: new Id(Date.now()),
      title: new Title("Sample Title"),
      description: new Description("Sample Description"),
    },
  ];
  const [todos, setTodos] = useState<Todo[]>(sampleTodo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    const newTodo = Todo.create(title, description);
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => id != todo.id.value));
  };
  const updateTodo = () => {
    // TODO
  };

  return (
    <div className="text-5xl font-extrabold text-transparent bg-gradient-to-t from-pink-500 to-violet-500">
      <div className="">
        <h1>REACT TODO</h1>
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
      <ul>
        {todos.map((it) => (
          <li key={it.id.value}>
            <strong>TIMESTAMP:</strong>
            {it.id.value}
            <br />
            <strong>TITLE:</strong>
            {it.title.value}
            <br />
            <strong>DESCRIPTION:</strong>
            {it.description.value}
            <br />
            <button onClick={() => deleteTodo(it.id.value)}>DELETE TODO</button>
            <br />
            <button onClick={() => updateTodo()}>UPDATE TODO</button>
          </li>
        ))}
      </ul>
      <h1>REDUX TODO</h1>
      <h1>NEST.JS TODO</h1>
      <h1>KOTLIN TODO</h1>
      <h1>RUST TODO</h1>
    </div>
  );
}

export default App;
