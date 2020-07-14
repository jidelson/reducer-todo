
export const initialState = {
   todos:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
   }] 
   
};

export const reducer = (state, action) => {
    switch(action.type){
      case 'ADD_TODO':
      return {
        ...state,
       todos: [...state.todos, action.payload]
      };
      case 'CLEAR_TODO':
      return{
        ...state,
        todos: state.todos.filter((task) => {
            return !task.completed
        })
      };
      case 'TOGGLE_TODO':
      return{
        todos: state.todos.map((task, idx) => 
        idx === action.idx ? {...task, completed: !task.completed} : task)

      }
         default:
           return state;
    }}