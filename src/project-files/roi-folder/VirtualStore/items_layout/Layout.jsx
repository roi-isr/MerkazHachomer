import React, { Component, useState } from "react";
import SingleItemLayout from "./SingleItemLayout"
import "./Layout.css"
import { connect } from 'react-redux'

const TurnPage = (props) => {
    const [hoverColor, setHoverColor] = useState("#140399"); // React Hooks syntax
    const arrow = props.directionArrow === "next" ? "<" : ">";
    const divStyle = {
        'bottom': '20px',
        "border": "4px black solid",
        "width": "60px",
        "height": "60px",
        "borderRadius": "120px",
        "verticalAlign": "center",
        "marginTop": "30px",
        "backgroundColor": hoverColor,
        "outline": "none",
        "transition": "0.15s"
    }
    const hStyle = {
        "color": "white",
        "fontSize": "75px",
        "lineHeight": "0px",
        "marginTop": "-7px",
        "marginLeft": props.directionArrow === "prev" ? "-3px" : "-10px"
    }

    return (
        < button
            onMouseOver={() => setHoverColor("#144399")}
            onMouseLeave={() => setHoverColor("#140399")}
            onClick={() => props.updateIndex(props.directionArrow)}
            style={divStyle}>
            <h1 style={hStyle}>
                {arrow}
            </h1>
        </ button>
    );
}

class ItemLayout extends Component {
    constructor() {
        super();
        this.state = {
            currIndex: 0
        }
    }

    componentDidUpdate(prevProp) {
        if (prevProp.searchList !== this.props.searchList || prevProp.layout !== this.props.layout)
            this.setState({ currIndex: 0 });
    }

    updateIndex = (dir) => {
        const layout = [...this.props.layout];
        if (dir === "next")
            if (layout[this.state.currIndex + 3])
                this.setState(prevState => {
                    return { currIndex: prevState.currIndex + 3 }
                });
            else
                alert("אין יותר פריטים.")
        else
            if (layout[this.state.currIndex - 3])
                this.setState(prevState => {
                    return { currIndex: prevState.currIndex - 3 }
                });
            else
                alert("אין יותר פריטים.")
    }
    render() {
        const layout = [...this.props.layout];
        return (
            <main className="vs-main">
                <div className="store-layout">
                    {layout.length > 0 ?
                        layout.slice(this.state.currIndex, this.state.currIndex + 3).map((item, index) =>
                            <SingleItemLayout
                                key={"item" + index}
                                item={item}
                                index={index}
                            />)
                        : <div style={{ margin: 'auto', height: '295px' }}>
                            <h1 style={{ fontSize: '100px' }}>לא נמצאו מוצרים</h1>
                        </div>
                    }
                </div>
                <div className="vb-arrows">
                    <TurnPage updateIndex={this.updateIndex} directionArrow={"next"} />
                    <TurnPage updateIndex={this.updateIndex} directionArrow={"prev"} />
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchList: state.store.searchList,
        layout: state.store.storeItems
    };
}


export default connect(mapStateToProps)(ItemLayout);
