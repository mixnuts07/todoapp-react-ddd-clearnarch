import { useState } from "react";
import Todo from "../domains/Todo";
import Id from "../domains/Id";
import Title from "../domains/Title";
import Description from "../domains/Description";

function App() {
  const id = new Id(1);
  const title = new Title("TITLE");
  const description = new Description("DESCRITPION");
  const tmp: Todo[] = [
    {
      id: id,
      title: title,
      description: description,
    },
  ];

  const [todo, setTodo] = useState<Todo[]>(tmp);
  return (
    <div className="text-amber-800">
      <input type="text" />
      <button>ADD TODO</button>
      {todo.map((it) => (
        <div key={it.id.id}>
          <h1>{it.id.id}</h1>
          <h1>{it.title.title}</h1>
          <h1>{it.description.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
