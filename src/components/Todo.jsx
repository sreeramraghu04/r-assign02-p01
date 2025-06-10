import React from "react";

const Todo = ({ item, taskStatus, removeTask }) => {
  return (
    <div
      className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-sm mx-auto sm:mx-0 mt-10"
      key={item.id}
    >
      <div className="flex flex-col">
        <div>
          <h1 className="text-lg font-bold">
            {item.id}. {item.title}
          </h1>
          <div className="mt-6">
            <h1 className="flex flex-wrap text-md">
              Status :
              {item.status ? (
                <span className="ml-1 text-green-400">Completed</span>
              ) : (
                <span className="ml-1">Pending</span>
              )}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <button
            className="bg-blue-800 p-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => {
              taskStatus(item.id);
            }}
          >
            Update Status
          </button>
          <button
            className="bg-blue-800 p-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => {
              removeTask(item.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
