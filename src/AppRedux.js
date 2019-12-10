import React,{ Component } from 'react';
import { getInputChangeAction, addTodoItem, deleteToDoItem } from "./store/actionCreators";
import AppReduxUi from "./AppReduxUi";
import axios from 'axios';
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
        return <AppReduxUi 
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInput={this.handleInput}
                    handleButtonClick={this.handleButtonClick}
                    handleDeleteItem={this.handleDeleteItem}
            />
    }

    componentDidMount(){
        axios.get('http://localhost:3000/list.json').then(res=>{
            console.log("res",res)
        })
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