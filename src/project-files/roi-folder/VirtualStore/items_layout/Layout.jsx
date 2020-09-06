import React, { Component, useState } from "react";
import SingleItemLayout from "./SingleItemLayout"
import "./Layout.css"

const TurnPage = (props) => {
    const [hoverColor, setHoverColor] = useState("#144399"); // React Hooks syntax
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
                    <SingleItemLayout
                        key={"item" + index}
                        item={item}
                        index={index}
                    />
                )}
            </div>
            <div className="vb-arrows">
                <TurnPage directionArrow={"prev"} />
                <TurnPage directionArrow={"next"} />
            </div>
        </main>
    );
}

export default ItemLayout;
