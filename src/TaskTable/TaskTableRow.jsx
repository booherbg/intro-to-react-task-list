import { deleteTask, setTaskStatus } from '../utils/api';
import { trashIcon, checkboxCompleteIcon, checkboxEmptyIcon } from '../utils/icons';
import moment from 'moment';

const TaskTableRow = (props) => {
   const handleDelete = (taskId) => {
      deleteTask(taskId);
      props.refreshTasks();
   }
   
   const handleCheckbox = (taskId, doneStatus) => {
      // console.log(doneStatus);
      setTaskStatus(taskId, doneStatus);
      props.refreshTasks();
   }

   const { task } = props;
   return <>
      <tr
         key={`task-${task.id}`}
         className={(task.done ? 'bg-success text-white' : '')}>
         <td className="align-middle text-center">
            <button
               className={`btn btn-lg shadow-none ${task.done ? 'text-white' : ''}`}
               onClick={(() => handleCheckbox(task.id, !task.done))}>
               {task.done ? checkboxCompleteIcon : checkboxEmptyIcon}
            </button>
         </td>
         <td className="align-middle">{task.description}</td>
         <td className="align-middle">{moment(task.createdAt).fromNow()}</td>
         <td className="align-middle text-center">
            <button
               className={'btn btn-sm btn-danger'}
               onClick={() => handleDelete(task.id)}>
               {trashIcon}
            </button>
         </td>
      </tr>
   </>
}

export default TaskTableRow;