import React , { Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';



//无状态组件(性能比较高，因为是一个普通的函数)
const AppReduxUi =(props)=>{
    const { inputValue, handleInput, handleButtonClick, list, handleDeleteItem} = props
    return(
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <div>
                <Input 
                    value={inputValue} 
                    placeholder="Basic usage" 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={handleInput}    
                />
                <Button 
                    type="primary"
                    onClick={handleButtonClick}
                >提交</Button>
            </div>

            <List
                style={{marginTop:'10px',width:'320px'}}
                bordered
                dataSource={list}
                renderItem={(item,index) => (<List.Item onClick={()=>{handleDeleteItem(index)}}> {item}</List.Item>)}>
                </List>
        </div>
    )

}


//ui组件（傻瓜组件）
// class AppReduxUi extends Component{
//     render(){
//         return(
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                 <div>
//                     <Input 
//                         value={this.props.inputValue} 
//                         placeholder="Basic usage" 
//                         style={{width:'300px',marginRight:'10px'}}
//                         onChange={this.props.handleInput}    
//                     />
//                     <Button 
//                         type="primary"
//                         onClick={this.props.handleButtonClick}
//                     >提交</Button>
//                 </div>

//                 <List
//                     style={{marginTop:'10px',width:'320px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDeleteItem(index)}}> {item}</List.Item>)}>
//                     </List>
//             </div>
//         )
//     }
// }

export default AppReduxUi;