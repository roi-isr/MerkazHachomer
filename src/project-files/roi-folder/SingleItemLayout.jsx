import React, { Component } from "react";
import "./SingleItemLayout.css"

class SingleItemLayout extends Component {

    render() {
        return (
            <div className="store-item">
                <div style={{ "width": "250px" }}>
                    <h4 className="topic-txt">{this.props.item.item}</h4>
                    <hr style={{ "borderTop": "1px white solid" }} />
                    <p dir="rtl" style={{ "textAlign": "right", "fontStyle": "italic", "color": "white", "marginRight": "5px" }}>
                        {this.props.item.description}
                    </p>
                </div>
                <div className="item-details">
                    <img
                        className="item-url-photo"
                        key={"item" + this.props.index}
                        src={this.props.item.photoUrl}
                    />
                    <div className="price-and-button">
                        <h4 style={{ "color": "white" }} >מחיר: {this.props.item.price}</h4>
                        <button className="btn btn-info">לחץ לפרטים</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleItemLayout;
