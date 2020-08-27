import React, { Component, useState } from "react";
import VirtualStoreHeader from "./VirtualStoreHeader"
import SingleItemLayout from "./SingleItemLayout"
import "./VirtualStore.css"

const TurnPage = (props) => {
    const [hoverColor, setHoverColor] = useState("#144399");
    const arrow = props.directionArrow === "next" ? ">" : "<";
    const divStyle = {
        "border": "4px black solid",
        "width": "60px",
        "height": "60px",
        "borderRadius": "120px",
        "verticalAlign": "center",
        "marginTop": "30px",
        "backgroundColor": hoverColor,
        "outline": "none"
    }
    const hStyle = {
        "color": "white",
        "fontSize": "75px",
        "lineHeight": "0px",
        "marginTop": "-5px",
        "marginLeft": props.directionArrow === "next" ? "-3px" : "-10px"
    }

    return (
        < button
            onMouseOver={() => setHoverColor("#140399")}
            onMouseLeave={() => setHoverColor("#144399")}
            style={divStyle}>
            <h1 style={hStyle}>
                {arrow}
            </h1>
        </ button>
    );
}

const ItemLayout = (props) => {
    return (
        <main className="vs-main">
            <div className="store-layout">
                {props.layout.map((item, index) =>
                    <SingleItemLayout item={item} index={index} />
                )}
            </div>
            <div className="vb-arrows">
                <TurnPage directionArrow={"prev"} />
                <TurnPage directionArrow={"next"} />
            </div>
        </main>
    );
}

class VirtualStore extends Component {
    constructor() {
        super();
        this.state = {
            layout: [
                { item: "כיסא אורטופדי", photoUrl: "https://www.srm.co.il/images/itempics/5887_020420191241281_large.jpg", price: "50$", description: "כיסא אורטופדי בהתאמה אישית ובמחיר מדהים! כל הקודם זוכה." },
                { item: "שולחן מעץ", photoUrl: "https://d3m9l0v76dty0.cloudfront.net/system/photos/4803070/large/86a62b5ae5f8282cc21d008b1fec106e.jpg", price: "70$", description: "שולחן יפהפה, יד שניה מרופא." },
                { item: "טוסטר אובן", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_evlzcK36qTIrZ61zTYS98iYKSgKrQVa-3AjkBX4XpGWQLaABuw9t7dhCjgMcv1gAHXAx4CX_&usqp=CAc", price: "40$", description: "טוסט אובן מעולה למכירה. מתאים לכל סוגי הירקות והתבשילים." },
            ]
        }
    }
    render() {
        return (
            <div>
                <VirtualStoreHeader />
                <ItemLayout layout={this.state.layout} />
            </div>
        );
    }
}
export default VirtualStore;
