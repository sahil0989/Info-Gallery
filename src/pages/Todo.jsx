import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase"; // change path if needed

import {
  Trash2,
  Pencil,
  Search,
  Plus,
  Save,
  X,
} from "lucide-react";

const Todo = () => {
  // =========================
  // STATES
  // =========================
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  // Edit states
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // =========================
  // FETCH TODOS
  // =========================
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "todos"),
      (snapshot) => {
        const allTodos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTodos(allTodos);
      }
    );

    return () => unsubscribe();
  }, []);

  // =========================
  // ADD TODO
  // =========================
  const addTodo = async () => {
    if (!task.trim()) return;

    try {
      await addDoc(collection(db, "todos"), {
        text: task,
        createdAt: serverTimestamp(),
      });

      setTask("");
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // DELETE TODO
  // =========================
  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // START EDIT
  // =========================
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  // =========================
  // SAVE EDIT
  // =========================
  const saveEdit = async (id) => {
    if (!editText.trim()) return;

    try {
      await updateDoc(doc(db, "todos", id), {
        text: editText,
      });

      setEditId(null);
      setEditText("");
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // SEARCH FILTER
  // =========================
  const filteredTodos = todos.filter((todo) =>
    todo.text?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      {/* =========================
          HEADER
      ========================= */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Firebase Todo App
        </h1>

        {/* =========================
            ADD TODO
        ========================= */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white"
          />

          <button
            onClick={addTodo}
            className="bg-white text-black px-5 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        {/* =========================
            SEARCH BAR
        ========================= */}
        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-white"
          />
        </div>

        {/* =========================
            TODOS LIST
        ========================= */}
        <div className="space-y-4">
          {filteredTodos.length === 0 ? (
            <div className="text-center text-gray-400 py-10">
              No Todos Found
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex justify-between items-center gap-4"
              >
                {/* =========================
                    TODO TEXT / EDIT INPUT
                ========================= */}
                <div className="flex-1">
                  {editId === todo.id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2 outline-none focus:border-white"
                    />
                  ) : (
                    <p className="text-lg break-words">
                      {todo.text}
                    </p>
                  )}
                </div>

                {/* =========================
                    ACTION BUTTONS
                ========================= */}
                <div className="flex items-center gap-3">
                  {editId === todo.id ? (
                    <>
                      {/* SAVE */}
                      <button
                        onClick={() => saveEdit(todo.id)}
                        className="bg-green-500 p-2 rounded-xl hover:scale-110 transition"
                      >
                        <Save size={18} />
                      </button>

                      {/* CANCEL */}
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 p-2 rounded-xl hover:scale-110 transition"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      {/* EDIT */}
                      <button
                        onClick={() => startEdit(todo)}
                        className="bg-blue-500 p-2 rounded-xl hover:scale-110 transition"
                      >
                        <Pencil size={18} />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-500 p-2 rounded-xl hover:scale-110 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;