import React from 'react'
import PropsTypes from 'prop-types'

class TodoItem extends React.Component{
	handleClick=()=>{
		// 可以使用es6的这种写法，来简化代码
		const { deleteItem, index } = this.props
		deleteItem(index)
		// this.props.deleteItem(this.props.index)
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