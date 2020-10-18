import React, {Component} from 'react';


class ColorSelector extends Component {
    constructor(props) {
        super(props);
    }

    chooseColor(color) {
        if (!this.isDisabled(color) || this.isSelected(color)) {
            return;
        }
        this.props.updater(color);
        this.props.closer();
        console.log("ColorSelector changing to: " + color);
    }

    isDisabled = (color) => {
        if(this.props.mode === "Frame") {
            return (this.props.me.frame_collection && this.props.me.frame_collection.includes(color));
        }
        return (this.props.me.name_collection && this.props.me.name_collection.includes(color));
    }

    isSelected = (color) => {
        if(this.props.mode === "Frame") {
            return (this.props.me.frame_color === color);
        }
        return (this.props.me.name_color === color);
    }

    render() {
        return (
            <div className={"ColorSelector"}>
                <h1>Pick a Color</h1>
                <div className={"color-options"}>
                    {Object.values(this.props.colors).map(c => (
                        <div className={c === this.props.colors.DEFAULT ? 'hide' : 'show'}>
                            <div className={"color-option"} style={{background: c}} onClick={() => this.chooseColor(c)} title={this.isDisabled(c) ? (this.isSelected(c) ? "You have this color selected." : "Click to switch to this color.") : "You do not have this color unlocked yet."}/>
                            <div className={"color-locker"}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorSelector;
