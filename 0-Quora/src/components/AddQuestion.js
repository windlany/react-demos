import React from "react";
import '../assets/css/add.css';

export default class Add extends React.Component { 
    constructor(props) {
        super(props); 
        this.cancel = this.cancel.bind(this);
        this.confirm = this.confirm.bind(this);
    } 
    cancel() {
        this.refs.title.value = "";
        this.refs.ques.value = "";
        this.props.cancel();
    }
    confirm() {
        var title = this.refs.title.value;
        var content = this.refs.ques.value;

        if(title && content) { 
            this.props.confirm(title, content);
            this.cancel();
        } else {
            alert("请输入问题");
        }
    }
    render() {
        return (
            <div className="add" style={{display: this.props.dis ? "block": "none"}}>
                <h4>问题</h4>
                <input type="text" placeholder="您的问题的标题" ref="title" />
                <textarea placeholder="问题的描述" ref="ques"></textarea>
                <div>
                    <button onClick={this.cancel}>取消</button>
                    <button className="confirm" onClick={this.confirm}>确认</button>
                </div>
            </div>
        );
    }
}; 