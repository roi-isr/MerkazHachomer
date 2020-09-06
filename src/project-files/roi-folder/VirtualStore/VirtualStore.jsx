import React, { Component } from "react";
import VirtualStoreHeader from "./header/Header"
import "./VirtualStore.css"
import Layout from "./items_layout/Layout"

class VirtualStore extends Component {
    constructor() {
        super();
        this.state = {
            layout: [
                { item: "כיסא אורטופדי", photoUrl: "https://www.srm.co.il/images/itempics/5887_020420191241281_large.jpg", price: "50$", description: "כיסא אורטופדי בהתאמה אישית ובמחיר מדהים! כל הקודם זוכה." },
                { item: "שולחן מעץ", photoUrl: "https://d3m9l0v76dty0.cloudfront.net/system/photos/4803070/large/86a62b5ae5f8282cc21d008b1fec106e.jpg", price: "70$", description: "שולחן יפהפה, יד שניה מרופא." },
                { item: "טוסטר אובן", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_evlzcK36qTIrZ61zTYS98iYKSgKrQVa-3AjkBX4XpGWQLaABuw9t7dhCjgMcv1gAHXAx4CX_&usqp=CAc", price: "40$", description: "טוסטר אובן מעולה למכירה. מתאים לכל סוגי הירקות והתבשילים." },
            ]
        }
    }
    render() {
        return (
            <div>
                <VirtualStoreHeader />
                <Layout layout={this.state.layout} />
            </div>
        );
    }
}

export default VirtualStore;
