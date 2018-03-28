import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import Home from './pages/Home'
import Class from './pages/Class'
import Cart from './pages/Cart'
import My from './pages/My'
import { TabNavigator, TabBarBottom } from 'react-navigation';

const shouye = require('./images/shouye.png');
const shouye01 = require('./images/shouye01.png');
const fenlei = require('./images/fenlei.png');
const fenlei01 = require('./images/fenlei01.png');
const gouwuche = require('./images/gouwuche.png');
const gouwuche01 = require('./images/gouwuche01.png');
const gerenzhongxin = require('./images/gerenzhongxin.png');
const gerenzhongxin01 = require('./images/gerenzhongxin01.png');

export  default  MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: '首页',
            header: null,
            tabBarIcon: ({focused}) => (
                <Image source={focused?shouye01:shouye}/>),
        }
    },
    Class: {
        screen: Class,
        navigationOptions:{
            title: '分类',
            tabBarIcon: ({focused}) => (
                <Image source={focused?fenlei01:fenlei}/>),
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions:{
            title: '购物车',
            tabBarIcon: ({focused}) => (
                <Image source={focused?gouwuche01:gouwuche}/>),
        }
    },

    My: {
        screen: My,
        navigationOptions:{
            title: '个人中心',
            header: null,
            tabBarIcon: ({focused}) => (
                <Image source={focused?gerenzhongxin01:gerenzhongxin}/>),
        }
    },
}, {

    tabBarPosition: 'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    initialRouteName:'Home',
    backBehavior:'Home',
    lazy:true,
    tabBarComponent:TabBarBottom,
    tabBarOptions: {
        //选中时候的颜色
        activeTintColor: CS.MAIN_COLOR,
        //未选中时候的颜色
        inactiveTintColor: '#ABAAB3',
        //去掉android的下划线
        indicatorStyle:{height:0},
        activeBackgroundColor:'white',
        inactiveBackgroundColor:'white',
        showIcon:true,
        //整个背景颜色
    },
});