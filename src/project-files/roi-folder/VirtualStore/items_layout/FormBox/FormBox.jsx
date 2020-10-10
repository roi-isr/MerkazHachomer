import React, { Component, useState } from "react";
import './FormBox.css';
import Auxiliary from '../../../Aux-folder/Auxiliary'
import { add_to_cart } from '../../../../../store/actions/actions'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

const AdjustItems = (props) => {
    const [currAmount, setCurrAmount] = useState(0);

    const adjustItem = (event) => {
        if (event.target.name === "addAmount")
            setCurrAmount(currAmount + 1);
        else if (event.target.name === "subAmount" && currAmount > 0)
            setCurrAmount(currAmount - 1);
    }
    return (
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
            <h4 className="total-price-txt">סה"כ מחיר: {parseInt(props.children.props.price) * currAmount + '$'}</h4>
            <button
                className="btn btn-primary addItemsToCart"
                disabled={currAmount <= 0}
                onClick={() => {
                    try {
                        props.addToCart(props.children.props.productName, currAmount, parseInt(props.children.props.price) * currAmount, props.children.props.link);
                        alert((currAmount > 1 ? "פריטים נוספו" : "פריט נוסף") + " בהצלחה לעגלה!");
                    }
                    catch {
                        alert('משהו השתבש...');
                    }
                }}
            >הוסף {currAmount > 1 ? "פריטים" : "פריט"} לסל!</button>
        </div>
    );
};

const ItemDetails = (props) => {
    return (
        <Auxiliary>
            <h5 dir="rtl"><i>{props.description}</i></h5>
            <img height="200px" width="133px" src={props.link} alt="item-pic" />
        </Auxiliary>
    );
};

const Cart = (props) => {
    return (
        <Auxiliary>
            <Table striped bordered hover variant='dark' size='sm' style={{ direction: 'rtl', margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>שם פריט</th>
                        <th>כמות</th>
                        <th>מחיר כולל</th>
                        <th>תמונה</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart_items.map((item, index) =>
                        <tr key={index}>
                            <th>{item.item}</th>
                            <th>{item.amount}</th>
                            <th>{item.price + '$'}</th>
                            <th><img height='25px' width='25px' src={item.link} alt="pic" /></th>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Auxiliary>
    );
};

const FormTemplate = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <div className="adj-itm-div">
                <h3>{props.productName}</h3>
                {props.type === "details" ? <ItemDetails description={props.description} link={props.link} /> : null}
                {props.type === "basket" ? <StoreAccessAd><AdjustItems link={props.link} productName={props.productName} price={props.price} /></StoreAccessAd> : null}
                {props.type === "cart" ? <StoreAccessCa><Cart /></StoreAccessCa> : null}
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
                        <FormTemplate
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

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item, amount, price, link) => dispatch(add_to_cart({ item: item, amount: amount, price: price, link: link }))

    };
}

const mapStateToProps = (state) => {
    return {
        cart_items: state.cart.cart_items
    };
}

const StoreAccessAd = connect(null, mapDispatchToProps)(AdjustItems);
const StoreAccessCa = connect(mapStateToProps)(Cart);
export default FormBox;
