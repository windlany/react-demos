import React from "react";
import '../assets/css/item.css';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }
    up() {
        this.props.onUp(this.props.index);
    }
    down() {
        this.props.onDown(this.props.index);
    }
    render() {
        return (
            <div className="item">
                <div className="left">
                    <button className="btn up" onClick={this.up}><span></span>{this.props.item.star}</button>
                    <button className="btn down" onClick={this.down}><span></span>{this.props.item.star}</button>
                </div>
                <div className="right">
                    <h3 className="title">{this.props.item.title}</h3>
                    <p>{this.props.item.content}</p>
                </div>
            </div>
        );
    }
};
