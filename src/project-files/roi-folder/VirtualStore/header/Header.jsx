import React, { Component, useState } from "react";
import "./Header.css";
import logo from "../../static-files/merkaz_hachomer_logo.JPG";
import FormBox from "../items_layout/FormBox/FormBox";


const SearchNav = () => {

    const VerticalLine =
        <div className="vs-ver-line" />

    return (
        <nav className="navbar navbar-light vs-nav">
            <div className="navbar-brand vs-fast-search-txt" href="#">חיפוש מהיר</div>
            {VerticalLine}
            <ul className="navbar-nav vs-search-nav">
                <li className="nav-item">
                    <div className="nav-link">רהיטים</div>
                    {VerticalLine}
                </li>
                <li className="nav-item">
                    <div className="nav-link">יצירה</div>
                    {VerticalLine}
                </li>
                <li className="nav-item">
                    <div className="nav-link">חומרים</div>
                    {VerticalLine}
                </li>
                <li className="nav-item">
                    <div className="nav-link">תמונות</div>
                    {VerticalLine}
                </li>
                <li className="nav-item">
                    <div className="nav-link">מתנות</div>
                    {VerticalLine}
                </li>
            </ul>
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
    const [showFormBox, setshowFormBox] = useState(false); // React Hooks syntax
    const closeBox = () => {
        setshowFormBox(false);
    }
    return (
        <div>
            <button onClick={() => setshowFormBox(true)} className="btn btn-success show-my-cart-btn">צפייה בסל המוצרים שלי!</button>
            {showFormBox ? <FormBox title={"סל המוצרים שלי"} closeBox={closeBox} /> : null}
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
