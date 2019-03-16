import React from'react'
import {hitungKata} from '../1.actions' 
import {connect} from 'react-redux'



class HitungKata extends React.Component{
    handleCountWord = ()=>{
        var word = this.refs.text.value
        this.props.hitungKata(word)
    }
    render(){
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <textarea ref="text" onChange={this.handleCountWord} class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        <p> {this.props.kata} Kata</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        kata :state.word.word
    }
        
    
}

export default connect(mapStateToProps,{hitungKata})(HitungKata);