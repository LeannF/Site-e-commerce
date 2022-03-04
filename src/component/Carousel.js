import React, {Component} from 'react';



    function Carousel() {

        return(
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="" src="https://www.eleveurs-online.com/data/race/382.660.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="" src="https://www.eleveurs-online.com/data/race/382.660.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="" src="https://www.eleveurs-online.com/data/race/382.660.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        )
    }

export default Carousel;