import React from 'react'
import '../support/regis.css'
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {RegisterUserUltimate} from '../1.actions/userAction'

import Loader from 'react-loader-spinner'

class Register extends React.Component{
    state = {error:''}
    renderErrorMessage = ()=>{
        if (this.state.error!==""){
            return <div className="alert alert-danger mt-3" role="alert"> {this.state.error}</div>
        }
    }
    renderLoaderOrBtn = ()=>{
        if(this.props.loading === true){
            return <Loader
            type="ThreeDots"
            color="#FF0000"
            height="30"
            width="30"
            ></Loader>
         }else{
             return <button onClick={this.registerUser} type="button"  className="btn btn-primary" style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Sign Up!</button>
         }

    }
    registerUser = ()=>{
        var username = this.refs.username.value 
        var password = this.refs.password.value 
        var password2 = this.refs.password2.value 
        var email = this.refs.email.value 
        var phone = this.refs.phone.value 

        if(password !== password2){
            this.setState({error:"Password Did Not Match"})
        }else if(username === ""|| password2 ===""||password ===""||email ===""||phone===""){
            this.setState({error: "Mesti isi"})
        }else{
            this.props.RegisterUserUltimate(username,password,email,phone)
            this.setState({error: "Register Berhasil"})
        }

        
        
    }
    
    
    render(){
        if(this.props.user !== ""){
            return <Redirect to='/' />
        }
        return(
        <div className="container">
         
           <form>
                        <div className="form-group">
                        <label>Username</label>
                        <input ref="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="inputUsername" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input ref="password" type="password" className="form-control" id="Input Password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Re-Password</label>
                        <input ref="password2" type="password" className="form-control" id="Retype Password" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                        <input ref="email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="inputUsername" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                        <label>Phone</label>
                        <input ref="phone" type="number" className="form-control" id="exampleInputEmail1" aria-describedby="inputUsername" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                        {this.renderLoaderOrBtn()}
                        {this.renderErrorMessage()}
                        </div>
                       
                      
                    </form>
            
            </div>
        )
    }
}
const mapStatetoProps = (state)=>{
    return{
        loading :state.user.loading,
        user :state.user.username,
        error:state.user.error
    }
}
export default connect(mapStatetoProps,{RegisterUserUltimate})(Register);