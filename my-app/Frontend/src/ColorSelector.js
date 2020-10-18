import React, {Component} from 'react';


class ColorSelector extends Component {
    constructor(props) {
        super(props);
    }

    chooseColor(color) {
        this.props.updater(color);
        this.props.closer();
        console.log("ColorSelector changing to: " + color);
    }

    render() {
        return (
            <div className={"ColorSelector"}>
                <h1>Pick a Color</h1>
                <div className={"color-options"}>
                    {Object.values(this.props.colors).map(c => (
                        <div className={c === this.props.colors.DEFAULT ? 'hide' : 'show'}>
                            <div className={"color-option"} style={{background: c}}  onClick={() => this.chooseColor(c)}/>
                            <div className={"color-locker"}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorSelector;
