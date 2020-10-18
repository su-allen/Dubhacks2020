import React, {Component} from 'react';
import './App.css';

class ShopItem extends Component {
    constructor(props) {
        super(props);
    }

    purchase = (type, color) => {
        this.props.handleShopBuy(type, color);
    }

    render() {
        return (
            <div className="ShopItemHolder">
                <button disabled={this.props.disabled} title={"Cost: 100 points"} onClick={() => this.purchase(this.props.type, this.props.color)} className="ShopItem" style={(this.props.type === "frame_color") ? {backgroundColor: this.props.color} : {backgroundColor: "#b0aeae"}}>
                    <p className="ShopItem" contenteditable={false} style={(this.props.type === "frame_color") ? ((this.props.color === "Black") ? {color: "#b0aeae"} : {color: "black"}) : {color: this.props.color}}>{`${this.props.color} ${this.props.type.replace(/_/g, " ")}`}</p>
                </button>
            </div>
        );
    }
}

export default ShopItem;
