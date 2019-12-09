import React from 'react'
import PropsTypes from 'prop-types'

class TodoItemRedux extends React.Component{
	handleClick=()=>{
		const { deleteItem, index } = this.props
		deleteItem(index)
	}
	
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

	render(){
		const { content } = this.props
		return(
			<li onClick={this.handleClick}>{content}</li>
		)
	}
}

export default TodoItemRedux;