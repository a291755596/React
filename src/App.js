import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'


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
        // const value = e.target.value

        //ref来获取真实dom的value，这个语法可以替换e.target.value，不推荐使用
        //console.log(this.input.value)
        const value = this.input.value

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
        }),()=>{
            //setState异步函数执行完成之后，才会调用的console
            console.log("在setState回调后，调用的console",this.ul.querySelectorAll('li').length)
        })

        //获取元素节点的个数，这样打印出来的内容总会少一条，因为setState是异步的。
        console.log("在setState外调用的console",this.ul.querySelectorAll('li').length)

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

    componentDidMount(){
        axios.get("api/todolist").then(()=>{
            alert("jackwang")
        }).catch(()=>{
            alert("error")
        })
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
                        ref={(input)=>{this.input = input}}
                    />
                   <button onClick={this.handleSubmit}>提交</button>
                </div>

                <ul ref={(ul)=>{this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;