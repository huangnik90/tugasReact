import { connect } from 'react-redux'
import { hitungKata2 } from './../1.actions'
import React from 'react'

class Latihan3 extends React.Component{
    state = {toDo : [], selected:-1}

    renderState = () => {
        var jsx = this.state.toDo.map((val,index) => {
            if (this.state.selected === index){
                return(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td><input type="text" ref="editData" className="form-control" defaultValue={val}></input></td>
                    <td><input type="button" className="btn btn-primary" onClick={this.handleSaveBtn} value="Save"/></td>
                    <td><input type="button" className="btn btn-danger" onClick={this.handleCancel}value="Cancel"/></td>
                </tr>
                )
            }
            return(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{val}</td>
                    <td><input type="button" className="btn btn-primary" onClick={()=>{this.handleEditBtn(index)}} value="Edit"/></td>
                    <td><input type="button" className="btn btn-danger" onClick={()=>{this.handleDelete(index)}}value="Hapus"/></td>
                </tr>
            )
        })
        return jsx
    }
    handleEditBtn = (no)=>{
        this.setState({selected:no})
    }
    handleSaveBtn = ()=>{
        var newInput = this.refs.editData.value
        var arr = [...this.state.toDo]
        arr[this.state.selected] = newInput
        this.setState({selected:-1,toDo : arr})
    }
    handleCancel = ()=>{
        this.setState({selected:-1})
    }
    handleBtnAdd = () => {
        var todo = this.refs.todo.value
        this.setState({toDo:[...this.state.toDo , todo]})
        this.refs.todo.value = ''
        this.props.hitungKata2(this.state.toDo.length + 1)
    }
    handleHapusAll= () => {
        this.setState({toDo : []})
        this.props.hitungKata2(0)
    }
    hapusAllBtnRender = () => {
        if(this.state.toDo.length > 0){
            return <input type="button" className="btn btn-default border-primary" value='Hapus All' onClick={this.handleHapusAll} />
        }
    }
    handleDelete = (no)=>{
        this.state.toDo.splice(no,1)
        this.setState({selected:-1})
    }
    render(){
        return(
            <div style={{marginTop:'40px'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="What will you do?" ref='todo' />
                    </div>
                    <div className = 'col-md-2'>
                        <input type="button" className="btn btn-default border-primary" value='Add' onClick={this.handleBtnAdd} />
                    </div>
                    <div className='col-md-4'>
                        <table class="table table-hover">
                        <tbody>
                            
                           {this.renderState()}
                         
                        </tbody>
                        </table>
                            {this.hapusAllBtnRender()}

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{hitungKata2})(Latihan3);