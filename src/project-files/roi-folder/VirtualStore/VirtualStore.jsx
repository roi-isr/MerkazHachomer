import React, { Component } from "react";
import VirtualStoreHeader from "./header/Header"
import "./VirtualStore.css"
import Layout from "./items_layout/Layout"

class VirtualStore extends Component {

    render() {
        return (
            <div>
                <VirtualStoreHeader />
                <Layout />
            </div>
        );
    }
}

export default VirtualStore;
