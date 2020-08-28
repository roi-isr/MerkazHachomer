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
            />
            <div className="price-and-button">
                <h4 className="item-price-txt">מחיר: {props.item.price}</h4>
                <button className="btn btn-info">לחץ לפרטים</button>
            </div>
        </div>
    );
}

class SingleItemLayout extends Component {

    render() {
        return (
            <div className="store-item">
                <RightSideItem
                    item={this.props.item.item}
                    description={this.props.item.description}
                />
                <LeftSideItem
                    index={this.props.index}
                    item={this.props.item}
                />
            </div>
        );
    }
}
export default SingleItemLayout;
