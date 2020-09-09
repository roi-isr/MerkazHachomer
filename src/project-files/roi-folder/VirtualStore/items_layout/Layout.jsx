import React, { Component, useState } from "react";
import SingleItemLayout from "./SingleItemLayout"
import "./Layout.css"

const TurnPage = (props) => {
    const [hoverColor, setHoverColor] = useState("#140399"); // React Hooks syntax
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
        "marginTop": "-7px",
        "marginLeft": props.directionArrow === "next" ? "-3px" : "-10px"
    }

    return (
        < button
            onMouseOver={() => setHoverColor("#144399")}
            onMouseLeave={() => setHoverColor("#140399")}
            onClick={() => props.updateIndex(props.directionArrow)}
            style={divStyle}>
            <h1 style={hStyle}>
                {arrow}
            </h1>
        </ button>
    );
}

const ItemLayout = (props) => {
    const [currIndex, setCurrIndex] = useState(0); // React Hooks syntax

    const updateIndex = (dir) => {
        if (dir === "next")
            if (props.layout[currIndex + 3])
                setCurrIndex(currIndex + 3);
            else
                alert("אין יותר פריטים.")
        else
            if (props.layout[currIndex - 3])
                setCurrIndex(currIndex - 3);
            else
                alert("אין יותר פריטים.")
    }
    return (
        <main className="vs-main">
            <div className="store-layout">
                {props.layout.slice(currIndex, currIndex + 3).map((item, index) =>
                    <SingleItemLayout
                        key={"item" + index}
                        item={item}
                        index={index}
                    />
                )}
            </div>
            <div className="vb-arrows">
                <TurnPage updateIndex={updateIndex} directionArrow={"prev"} />
                <TurnPage updateIndex={updateIndex} directionArrow={"next"} />
            </div>
        </main>
    );
}

export default ItemLayout;
