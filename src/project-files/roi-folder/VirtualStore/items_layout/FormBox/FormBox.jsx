import React, { Component, useState } from "react";
import './FormBox.css';
import Auxiliary from '../../../Aux-folder/Auxiliary'

const AddToCart = (props) => {
    const [currAmount, setCurrAmount] = useState(0);
    const adjustItem = (event) => {
        if (event.target.name === "addAmount")
            setCurrAmount(currAmount + 1);
        else if (event.target.name === "subAmount" && currAmount > 0)
            setCurrAmount(currAmount - 1);
    }

    const adjustItems = (
        <div>
            <div>
                <button
                    name="addAmount"
                    className="btn btn-success vs-add-item"
                    onClick={(event) => adjustItem(event)}>
                    +
                </button>
                <input
                    value={currAmount}
                    className="vs-item-amount"
                    type='text'
                    disabled={true}
                />
                <button
                    name="subAmount"
                    className="btn btn-danger vs-sub-item"
                    disabled={currAmount <= 0}
                    onClick={(event) => adjustItem(event)}
                >-
                </button>
            </div>
            <h4 className="total-price-txt">סה"כ מחיר: {parseInt(props.price) * currAmount + '$'}</h4>
            <button
                className="btn btn-primary addItemsToCart"
                disabled={currAmount <= 0}
            >הוסף {currAmount > 1 ? "פריטים" : "פריט"} לסל!</button>
        </div>
    );
    const itemDetails = (
        <Auxiliary>
            <h5 dir="rtl"><i>{props.description}</i></h5>
            <img height="200px" width="133px" src={props.link} alt="item-pic" />
        </Auxiliary>
    );
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="adj-itm-div">
                <h3>{props.productName}</h3>
                {props.type === "details" ? itemDetails : null}
                {props.type === "basket" ? adjustItems : null}
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
                            type={this.props.type}
                            title={this.props.title}
                            productName={this.props.productName}
                            price={this.props.price}
                            description={this.props.description}
                            link={this.props.link} />
                    </div>
                </div>
            </div>
        );
    }
}
export default FormBox;
