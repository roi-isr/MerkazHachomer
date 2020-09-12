import React, { Component, useState } from "react";
import SingleItemLayout from "./SingleItemLayout"
import "./Layout.css"
import { connect } from 'react-redux'

const TurnPage = (props) => {
    const [hoverColor, setHoverColor] = useState("#140399"); // React Hooks syntax
    const arrow = props.directionArrow === "next" ? ">" : "<";
    const divStyle = {
        "border": "4px black solid",
        "width": "60px",
        "height": "60px",
        "borderRadius": "120px",
        "verticalAlign": "center",
        "marginTop": "30px",
        "backgroundColor": hoverColor,
        "outline": "none",
        "transition":"0.15s"
    }
    const hStyle = {
        "color": "white",
        "fontSize": "75px",
        "lineHeight": "0px",
        "marginTop": "-7px",
        "marginLeft": props.directionArrow === "next" ? "-3px" : "-10px"
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
        if (prevProp.searchList !== this.props.searchList)
            this.setState({ currIndex: 0 });
    }

    updateIndex = (dir) => {
        const layout = this.props.searchList === 'הכל' ?
            [...this.props.layout] : this.props.layout.filter(item => item.type.includes(this.props.searchList));
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
        const layout = this.props.searchList === 'הכל' ?
            [...this.props.layout] : this.props.layout.filter(item => item.type.includes(this.props.searchList));
        return (
            <main className="vs-main">
                <div className="store-layout">
                    {layout.slice(this.state.currIndex, this.state.currIndex + 3).map((item, index) =>
                        <SingleItemLayout
                            key={"item" + index}
                            item={item}
                            index={index}
                        />
                    )}
                </div>
                <div className="vb-arrows">
                    <TurnPage updateIndex={this.updateIndex} directionArrow={"prev"} />
                    <TurnPage updateIndex={this.updateIndex} directionArrow={"next"} />
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchList: state.searchList
    };
}


export default connect(mapStateToProps)(ItemLayout);
