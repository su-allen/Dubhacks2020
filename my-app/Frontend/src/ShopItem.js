import React, {Component} from 'react';
import './App.css';

class ShopItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    purchase = (type, color) => {
        this.props.handleShopBuy(type, color);
    }

    alreadyOwned = (color) => {
        if (this.props.type === "frame_name") {
            return this.props.me.frame_collection && this.props.me.frame_collection.includes(color);
        } else {
            return this.props.me.name_collection && this.props.me.name_collection.includes(color);
        }
    }

    render() {
        return (
            <div className="ShopItemHolder">
                <button disabled={this.props.disabled} title={this.props.disabled ? (this.alreadyOwned(this.props.color) ? "You already own this item" : "You don't have enough to buy this item. Cost: 100 points") : "Cost: 100 points"} onClick={() => this.purchase(this.props.type, this.props.color)} className="ShopItem" style={(this.props.type === "frame_color") ? {backgroundColor: this.props.color} : {backgroundColor: "#b0aeae"}}>
                    <p className="ShopItem" contenteditable={false} style={(this.props.type === "frame_color") ? ((this.props.color === "Black") ? {color: "#b0aeae"} : {color: "black"}) : {color: this.props.color}}>{`${this.props.color} ${this.props.type.replace(/_/g, " ")}`}</p>
                </button>
            </div>
        );
    }
}

export default ShopItem;
