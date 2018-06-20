import React from "react";

import Item from "./NewsItem";
import '../assets/css/list.css';

export default class NewsList extends React.Component {
    render() {
        return (
            <main>
                {this.props.list.map((item, index)=> {
                    return <Item 
                        item={item} 
                        key={item.id} 
                        index={item.id}  // 根据id使star++ or --
                        onUp={this.props.upStar} 
                        onDown={this.props.downStar} 
                    />
                })} 
            </main>
        );
    }
};