import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from "./actionTypes";

//设置默认的state
const defaultState={
    inputValue:'',
    list:["jackwang","TomLi"]
}


//导出reducer中的数据，相当于把仓库清单拿给仓库管理员
export default (state = defaultState,action)=>{
    //state是store上一次存储的数据
    //action是从页面传递过来的action对象
    // console.log("action=>",action)
    // console.log("state=>",state)
    
    //reducer可以接接收state，但是不能修改state
    //所以拿到数据之后需要做一次深拷贝
    if(action.type === CHANGE_INPUT_VALUE){
        //把state做一次深拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }


    if(action.type === ADD_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }


    if(action.type === DELETE_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }
    return state;
}