import { ITask } from "../types/ITask";
import "./task-header.css";

interface ITaskHeader {
  tasks: ITask[]
}

function TaskHeader({tasks}: ITaskHeader) {
  function countOfCompletedTasks() {
    return tasks.reduce((acc: number, cur: ITask) => {
      const completed = cur.completed ? acc + 1 : acc;

      return completed;
    }, 0);
  }

  return (
    <div className="tasks-content__header">
      <div className="tasks-content__header-created">
        <span>Tarefas criadas</span>
        <div>{tasks.length}</div>
      </div>
      <div className="tasks-content__header-finished">
        <span>Concluídas</span>
        <div>
          {tasks.length === 0
            ? "0"
            : `${countOfCompletedTasks()} de ${tasks.length}`}
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;
