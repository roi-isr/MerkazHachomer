import React, { Component } from "react";
import SearchForm from "./SearchForm"
import SingleItemLayout from "./SingleItemLayout"
import "./VirtualStore.css"

const ItemLayout = (props) => {
    console.log(props);
    return (
        <main className="vs-main">
            {props.layout.map((item, index) =>
                <div className="store-item">
                    <div style={{ "width": "250px" }}>
                        <h4 className="topic-txt">{item.item}</h4>
                        <hr style={{"borderTop":"1px white solid"}}/>
                        <p dir="rtl" style={{"textAlign":"right","fontStyle":"italic","color":"white","marginRight":"5px"}}>{item.description}</p>
                    </div>
                    <div className="item-details">
                        <img className="item-url-photo" key={"item" + index} src={item.photoUrl}></img>

                        <div className="price-and-button">
                            <h4 style={{"color":"white"}} >מחיר: {item.price}</h4>
                            <button className="btn btn-info">לחץ לפרטים</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

class VirtualStore extends Component {
    constructor() {
        super();
        this.state = {
            layout: [
                { item: "כיסא אורטופדי", photoUrl: "https://www.srm.co.il/images/itempics/5887_020420191241281_large.jpg", price: "50$" ,description:"כיסא אורטופדי בהתאמה אישית ובמחיר מדהים! כל הקודם זוכה."},
                { item: "שולחן מעץ", photoUrl: "https://d3m9l0v76dty0.cloudfront.net/system/photos/4803070/large/86a62b5ae5f8282cc21d008b1fec106e.jpg", price: "70$" ,description:"שולחן יפהפה, יד שניה מרופא."},
                { item: "טוסטר אובן", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_evlzcK36qTIrZ61zTYS98iYKSgKrQVa-3AjkBX4XpGWQLaABuw9t7dhCjgMcv1gAHXAx4CX_&usqp=CAc", price: "40$" ,description:"טוסט אובן מעולה למכירה. מתאים לכל סוגי הירקות והתבשילים."},
            ]
        }
    }
    render() {
        return (
            <div>
                <SearchForm />
                <ItemLayout layout={this.state.layout} />
            </div>
        );
    }
}
export default VirtualStore;
