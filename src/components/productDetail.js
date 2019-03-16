import React from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';

class ProductDetail extends React.Component{
    state = {listBarang :{}}
    componentDidMount(){
        this.getAPI()
    }
    getAPI = ()=>{
        var itemId = this.props.match.params.terserah
        Axios.get(urlApi+"/tbl_watch/"+itemId)
        .then((res)=>{
            this.setState({listBarang:res.data})
        })
        .catch((err)=>console.log(err))
    }
    render()
    {
        var {nama,harga,diskon,deskripsi,gambar} = this.state.listBarang
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-4">

                    <div className="card" style={{width: '100%'}}>
                        <img src={gambar} className="card-img-top" alt="ini gambar" />
                        <div className="card-body">
                       
                        </div>
                    </div>


                    </div>
                    <div className="col-8 col-md-8">
                        <h1> {nama} </h1>
                        <hr></hr>
                        <div style={{display:"inline-block",textAlign:"center",color:"#FAFAFA",backgroundColor:"#D50000",width:"50px",height:"22px",marginRight:"10px"}}>
                                {diskon}%
                        </div>
                        <span style={{fontSize:"14px",fontWeight:"600px",color:"#606060",textDecoration:"line-through"}}>Rp. {harga}</span>
                        <div style={{fontSize:"24px",fontWeight:"700",color:"#ff5722"}}>
                        Rp. {harga - (harga*diskon/100)}
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-2">
                                <div style={{fontSize:"14px",fontWeight:"700",marginTop:"10px"}} >
                                Jumlah
                                </div>
                                <input type="number" ref="quantity" min={1} className="form-control" onChange={this.cekQuantity} defaultValue="1" style={{marginTop:"13px",width:"60px"}}></input>
                                <div style={{color:"red"}}> {this.state.quantity}</div>

                            </div>
                            <div className="col-md-8 col-8">
                                <div style={{fontSize:"14px",fontWeight:"700",marginTop:"10px"}} >
                                <i class="far fa-comments"></i> Catatan Untuk Penjual (Optional)
                                </div>
                                <input type="text" placeholder="CONTOH: WARNA, UKURAN ATAU DESIGN" className="form-control" style={{marginTop:"13px"}}></input>
                            </div>

                        </div>
                        <hr></hr>
                        <div className="row mt-4">
                            <div className="col-md-8 col-8">
                            
                            <p style={{color:"#606060", fontStyle:"italic"}}> 
                            {deskripsi}
                            </p>
                            </div>
                            
                            {this.props.user!==""?
                            <div className="col-md-8 col-8">
                            <input className="btn border-secondary col-md-4" value="Add To Wishlist"></input>
                            <input className="btn border-primary col-md-4" value="Beli Sekarang"></input>
                            <input className="btn border-success col-md-4" value="Masukan Keranjang"></input>
                            </div>
                            :
                            <div className="col-md-8 col-8">
                            <input className="btn border-secondary col-md-4" disabled value="Add To Wishlist"></input>
                            <input className="btn border-primary col-md-4" disabled value="Beli Sekarang"></input>
                            <input className="btn border-success col-md-4" disabled value="Masukan Keranjang"></input>
                            </div>
                            }
                           
                           

                            
                            
                            
                            
                            
                            
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;
