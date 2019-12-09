// 引入redux中的创建store的方法
import { createStore } from "redux";

//引入仓库清单
import reducer from "./reducer";


//创建一个仓库，并且把reducer传递给仓库管理员
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//导出整个仓库
export default store;