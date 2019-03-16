export const todoList = (todo)=>{
    
    var hasil = todo.length

    return{
        type: 'TODO_LIST',
        payload: hasil
    }
}