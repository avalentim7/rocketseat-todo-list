import { ITask } from "../types/ITask";
import { HiOutlineTrash } from "react-icons/hi2";
import "./task-list.css";

interface ITaskList {
  tasks: ITask[];
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function TaskList({ tasks, onCompleteTask, onDeleteTask }: ITaskList) {
  return (
    <div className="tasks-content__list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`tasks-content__list-card ${
            task.completed ? "--completed" : ""
          }`}
        >
          <div className="tasks-content__list-card-checkbox">
            <input
              id={`task-chk-${task.id}`}
              type="checkbox"
              readOnly
              checked={task.completed}
            />
            <label
              htmlFor="task-chk"
              onClick={() => onCompleteTask(task.id)}
            />
          </div>
          <span>{task.text}</span>
          <div
            className="tasks-content__list-card-delete"
            onClick={() => onDeleteTask(task.id)}
          >
            <HiOutlineTrash size={24} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
