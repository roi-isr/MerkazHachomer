import React, { Component } from "react";
import "./HomePage.css"

className HomePage extends Component {

    render() {
        return (
            <div classNameName="Homepage">
                
                <h1 classNameName="text-hide" style={{"background-image": "url('https://www.ktzat.co.il/ProductsImages/E717004.jpg')"}}>Bootstrap</h1>

                 <nav classNameName="navbar navbar-light" style={{"background-color": "#e3f2fd"}}>


                
                    <ul className="nav" >
                        <li className="nav-item">
                            <a className="nav-link active" href="#">קורסים והשתלמויות</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">עבודת יד</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">הפינה של אירית</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">עלינו</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">עמוד הבית</a>
                        </li>
                
                     </ul>

                     </nav>
                     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

          
        );
    }
}

export default HomePage;
