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

    alreadyOwned = () => {
        if (this.props.type === "frame_name") {
            return this.props.me.frame_collection && this.props.me.frame_collection.includes(this.props.color);
        } else {
            return this.props.me.name_collection && this.props.me.name_collection.includes(this.props.color);
        }
    }

    getInside = () => {
        if (this.props.type === "frame_color") {
            return(<img src="profile_picture.png" className="ShopItem_Round" style={{border: this.props.color + " solid 5px"}}></img>);
        }
        return (<p className="ShopItem_Rect" contenteditable={false} style={(this.props.type === "frame_color") ? ((this.props.color === "Black") ? {color: "#b0aeae"} : {color: "black"}) : {color: this.props.color}}>{this.props.me.name}</p>);
    }

    render() {
        return (
            <div className="ShopItemHolder">
                <button disabled={this.props.disabled} title={this.props.disabled ? (this.alreadyOwned() ? "You" +
                    " already own this item" : "You don't have enough to buy this item. Cost: 100 points") : "Cost:" +
                    " 100 points"} onClick={() => this.purchase(this.props.type, this.props.color)} className={this.props.type === "frame_color" ? "ShopItem_Round" : "ShopItem_Rect"} style={(this.props.type === "frame_color") ? {background: "transparent", border: "none"} : {backgroundColor: "#b0aeae"}}>
                    {this.getInside()}
                </button>
            </div>
        );
    }
}

export default ShopItem;
