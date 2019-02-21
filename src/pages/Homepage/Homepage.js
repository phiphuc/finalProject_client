import React, {Component} from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductsList from '../../components/ProductsList/ProductsList.js'
import Slider from '../../components/Slider/Slider.js';

class Homepage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Slider images={[
                    {id: 1, src: process.env.PUBLIC_URL + '/slider-images/1.jpg', alt: ''},
                    {id: 2, src: process.env.PUBLIC_URL + '/slider-images/2.jpg', alt: ''},
                    {id: 3, src: process.env.PUBLIC_URL + '/slider-images/3.jpg', alt: ''},
                    {id: 4, src: process.env.PUBLIC_URL + '/slider-images/4.jpg', alt: ''},
                    {id: 5, src: process.env.PUBLIC_URL + '/slider-images/5.jpg', alt: ''}
                ]}
                        settings={{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }}
                />
                <ProductsList/>
                <Footer/>
            </>
        )
    }
}

export default Homepage;