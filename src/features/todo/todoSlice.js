import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text:"Hello world"
    }]
}

export const todoSlice = createSlice({ //intial state ke andar ka ye obj hi state hein
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                   id: nanoid(), //unique id chahiye ***is id ke andar ek naye valye chali gayi hein
                   text: action.payload,
                }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer