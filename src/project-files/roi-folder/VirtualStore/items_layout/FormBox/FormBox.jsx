import React, { Component } from "react";
import './FormBox.css';

const AddToCart = (props) => {
    const adjustItems = (
        <div>
            <div>
                <button className="btn btn-success">+</button>
                <input className="vs-item-amount" type='text' disabled={true} />
                <button className="btn btn-danger">-</button>
            </div>
            <button className="btn btn-primary addItemsToCart">הוסף פריטים לסל!</button>
        </div>
    );
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="adj-itm-div">
                <h3>{props.productName}</h3>
                {adjustItems}
            </div>
        </div>
    );
}

class FormBox extends Component {

    render() {
        return (
            <div className="form-box-main">
                <span className="helper" />
                <div className="form-central">
                    <div
                        className="close-form-box"
                        onClick={this.props.closeBox}>
                        X
                    </div>
                    <div className="formbox-body">
                        <AddToCart
                            title={this.props.title}
                            productName={this.props.productName} />
                    </div>
                </div>
            </div>
        );
    }
}
export default FormBox;
