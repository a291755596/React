import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import { getInputChangeAction, addTodoItem, deleteToDoItem } from "./store/actionCreators";





//引入进来的store会自动调用reduer中的内容
import store from './store'


class AppRedux extends Component{
    constructor(props){
        super(props);
        //获取store中的state数据 store.getState()
        this.state = store.getState()

        //订阅一次store中的内容，只要store中的数据发生改变，
        //handleStoreChange中的内容就会自动执行
        store.subscribe(this.handleStoreChange)
    }

    render(){
        return(
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder="Basic usage" 
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleInput}    
                    />
                    <Button 
                        type="primary"
                        onClick={this.handleButtonClick}
                    >提交</Button>
                </div>

                <List
                    style={{marginTop:'10px',width:'320px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{this.handleDeleteItem(index)}}> {item}</List.Item>)}>

                    </List>
            </div>
        )
    }

    handleInput=(e)=>{
        //创建action告诉reducer来改变全局state中的值
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange=()=>{
        this.setState(store.getState())
    }

    handleButtonClick=()=>{
        const action=addTodoItem()
        store.dispatch(action)
    }

    handleDeleteItem=(index)=>{
        const action = deleteToDoItem(index)
        store.dispatch(action)
    }   
}


export default AppRedux;