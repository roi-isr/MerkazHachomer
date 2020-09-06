import React, { Component } from "react";
import './FormBox.css';

class MyCart extends Component {

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
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyCart;
