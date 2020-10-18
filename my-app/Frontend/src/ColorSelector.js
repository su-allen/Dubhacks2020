import React, {Component} from 'react';


class ColorSelector extends Component {
    constructor(props) {
        super(props);
    }

    chooseColor(color) {
        console.log(color);
    }

    render() {
        return (
            <div className={"ColorSelector"}>
                <h1>Pick a Color</h1>
                <div className={"color-options"}>
                    {Object.values(this.props.colors).map(c => (
                        <div className={"color-option"} style={{background: c}}  onClick={() => this.chooseColor(c)}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorSelector;
