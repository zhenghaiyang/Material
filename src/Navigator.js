
import {StackNavigator, NavigationActions} from 'react-navigation';
import {ToastAndroid, Platform } from 'react-native'

import * as CS from './constants/color'
import MyTab from './MyTab';
import Login from './pages/Login';
import Register from './pages/Register';
import ImportOrder from './pages/ImportOrder';
import JiCaiOrder from './pages/JiCaiOrder';
import Address from './pages/Address';
import AddressAdd from './pages/AddressAdd';
import AddressEdit from './pages/AddressEdit';
import ClassDetail from './pages/ClassDetail';
import HomeSearch from './pages/HomeSearch';
import JiCai from './pages/JiCai';
import GoodsDetail from './pages/GoodsDetail';
import Setting from './pages/Setting';
import CreateOrder from './pages/CreateOrder';
import JiCaiDetail from './pages/JiCaiDetail';
import ImportOrderDetail from './pages/ImportOrderDetail';
import JiCaiOrderDetail from './pages/JiCaiOrderDetail';
import JiCaiOrderDetailFail from './pages/JiCaiOrderDetailFail';

const Navigator = StackNavigator({
    Login: {screen: Login },
    Register: { screen : Register }, // 注册
    //这个就是进来的页面
    MyTab: {
        screen: MyTab, navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: CS.MAIN_COLOR,
            },
            headerTitleStyle: {
                // 用于android头部标题的居中
                alignSelf: 'center'
            },
        }
    },
    ImportOrder: { screen : ImportOrder }, // 进货单
    JiCaiOrder: { screen : JiCaiOrder }, // 集采订单 purchase
    Address: { screen : Address }, // 地址管理
    Setting: { screen : Setting }, // 地址管理
    AddressAdd: { screen : AddressAdd }, // 地址新增
    AddressEdit: { screen : AddressEdit }, // 地址修改
    ClassDetail: { screen : ClassDetail }, // 详细分类
    HomeSearch: { screen : HomeSearch }, // 首页搜索-结果
    JiCai: { screen : JiCai }, // 首页集采-更多 页面
    GoodsDetail: { screen : GoodsDetail }, // 商品详情
    CreateOrder: { screen : CreateOrder }, // 创建订单
    JiCaiDetail: { screen : JiCaiDetail }, // 进货单-已出库
    ImportOrderDetail: { screen : ImportOrderDetail }, // 进货单-详情查看
    JiCaiOrderDetail: { screen : JiCaiOrderDetail }, // 集采订单-详情查看
    JiCaiOrderDetailFail: { screen : JiCaiOrderDetailFail }, // 集采订单-详情查看-失败

}, {
    headerMode: 'screen',
    navigationOptions: {
        headerBackTitle: null,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: CS.MAIN_COLOR,
        },
        headerTitleStyle: {
            //用于android头部标题的居中
            //alignSelf: 'center'
        },
    }
});


/**
 * 处理安卓返回键
 */
let lastBackPressed = 0
const defaultStateAction = Navigator.router.getStateForAction;
Navigator.router.getStateForAction = (action, state) => {
    if (state && action.type === NavigationActions.BACK && state.routes.length === 1) {
        if (lastBackPressed + 2000 < Date.now()) {
            ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
            lastBackPressed = Date.now();
            const routes = [...state.routes];
            return {
                ...state,
                ...state.routes,
                index: routes.length - 1,
            };
        }
    }
    return defaultStateAction(action, state);
};
export default Navigator;
