import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Product extends React.Component{
    state = {jam:[]}
    componentDidMount(){
        this.getTblWatch()
    }
    getTblWatch = ()=>{
        axios.get("http://localhost:2000/tbl_watch")
        .then((res)=>{
            this.setState({jam:res.data})
        })
        .catch((err)=>console.log(err))
    }

    renderJsx = ()=>{
        var jsx = this.state.jam.map((val)=>{
            return (
               <div className="col-md-3 col-3 mr-4 mt-3">
                  <Link to={"/productdetail/"+val.id}>
                    <div className="card" style={{width: '18rem',height:'18rem'}}>
                    <img src={val.gambar} alt="gambar" className="card-img-top" />
                    <div className="card-body">
                    <p className="card-text">{val.deskripsi}</p>
                    {val.diskon>0?<div>
                    <p className="card-text" style={{display:"inline",textDecoration:"line-through",color:"red"}}>IDR - Rp.{val.harga}</p>
                    </div>:null}
                    <p className="card-text" style={{marginLeft:"5px",display:"inline",color:"black",fontWeight:"500"}}>Rp. {val.harga - (val.harga*val.diskon/100)}</p>
                    {val.diskon > 0?<div style={{width:"50px",border:"1px solid red",textAlign:"center",position:"absolute",top:"0",right:"5"}}>{val.diskon}%</div>:null}
                    </div>
                </div>
                </Link>
               </div>
                
            )
        })
        return jsx;
    }

    render(){
        return(
            <div className="container">
                 <div className="row justify-content-center">
                 {this.renderJsx()}
                </div>
               
            </div>
        )
    }
}

export default Product;