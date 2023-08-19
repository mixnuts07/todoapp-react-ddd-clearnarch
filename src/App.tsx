import { useState } from "react";
import Todo from "../domains/Todo";
import Id from "../domains/Id";
import Title from "../domains/Title";
import Description from "../domains/Description";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const todos = [
  //   {
  //     id: Date.now(),
  //     title: title,
  //     description: description,
  //   },
  // ];
  // const id = new Id(1);
  // const title = new Title("TITLE");
  // const description = new Description("DESCRITPION");
  // const tmp: Todo[] = [
  //   {
  //     id: id,
  //     title: title,
  //     description: description,
  //   },
  // ];
  // const sample: Todo[] = [
  //   {
  //     id: new Id(2),
  //     title: title,
  //     description: description,
  //   },
  // ];
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

  // const [todo, setTodo] = useState<Todo[]>(tmp);
  return (
    <div className="text-amber-800">
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
        <div key={it.id}>
          <h1>{it.id}</h1>
          <h1>{it.title}</h1>
          <h1>{it.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
