import React from 'react'
import {todoList} from '../1.actions/todoList'
import {connect} from 'react-redux'

class TodoList extends React.Component{
    state ={arr:[],hasil:['makan'],selected:-1}

    handleEditBtn= (no)=>{
        this.setState({selected:no})
    }

    addListTodo = ()=>{
        var inputData = this.refs.list.value 
        if(inputData===""){
            alert("data kosong")
        }else{
            this.state.arr.push(inputData)
            var result = this.state.arr.map((val,index)=>{
              
                if(this.state.selected === index){
                    return(
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td><input type="text" className="form-control" defaultValue={val}></input></td>
                            <td><input type="button" className="btn btn-success" value="Save"/></td>
                            <td><input type="button" className="btn btn-danger" value="Cancel"/></td>
                    </tr>
                    )
                }
                return (
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{val}</td>
                        <td><input type="button" className="btn btn-primary" onClick={()=>{this.handleEditBtn(index)}} value="Edit"/></td>
                        <td><input type="button" className="btn btn-danger" value="Hapus"/></td>
                    </tr>
                )
                
            })
            this.setState({hasil:result})
            this.props.todoList(this.state.arr)
            this.refs.list.value=""
        }   
    }
    hapusAll =()=>{
        if (this.state.arr.length >0){
            return <input className="btn btn-primary" type="button" value="Delete" onClick={this.deleteArr}></input>
        }
    }
    deleteArr = ()=>{
        
        this.setState({arr:[],hasil:[]})

        this.state.arr.splice(0,this.state.arr.length)
        this.props.todoList(this.state.arr)
       
    }

    render(){
        return(
            <div className="container">
            <div className="row">
               <div className="col-6 col-md-6">
               <form>  
                   <h3>Todo List:</h3>
                   <hr></hr>
                   
                   <input ref="list" className="form-control" type="text" placeholder="Target hari ini"></input>
                   <input onClick={this.addListTodo} type="button" className="btn btn-primary" value="Add"></input>
                   
               </form>
                   
               </div>
               <div className="col-6 col-md-6">
                   <h3>Todo List Today</h3>
                   <hr></hr>
                   <p>{this.state.hasil}</p>
                   
                   <p>{this.hapusAll()}</p>
               
               </div>
            </div>
   
        </div>   
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        todo :state.list.todoList
    }
}

export default connect(mapStateToProps,{todoList})(TodoList) ;