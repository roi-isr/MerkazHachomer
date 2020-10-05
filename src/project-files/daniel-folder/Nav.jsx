import React from "react"
import Cart from "./Cart"
//sdfs
const Welcome =(props)=> {
    return (
        <nav className="navbar navbar-light" style={{padding:"12px", "direction":"rtl","backgroundColor": "#e3f2fd" ,"textAlign":"right"}}>

            <ul className="nav" style={{direction:"rtl"}} >
                <li className="nav-item">
    <a className="nav-link active" href="#">המוצרים שלנו</a>
                </li>
                <li className="nav-item">
    <a className="nav-link" href="#">עבודות יד</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">הפינה של אירית</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home/about-us">עלינו</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home/homepage">עמוד הבית</a>
         </li>
         <li>
            <Cart/>
         </li>
            </ul>

        </nav>);

}
export default Welcome