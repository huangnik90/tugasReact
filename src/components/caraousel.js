import React from 'react'

class Carousel extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active" data-interval={5000}>
                    <img src="https://static.shop.adidas.co.id/media/wysiwyg/masthead/_IDADD_-Adidas-Masthead-UB19-1Mar-1366x800.jpg" className="d-block" alt="..." />
                  </div>
                  <div className="carousel-item" data-interval={5000}>
                    <img src="https://static.shop.adidas.co.id/media/wysiwyg/masthead/revise_Masthead-1366x800.jpg" className="d-block" alt="..." />
                  </div>
                  <div className="carousel-item" data-interval={5000}>
                    <img src="https://static.shop.adidas.co.id/media/wysiwyg/_IDADD_-Adidas-HAGT-Masthead-1366x800-REV1.jpg" className="d-block" alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
                <hr></hr>
                 
                




              </div>
            </div>

        )
    }
}

export default Carousel;