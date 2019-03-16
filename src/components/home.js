import React from 'react'

import {connect} from 'react-redux'
import Product from './product'


class Home extends React.Component{
    render(){
        return(
            <div className="container mt-2">
                {this.props.role==="user"||this.props.role==="admin"?<Product></Product>:"Welcome Please Login"}
            </div>
        )
    }
}
const mapStateToProp = (state)=>{
    return{
        idUser : state.user.id,
        role:state.user.role
    }
    
}

export default connect(mapStateToProp)(Home);