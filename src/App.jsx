import { useEffect, useState } from "react";
import Todo from "./components/Todo";

//!Local Storage
const localDataas = () => {
  let list = localStorage.getItem("data");
  return list ? JSON.parse(list) : [];
};

/* const localDataa = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}; */

function App() {
  const [todo, setTodos] = useState(localDataas());
  const [task, setTask] = useState("");

  //! add task
  const addTask = (e) => {
    if (!task) {
      alert("Please enter a task first");
    } else {
      let newId = todo.length + 1;
      let newEntry = { id: newId, title: task, status: false };
      setTodos([...todo, newEntry]);
      setTask("");
    }
  };

  //! remove task
  const removeTask = (id) => {
    setTodos(
      todo.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //! useEffect
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todo));
  }, [todo]);

  //! task status
  const taskStatus = (id) => {
    setTodos(
      todo.map((item) => {
        return item.id === id ? { ...item, status: true } : item;
      })
    );
  };

  return (
    <div className="pt-16 text-white bg-gradient-to-b from-fuchsia-900 to-slate-950 min-h-screen w-full px-4">
      <div className="flex justify-center">
        <div className="bg-white flex w-full max-w-xl p-4 gap-3 sm:gap-0 rounded-lg">
          <input
            className="outline-none w-full p-2 text-black"
            value={task}
            type="text"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="sm:ml-2 px-8 py-2 rounded-xl bg-fuchsia-900 text-white w-full sm:w-auto cursor-pointer hover:bg-fuchsia-800"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-2 justify-center lg:ml-20">
        {todo.map((item) => {
          return (
            <Todo
              item={item}
              key={item}
              taskStatus={taskStatus}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
