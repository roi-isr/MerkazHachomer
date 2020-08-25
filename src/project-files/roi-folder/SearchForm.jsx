import React, { Component } from "react";
import "./SearchForm.css"
import logo from "./static-files/logo.JPG"


const SearchInput = () => {
    return (
        <form className="vs-search">
            <input
                placeholder="חפש מוצר לפי מילות מפתח"
                dir="rtl"
                className="form-control search-input w-50"
                type="text" />
            <button style={{ "margin-left": "5px" }} dir="rtl" className="btn btn-outline-warning">חפש!</button>
            <button type="button" dir="rtl" className="btn btn-outline-warning">חיפוש מתקדם</button>
        </form>
    );
}


class SearchForm extends Component {

    render() {
        return (
            <div>
                <header className="vs-header">
                    <div className="vs-header-div">
                        <div className="vs-right-header">
                            <h1 className="vs-welcome-title">ברוכים הבאים לחנות הוירטואלית</h1>
                            <SearchInput />
                        </div>
                        <img className="vs-logo" src={logo} alt="logo" />

                    </div>
                </header>
            </div>
        );
    }
}
export default SearchForm;
