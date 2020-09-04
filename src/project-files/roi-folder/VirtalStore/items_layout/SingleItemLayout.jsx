import React, { Component } from "react";
import "./SingleItemLayout.css"

const RightSideItem = (props) => {
    return (
        <div className="item-right-side" >
            <h4 className="topic-txt">{props.item}</h4>
            <hr className="item-hr" />
            <p className="item-paragraph" dir="rtl">
                {props.description}
            </p>
        </div>
    );
}

const LeftSideItem = (props) => {
    return (
        <div className="item-details">
            <img
                className="item-url-photo"
                key={"item" + props.index}
                src={props.item.photoUrl}
                alt={props.item.item}
            />
            <div className="price-and-button">
                <h5 className="item-price-txt">מחיר: {props.item.price}</h5>
                <button className="btn btn-primary vs-addtocart-btn w-100">הוסף לסל!</button>
                <button className="btn btn-info vs-info-btn w-100">לחץ לפרטים</button>
            </div>
        </div>
    );
}

const SingleItemLayout = (props) => {

    return (
        <div className="store-item">
            <RightSideItem
                item={props.item.item}
                description={props.item.description}
            />
            <LeftSideItem
                index={props.index}
                item={props.item}
            />
        </div>
    );
}

export default SingleItemLayout;
