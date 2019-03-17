import React from 'react'

import { Divider, Image } from 'semantic-ui-react'

import {connect} from 'react-redux'
import Product from './product'
import GambarUtama from './caraousel'

const src = '/images/wireframe/image.png'
class Home extends React.Component{
    render(){
        return(
            <div className="container mt-2">
                {this.props.role==="user"||this.props.role==="admin"?
                <div><GambarUtama></GambarUtama>
                <Product></Product> </div>:

      
                
              <div className="container" align="center">
                     <GambarUtama></GambarUtama>
                    
              <Divider hidden />
              <Image.Group size='medium'>
              <Image src={"https://static.shop.adidas.co.id/media/wysiwyg/static_banner/ft_sportsperformance.jpg"}/>
              <Image src={"https://static.shop.adidas.co.id/media/wysiwyg/static_banner/160716_outlet_fc.jpg"} />
              <Image src={"https://easycommercemanager.com/immaginiEbay/AbbigliamentoSportivo//ScarpeAdidas/DA9164////det-DA9164-1.jpg"} />
              <Image src={"https://breagle-shop.com/wp-content/uploads/2018/04/Newest-Male-Sport-Running-Shoes-Men-s-Weave-Leather-Sneakers-Cool-Breathable-Flats-Professional-Trainer-Tennis.jpg"} />
              <Image src={"https://www.amuzenow.com/content/images/thumbs/0001694_nky-sport-shoes.jpeg"} />
              <Image src={"https://ae01.alicdn.com/kf/HTB1_Z__jiMnBKNjSZFoq6zOSFXa4/2018-men-s-shoes-comfortable-breathable-brand-sports-running-shoes-lace-up-light-cheap-price-sneakers.jpg"} />
              </Image.Group>
          </div>
                }
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