import React, { Component } from "react";
import "./HomePage.css"
import images from "./images/20190801_132600.jpg"

class HomePage extends Component {
state={
  backgroundC:"red"
}
  render() {
    return (
      <div className="Homepage">

        <h1 className="text-hide" style={{ "background-image": "url('https://www.ktzat.co.il/ProductsImages/E717004.jpg')" }}>Bootstrap</h1>

        <nav className="navbar navbar-light" style={{ "background-color": "#e3f2fd" }}>



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
            <li className="nav-item">
              <a className="nav-link" href="#">עמוד הבית</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">עמוד הבית</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">עמוד הבית</a>
            </li>
          </ul>

        </nav>

        <div style={{height:"200px"},{width:"1550px"}} id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://forum.ikimaru.com/pic/5019180_full-ulra-hd-wallpaper-mountain-forest-hd-wallpaper-4k-ultra-hd-wide-tv-hd-wallpaper.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
    </div>
              <div className="carousel-item">
                <img src="https://www.wallpapermaiden.com/wallpaper/15364/download/2560x1440/forest-fog-trees-jungle-plants.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
    </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>

          
        );
    }
}

export default HomePage;
