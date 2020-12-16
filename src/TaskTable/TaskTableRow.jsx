import { deleteTask, setTaskStatus } from '../utils/api';
import { trashIcon, checkboxCompleteIcon, checkboxEmptyIcon } from '../utils/icons';
import moment from 'moment';
import TaskTable from './TaskTable';

const TaskTableRow = (props) => {
   const handleDelete = (taskId) => {
      // TODO
   }
   
   const handleCheckbox = (taskId, doneStatus) => {
      // TODO
   }

   const { task } = props;

   // TODO
   return <> { /* TODO */} </>
}

export default TaskTableRow;