import React from 'react'
import '../support/login.css'
import {connect} from'react-redux'
import {onLogin} from '../1.actions'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'

const kokie = new cookie()
class Login extends React.Component{
    componentWillReceiveProps(newProps){
        kokie.set("userData",newProps.username,{path:'/'})
        
    }
    btnLogin =() =>{
        var password = this.refs.password.value 
        var username = this.refs.username.value  
        
        this.props.onLogin(username,password)
    }
    renderBtnOrLoading = ()=>{
        if(this.props.loading === true){
           return <Loader
           type="ThreeDots"
           color="#FF0000"
           height="30"
           width="30"
           ></Loader>
        }else{
            return <button type="button" className="btn btn-primary" onClick={this.btnLogin} style={{width:"527px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
        }

        
    }
    renderErrorMessage=()=>{
        if (this.props.error !== ""){
          return  <div className="alert alert-danger mt-3" role="alert">
                    {this.props.error}
                  </div>
        }
    }

    render(){
        if(this.props.username !== ""){
            return <Redirect to='/' />
        }
        return(
            <div className="container">
            
                <div className="row loginStyle">
                   
                    <div className="col-6 col-md-6">
                    <p>Login Page</p>
                        <hr/>
                    <form >
                        <div className="form-group">
                        
                        <label><i class="far fa-user"></i> Username</label>
                        <input type="text" ref="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><i class="fas fa-key"></i> Password</label>
                        <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                         {this.renderBtnOrLoading()}
                         {this.renderErrorMessage()}
                    </form>
                    </div>
                    <div className="col-6 col-md-6 anotherOne">

                        
                    </div>

                </div>
                    
            </div>
        )
    }
}
const mapStatetoProps =(state)=>{
    return {
        username :state.user.username,
        loading:state.user.loading,
        error:state.user.error
    }
}



export default connect(mapStatetoProps,{onLogin})(Login);