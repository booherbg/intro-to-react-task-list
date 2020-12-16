import moment from 'moment';

let tasks = []

// Generators are neat. They can have state and
// keep track of where they left off
let id=0;
function* nextIdGenerator() {
   while (true) {
      yield id++;
   }
}

const nextId = nextIdGenerator();

export const setTaskStatus = (taskId, status) => {
   // Copy the tasks but only update the status if
   // it matches taskId
   tasks = tasks.map((task) => ({ 
         ...task, 
         done: (task.id === taskId ? status : task.done )
      }))
}

export const deleteTask = (taskId) => {
   tasks = tasks.filter( (task) => task.id !== taskId);
}

export const createTask = (description) => {
   const newTask = {
      id: nextId.next().value,
      description: description,
      createdAt: moment().format(),
      done: false
   }
   // Create a copy of tasks so that React doesnt freak out
   tasks = [... tasks, newTask];
}

export const getTasks = () => tasks;

// Create a couple of starter tasks
createTask("Get Groceries");
createTask("Teach Intro to React Workshop");