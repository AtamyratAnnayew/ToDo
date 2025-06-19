import React from "react";

type ToDo = {
  name: string;
  lastName: string;
  age: number;
};

type ToDoProps = {
  deleteToDo: (name: string) => void;
};

const TodoPage = ({ deleteToDo }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-black">
        <span className="font-semibold">{item.name}</span> -{" "}
        <span>{item.lastName}</span> - <span>{item.age}</span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => onDelete(item.name)}
          className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-2xl transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
