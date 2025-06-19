import { useState } from "react";
import "./App.css";

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
      { name, lastName, age: Number(age) }, // Convert age to a number
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
          className=" cursor-pointer w-full py-2 bg-black text-white rounded-2xl hover:bg-gray-800 transition duration-300"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {todo.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-black">
              <span className="font-semibold">{item.name}</span> 
              <span>{item.lastName}</span> 
              <span>{item.age}</span>
            </div>
            <button
              onClick={() => deleteToDo(item.name)}
              className="cursor-pointer text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-2xl transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
