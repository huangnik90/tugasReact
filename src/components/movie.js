import React from 'react'
import axios from 'axios'

class Movie extends React.Component{
    state= {film:[],error:""}
    //PASTI DI PAKE UNTUK SHOW PRODUCT ATAU MENAMPILKAN DATA
    //SETELAH REBDER BARU DI PANNGGIL
    // componentDidMount(){
    //     this.getProduct()
    // }
    getProduct = ()=>{
        var title = this.refs.titleMovie.value 
        if(title!==""){
            var KEY = "&apikey=6a953632"
        
            axios.get("http://www.omdbapi.com/?s="+title+KEY)
            .then((res) => {
                
                if (res.data.Response === "True"){
                    this.setState({film:res.data.Search,error:[]})
                }else{
                    this.setState({film:[],error:"TOO MUCH MOVIE/NOT FOUND"})
                }
                
            })
            .catch((err)=> this.setState({error:err.request.respond}))
        }else{
            this.setState({error:"DATA KOSONG"})
        }
        
    }
    
    renderMovieJsx = ()=>{
        var jsx = this.state.film.map((val)=>{
            return(
                <div className="card col-md-3 mr-5 mt-3" style={{width: '18rem'}}>
                <img src={val.Poster} className="card-img-top gambar" width="220px" height="350px;" alt="..." />
                
                <div className="card-body">
                    <p className="card-text">{val.Type} : {val.Title}</p>
                    <p className="card-text">{val.Year}</p>
                </div>

            </div>
            )
            
        })
        return jsx
    }
    render(){
        return(
            <div className="container">
                 <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Title Search</label>
                                <div className="col-sm-9">
                                <input type="text" ref="titleMovie" className="form-control" id="inputEmail" placeholder="Cari judul film" required autoFocus/>
                                <button type="button" className="btn btn-primary" onClick={this.getProduct} style={{marginTop:"20px"}} > Search</button>
                                </div>
                 </div>
                 <hr></hr>
                 
                <div className="row justify-content-center">
                {this.renderMovieJsx()}
                {this.state.error}
                </div>
             
            
            </div>
        )
    }
}

export default Movie;

