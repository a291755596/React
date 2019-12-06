import React from 'react'
import PropsTypes from 'prop-types'

class TodoItem extends React.Component{
	handleClick=()=>{
		// 可以使用es6的这种写法，来简化代码
		const { deleteItem, index } = this.props
		deleteItem(index)
		// this.props.deleteItem(this.props.index)
    }

    /*
        react中，父组件数据发生改变之后，会更新render函数中的内容
        在父组件render函数调用之后，子组件的render也会跟着一起更新
        如果父组件频繁更新，子组件不更新的话，就会损耗性能

        shouldComponentUpdate 可以理解为询问子组件是否更新
        nextProps:接下来的我的props会变化成什么样子
        nextState：接下来我的State会变化成什么样子

        如果接下来props中的content和父组件传递过来的props不相等，那么子组件就不让它更新
    */
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }





	render(){
		// 可以使用es6的这种写法，来简化代码
		const { content , test } = this.props
		return(
			// <li onClick={this.handleClick}>{this.props.content}</li>
			<li onClick={this.handleClick}>{test} - {content}</li>
		)
	}
}


TodoItem.propTypes = {
	//校验父组件传过来的数据类型是否正确，isRequired代表是否为必传参数
	test:PropsTypes.string.isRequired,
	content:PropsTypes.string,
	deleteItem:PropsTypes.func,
	index:PropsTypes.number
}

TodoItem.defaultProps={
	//如果父组件无法向子组建传递相关的值，可以使用一个默认值来代替
	test:'Hello,world'
}


export default TodoItem;