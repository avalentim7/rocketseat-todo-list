import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button";
import Header from "./components/header";
import { ITask } from "./types/ITask";
import TaskHeader from "./components/task-header";
import TaskListNotFound from "./components/task-list-notfound";
import TaskList from "./components/task-list";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  function handleAddTask() {
    if (!taskText) return;

    setTasks((prevState) => [
      ...prevState,
      { id: uuidv4(), completed: false, text: taskText },
    ]);

    setTaskText("");
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja realmente apagar esta tarefa?")) return;

    setTasks(updatedTasks);
  }

  return (
    <main className="container">
      <Header />
      <section className="form-container">
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <Button onClick={handleAddTask}>
          Criar
          <AiOutlinePlusCircle size={16} />
        </Button>
      </section>
      <section className="tasks-content">
        <TaskHeader tasks={tasks} />

        {tasks.length === 0 ? (
          <TaskListNotFound />
        ) : (
          <TaskList
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </section>
    </main>
  );
}

export default App;
