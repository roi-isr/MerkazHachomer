import React, { Component, useState } from "react";
import "./Header.css";
import logo from "../../static-files/merkaz_hachomer_logo.JPG";
import FormBox from "../items_layout/FormBox/FormBox";

const SearchNav = () => {
    return (
        <nav className="vs-nav">
            <h1 style={{ "textAlign": "center", "color": "#ffffff" }}>
                This is a search navbar
            </h1>
        </nav>
    );
}

const SearchInput = () => {
    return (
        <form className="vs-search">
            <input
                placeholder="חפש מוצר לפי מילות מפתח..."
                dir="rtl"
                className="form-control search-input w-50"
                type="text" />
            <button
                dir="rtl"
                className="btn btn-outline-warning vs-search-btn">
                חפש!
            </button>
            <button
                type="button"
                dir="rtl"
                className="btn btn-outline-warning">
                חיפוש מתקדם
            </button>
        </form>
    );
}

const ShowCart = () => {
    const [showFormBox, setshowFromBox] = useState(false); // React Hooks syntax
   const closeBox = () => {
        setshowFromBox(false);
    }
    return (
        <div>
            <button onClick={() => setshowFromBox(true)} className="btn btn-success show-my-cart-btn">צפייה בסל המוצרים שלי!</button>
            {showFormBox ? <FormBox closeBox={closeBox} /> : null}
        </div>
    );
}

const HeaderComponent = () => {
    return (
        <header className="vs-header">
            <div className="vs-header-div">
                <div className="vs-right-header">
                    <h1 className="vs-welcome-title">ברוכים הבאים לחנות הוירטואלית</h1>
                    <div className="vs-search-options">
                        <SearchInput />
                        <ShowCart />
                    </div>
                </div>
                <img className="vs-logo" src={logo} alt="logo" />
            </div>
        </header>
    );
}


const VirtualStoreHeader = () => {

    return (
        <div>
            <HeaderComponent />
            <SearchNav />
        </div>
    );
}

export default VirtualStoreHeader;
