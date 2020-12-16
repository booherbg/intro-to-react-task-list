# Intro to React: Let's build a Task List

This is a standard app built with Create React App. 
It's a little task manager. You can see a list of all
tasks, create a new task, complete a task, and delete
tasks. A task looks like this:

``` json
{
   "id": 1,
   "description": "Get Groceries",
   "done": false,
   "createdAt": "2020-12-17T10:00:00.000Z",
   "updatedAt": "2020-12-17T10:00:00.000Z",
}
```

To get started simply run `npm install`.

Dependencies:
   - react
   - momentjs
   - bootstrap (CSS only, no components)

`src/utils/api.js` holds functions that store the data
in a local array, but these functions are meant to be
replaced with HTTP calls once we ship data off to the server. The next id is tracked with a JavaScript generator function. Neat!

All components are functional with hooks. Flow is:
   - `index.js` mounts `<App />` to the DOM
   - `App.js` loads up the `<TaskTable />`
   - `<TaskTable />` holds the state for the tasks list
      and loads the `<TaskForm />` and `<TaskRows />`,
      padding each a reference to a local function that
      refreshes the task list so that the children components can call that function when they update or create tasks
   - `src/utils/api.js` holds mock functions that represent local state store and are meant to be swapped out for backend API calls eventually.
   - `src/utils/icons.js` hold SVG icons from Bootstrap
   - ... that's it!

## Our Tasks