import React, {Component} from 'react';
import './css/Cards.css'

 class Cards extends Component{
    render () {
        return(
        
        <div  className="container py-5 justify-content-around" id='stats'>
            <div  className="row">
                <div  className="col-md-6 col-xl-3">
                    <div  className="card bg-transparent order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20">Satisfaction</h2>
                            <h3  className="text-right "><i  className="fa fa-cart-plus f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0">of our client are satisfied about our products and reorder after receiving their products</p>
                        </div>
                    </div>
                </div>
                
                <div  className="col-md-6 col-xl-3">
                    <div  className="card bg-transparent order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">Delivery fee</h2>
                            <h3  className="text-right "><i  className="fa fa-rocket f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0 ">of the delivery fee is taken in charge by our services wherever you are in the world</p>
                        </div>
                    </div>
                </div>
                <div  className="col-md-6 col-xl-3">
                    <div  className="card bg-transparent order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">French quality</h2>
                            <h3  className="text-right"><i  className="fa fa-refresh f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0">of our products are handmade by a small but yet competent team, situated in France</p>
                        </div>
                    </div>
                </div>
                
                <div  className="col-md-6 col-xl-3">
                    <div  className="card bg-transparent order-card">
                        <div  className="card-block">
                            <h2  className="m-b-20 ">Authentical</h2>
                            <h3  className="text-right "><i  className="fa fa-credit-card f-left"></i><span>100%</span></h3>
                            <p  className="m-b-0 ">of our products are authentical and respects the aestethic of your favourite DBH game<span  className="f-right"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Cards;