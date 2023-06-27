import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={img1}
               alt="img1"

            />
            <Carousel.Caption>
               <h3>img1</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officiis.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={img2}
               alt="img2"

            />
            <Carousel.Caption>
               <h3>img2</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officiis.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={img3}
               alt="img3"

            />
            <Carousel.Caption>
               <h3>img3</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officiis.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
    )
  }
}
