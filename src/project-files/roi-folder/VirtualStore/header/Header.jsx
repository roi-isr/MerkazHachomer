import React, { Component, useState } from "react";
import "./Header.css";
import logo from "../../static-files/merkaz_hachomer_logo.JPG";
import FormBox from "../items_layout/FormBox/FormBox";


const NavItem = (props) => {
    return (
        <li className={"nav-item" + (props.isActive === props.index ? " active" : "")}>
            <div className="nav-link" onClick={props.activate}>{props.item}</div>
            {props.VerticalLine}
        </li>
    );
}

const SearchNav = () => {
    const [isActive, setIsActive] = useState(null); // React Hooks syntax
    const [navItems, setNavItems] = useState(["רהיטים", "יצירה", "חומרים", "תמונות", "מתנות", "ילדים", "מבוגרים", "פנאי","לימודים"]); // React Hooks syntax
    const VerticalLine =
        <div className="vs-ver-line" />;

    const activate = (index) => {
        setIsActive(index)
    }

    return (
        <nav className="navbar-dark vs-nav">
            <div className="navbar-brand vs-fast-search-txt" href="#">חיפוש מהיר</div>
            {VerticalLine}
            <ul className="navbar-nav vs-search-nav">
                {navItems.map((item, index) =>
                    <NavItem
                        isActive={isActive}
                        item={navItems[index]}
                        VerticalLine={VerticalLine}
                        activate={() => activate(index)}
                        index={index}
                    />
                )}
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
