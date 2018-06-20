import React from "react";
import Header from "./components/Header";
import Add from './components/AddQuestion';
import List from "./components/NewsList";

import './assets/css/base.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dis: false,
            list : [
                {
                    id: 0,
                    star: 12,
                    title: "产品经理与程序员矛盾的本质是什么？",
                    content: "理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。"
                },
                {
                    id: 1,
                    star: 18,
                    title: "热爱编程是一种怎样的体验？",
                    content: "别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。"
                },
                {
                    id: 2,
                    star: 5,
                    title: "热爱编程是一种怎样的体验？",
                    content: "别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。"
                }
            ]
        }
    }
    componentDidMount() {
        this.sortList();
    }
    sortList = ()=> {  // 可以这样这，就不用bind this了
        this.state.list.sort((a, b)=> {  // 降序排列
            return Number(a.star) < Number(b.star);
        });
        this.setState({
            list: this.state.list
        });
    }
    add = ()=> {
        this.setState({
            dis: true
        });
    }
    cancel = ()=> {
        this.setState({
            dis: false
        });
    }
    confirm = (title, content)=> { 
        // 将新数据push进list
        this.state.list.push({
            id: this.state.list.length,
            star: 0,
            title: title,
            content: content
        }); 
    }
    upStar = (id)=> {  // 赞同
        var newList = this.state.list;

        newList = newList.map(item=> {
            if(item.id == id) {
                item.star++;
            }
            return item;
        }); 

        this.setState({
            list: newList
        });

        this.sortList();
    }
    downStar = (id)=> { // 不赞同
        var newList = this.state.list;

        newList = newList.map(item=> {
            if(item.id == id && item.star) {
                item.star--;
            }
            return item;
        }); 

        this.setState({
            list: newList
        });

        this.sortList();
    }
    render() {
        return (
            <div>
                <Header add={this.add} />
                <Add dis={this.state.dis} cancel={this.cancel} confirm={this.confirm} />
                <List list={this.state.list} upStar={this.upStar} downStar={this.downStar} /> 
            </div>
        );
    }
}