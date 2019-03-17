import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import Login from './components/login'
import Register from './components/register'
import Todo from './components/todoList'
import Todo2 from './components/todoV2'
import Movie from './components/movie'
import Product from './components/product'
import ProductDetail  from './components/productDetail'
import HitungKata  from './components/hitungKata'
import Home from './components/home'
import cookie from 'universal-cookie'
import ManageProduct from './components/manageProduct'
import{keepLogin} from './1.actions/userAction'
import {connect} from 'react-redux'

import {Route, withRouter} from 'react-router-dom'
const kokie = new cookie()
class App extends Component {
  componentDidMount(){
    var usernameCookie = kokie.get('userData')
    if (usernameCookie!== undefined){
      this.props.keepLogin(usernameCookie)
    }
  
}


  render() {
    return (
     
      <div className="container-fluid" style={{background:"whitesmoke" } }>
      <Header/>
      <div>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Register" component={Register}></Route>
      <Route path="/Todo" component={Todo}></Route>
      <Route path="/HitungKata" component={HitungKata}></Route>
      <Route path="/Todo2" component={Todo2}></Route>
      <Route path='/movie' component={Movie} />
      <Route path='/productdetail/:terserah' component={ProductDetail} />
      <Route path='/product' component={Product} exact/>
      <Route path='/' component={Home} exact/>
      <Route path='/manageproduct' component={ManageProduct} exact/>
      

      </div>
      <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(null,{keepLogin}) (App));
