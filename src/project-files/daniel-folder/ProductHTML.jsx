import React, { Component } from "react";



class Prod extends Component {
  constructor() {
    super()
  this.state={
    tatals:0
  }
  }
    
render(){
    return (
        <div className="card border-info mb-3" style={{position :"right",direction:"rtl",display:"block","maxWidth": "18rem"}}>
        <div className="card-header">{this.props.item.item}</div>
        <div className="card-body text-info">
        <img className="d-block w-100" src={this.props.item.photoUrl} style={{height:"70px",width:"70px"}}/>
          <h5 className="card-title">FR code</h5>
          <p className="card-text">{this.props.item.price}.</p>
        </div>
        
        <button onClick={() => {
        
        this.setState({tatals : this.state.tatals+parseFloat(this.props.item.price)})
         alert(this.state.tatals)
    }}
     className="btn btn-primary">הוספה לסל</button>
      </div>
        );

}
}


export default Prod