import React from "react";
import '../assets/css/header.css';

export default class Header extends React.Component { 
    render() {
        return (
            <header>
                <div>
                    <h1>React问答</h1>
                    <button className="btn" onClick={this.props.add}>添加问题</button>
                </div>
            </header>  
        )
    }
};