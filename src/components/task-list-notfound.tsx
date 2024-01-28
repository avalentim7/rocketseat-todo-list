import { PiClipboardTextLight } from "react-icons/pi";
import "./task-list-notfound.css";

function TaskListNotFound() {
  return (
    <div className="tasks-content__notfound">
      <div className="tasks-content__notfound-icon">
        <PiClipboardTextLight size={80} />
      </div>
      <div className="tasks-content__notfound-messages">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}

export default TaskListNotFound;
