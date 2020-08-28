import React, { Component } from "react";
import "./HomePage.css"

class HomePage extends Component {

    render() {
        return (
            <div className="Homepage">
                
                 <nav className="navbar navbar-light" style={{"background-color": "#e3f2fd"}}>


                
                    <ul class="nav" >
                        <li class="nav-item">
                            <a class="nav-link active" href="#">קורסים והשתלמויות</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">עבודת יד</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">הפינה של אירית</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">עלינו</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">עמוד הבית</a>
                        </li>
                
                     </ul>
                   
                </nav>
            
            </div>
          
        );
    }
}

export default HomePage;
