import React, { Component } from 'react';
import ShopItem from './ShopItem';

/**
 * this.props:
 * - me : student
 * - colors : array of all available color names
 * - handleShopBuy(type, color) : handles the purchase from the shop
 */
class Shop extends Component {
    constructor(props) {
        super(props);
    }

    getAllShopItems = () => {
        var shop_items = [];
        Object.values(this.props.colors).forEach((color) => {
            shop_items.push({ color: color, type: "frame_color" });
            shop_items.push({ color: color, type: "name_color" });
        });
        return shop_items;
    }

    // Returns true if the student already owns the item.
    checkDisabled = (type, color) => {
        if (this.props.me.points_available < 100) {
            return true;
        }
        if (type === "frame_color") {
            return (this.props.me.frame_collection && this.props.me.frame_collection.includes(color));
        } else { // type == "name_color"
            return (this.props.me.name_collection && this.props.me.name_collection.includes(color));
        }
    }

    render() {
        return (
            <div className="Shop">
                {this.getAllShopItems().map((shop_item) => {
                    if (shop_item.color) {
                        return (<ShopItem me={this.props.me} color={shop_item.color} type={shop_item.type} handleShopBuy={this.props.handleShopBuy} disabled={this.checkDisabled(shop_item.type, shop_item.color)}></ShopItem>);
                    }
                })}
            </div>
        );
    }
}

export default Shop;
