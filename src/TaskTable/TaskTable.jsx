import { React, useState, useEffect } from 'react';
import { getTasks } from '../utils/api';
import TaskForm from './TaskForm';
import TaskRow from './TaskTableRow';

const TaskTable = () => {
   // TODO
   // const [tasks, setTasks] = useState([]);

   const refreshTasks = () => {
      // TODO
   }

   // TODO
   // useEffect(refreshTasks, []);

   return <>
      <TaskForm refreshTasks={refreshTasks} />
      <h2>Current Tasks:</h2>

      <table className="table table-sm table-striped table-bordered bg-light">
         <thead className="thead-dark">
            <tr>
               <th width='5%'></th>
               <th width='70%'>Description</th>
               <th width='20%'>Created</th>
               <th width='5%'></th>
            </tr>
         </thead>
         <tbody>
            { /* TODO */ }
         </tbody>
      </table>
   </>
}

export default TaskTable;
