import React, { useState } from "react";
import "./Header.css";
import { connect } from 'react-redux'
import logo from "../../static-files/merkaz_hachomer_logo.JPG";
import FormBox from "../items_layout/FormBox/FormBox";
import { item_change, search_item } from '../../../../store/actions/actions'


const NavItem = (props) => {
    return (
        <li className={"nav-item" + (props.isActive === props.index ? " active" : "")}>
            <div className="nav-link" onClick={props.activate}>{props.item}</div>
            {props.VerticalLine}
        </li>
    );
}

const SearchNav = (props) => {
    const [isActive, setIsActive] = useState(0); // React Hooks syntax
    const [navItems, setNavItems] = useState(["הכל", "רהיטים", "יצירה", "חומרים", "תמונות", "מתנות", "ילדים", "מבוגרים", "פנאי", "לימודים", "מטבח"]); // React Hooks syntax
    const VerticalLine =
        <div className="vs-ver-line" />;

    const activate = (index) => {
        setIsActive(index);
        props.onSearchItemChange(navItems[index]);
    }

    return (
        <nav className="navbar-dark vs-nav">
            <div className="navbar-brand vs-fast-search-txt" href="#">חיפוש מהיר</div>
            {VerticalLine}
            <ul className="navbar-nav vs-search-nav">
                {navItems.map((item, index) =>
                    <NavItem
                        key={index}
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

const SearchInput = (props) => {
    const [searchKey, setSearchKey] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        if (searchKey === '')
            alert('לא הוזן מפתח לחיפוש');
        else
            props.onSearchClick(searchKey);
    }
    return (
        <form className="vs-search" onSubmit={submitForm}>
            <input
                placeholder="חפש מוצר לפי מילות מפתח..."
                dir="rtl"
                className="form-control search-input w-50"
                type="text"
                value={searchKey}
                onChange={e => setSearchKey(e.target.value)}
            />
            <button
                dir="rtl"
                className="btn btn-outline-warning vs-search-btn"
            >
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
            <div
                onClick={() => setshowFormBox(true)}
                className="show-my-cart-btn">
                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <h6>צפייה בעגלה</h6>
            </div>

            {showFormBox &&
                <FormBox
                    title={"סל המוצרים שלי"}
                    type={"cart"}
                    closeBox={closeBox}
                />}
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
                        <StoreAccess>
                            <SearchInput />
                        </StoreAccess>
                        <ShowCart />
                    </div>
                </div>
                <img className="vs-logo" src={logo} alt="logo" />
            </div>
        </header>
    );
}

const VirtualStoreHeader = (props) => {

    return (
        <div>
            <HeaderComponent />
            <SearchNav onSearchItemChange={props.onSearchItemChange} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchItemChange: (itemAlt) => dispatch(item_change(itemAlt)),
        onSearchClick: (key) => dispatch(search_item(key))

    };
}

const StoreAccess = connect(null, mapDispatchToProps)(SearchInput);
export default connect(null, mapDispatchToProps)(VirtualStoreHeader);
