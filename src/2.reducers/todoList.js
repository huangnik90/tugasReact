const INITIAL_STATE = {
    todoList : 0
}

export default (state = INITIAL_STATE,action) =>{
    if (action.type === "TODO_LIST") {
        return {...INITIAL_STATE, todoList: action.payload}
    } else {
        return state
    }
}