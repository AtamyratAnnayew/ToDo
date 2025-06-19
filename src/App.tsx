import { useState } from "react";
import "./App.css";
import TodoPage from "./components/todoPage"; // Make sure the path is correct

type ToDo = {
  name: string;
  lastName: string;
  age: number;
};

function App() {
  const [todo, setTodo] = useState<ToDo[]>([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const add = () => {
    if (name.trim() === "" || lastName.trim() === "" || age.trim() === "") return;

    setTodo((prevTodos) => [
      ...prevTodos,
      { name, lastName, age: Number(age) },
    ]);
    setName("");
    setLastName("");
    setAge("");
  };

  const deleteToDo = (name: string) => {
    setTodo((prevTodos) => prevTodos.filter((item) => item.name !== name));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="text"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <button
          onClick={add}
          className="cursor-pointer w-full py-2 bg-black text-white rounded-2xl hover:bg-gray-800 transition duration-300"
        >
          Add
        </button>
      </div>

      {/* ✅ Styled wrapper around TodoPage list */}
      <div className="space-y-4">
        {todo.map((item, index) => (
          <TodoPage key={index} item={item} deleteToDo={deleteToDo} />
        ))}
      </div>
    </div>
  );
}

export default App;
