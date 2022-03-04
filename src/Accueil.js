import './App.css';
import React, {Component} from 'react';
import Navbar from './component/Navbar';
import MyCarousel from './component/Carousel';
import Presentation from './component/Presentation';
import Cards from './component/Cards';
import Articles from './component/Articles';
import ParticleBackground from './component/ParticleBackground';



class Accueil extends Component {

    constructor(props){
        super(props)
        this.state={
           articles:[]
        }
      }
      async componentDidMount() {
        //generalement utilisé pour les appels réseaux
        const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const articles = await response.json()
        this.setState({articles:articles})
      }
    
    render () {
       return(

        <>
            <ParticleBackground/>
            
            <Navbar/>
            <MyCarousel/>
            <Presentation/>
            <Cards/>

            <div className="row justify-content-around pt-5">
                {this.state.articles.data && this.state.articles.data.map((articles,i)=><Articles article={articles} key={i} />)}
            </div>
           
        </>
        
       ) 
    }
}

export default Accueil;


