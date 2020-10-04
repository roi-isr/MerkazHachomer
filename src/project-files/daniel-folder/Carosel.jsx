import React from "react"
// import {Carousel} from "react-responsive-carousel"
import Carousel from 'react-bootstrap/Carousel'

const Carosel=()=>{
return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pencil.org/wp-content/uploads/2020/06/paper-lines-pencil.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bostitchoffice.com/media/blog/2018-08AUG/art-materials-colored-pencils.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
// <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active" >
//       <img className="d-block w-100" src="https://pencil.org/wp-content/uploads/2020/06/paper-lines-pencil.png" alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="..." alt="Second slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="..." alt="Third slide"/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
// );
}
export default Carosel