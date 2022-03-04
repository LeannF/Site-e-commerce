
import './css/Articles.css'

function Articles(props){

        return(

            <>
            
                <div className="shop-card">
                    <div className="title">
                        {props.article.attributes.name}
                    </div>
                    <div className="desc">  
                        {props.article.attributes.label}
                    </div>
                    <figure data-color="#E24938, #A30F22">
                        <img src={"http://localhost:1337"+(props.article.attributes.image.data && props.article.attributes.image.data.attributes.url)} />
                    </figure>
                    <div className="cta">
                        <div className="price">{props.article.attributes.price}€</div>
                        <button className="myButton">Add to cart</button>
                    </div>
                </div>


            </>
        );

}

export default Articles;