import React, {
    Component,
    Fragment
} from 'react';
import TodoItem from './TodoItem';




class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:['learn English','watch video']
        }
    }

    handleInput=(e)=>{
        // 在react16中setState需要修改成函数的形式,直接获取或报错，后期会修改
        const value = e.target.value
        this.setState(()=>({
            inputValue: value
        }))

        //react16之前的写法
        // this.setState({
        //     inputValue:e.target.value
        // })
    }

    handleSubmit=()=>{
        //这里的prevState就相当于this.state，代表的意思就是state改变之前的状态
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))

        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
    }

    handleDelete=(index)=>{
        //复制一个数组
        //const list = [...this.state.list]

        //对复制的数组进行操作
        // list.splice(index,1)

        // this.setState(()=>({
        //     list
        // }))

        //===========改写函数========
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return { list }
        })


        // 再改原始数组
        // this.setState({
        //     list : list
        // })
    }

    getTodoItem(){
        return(
            this.state.list.map((item,index)=>{
                return(
                    <TodoItem
                        key={index} 
                        index={index} 
                        content={item}
                        deleteItem={this.handleDelete} 
                    />
                )
            })
        )
    }


    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertvalue">输入内容：</label>
                    <input type="text"
                        id="insertvalue" 
                        onChange={this.handleInput} 
                        value={this.state.inputValue}
                    />
                   <button onClick={this.handleSubmit}>提交</button>
                </div>

                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;