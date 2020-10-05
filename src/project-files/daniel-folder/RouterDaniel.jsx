import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./HomePage"
import AboutUs from './AboutUs'

class RouterDaniel extends Component {


    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/home/homepage'} exact component={Homepage}/>
                    <Route path={'/home/about-us'} exact component={AboutUs}/>
           

                    


                </Switch>
            </Router>
        );

    }
}


export default RouterDaniel