
import React, { Component } from 'react';
import { Dimensions, AsyncStorage, PixelRatio, Platform, Alert } from 'react-native';


import NullPage from '../components/NullPage';
import Text1 from '../components/Text1';
import Text2 from '../components/Text2';
import Text3 from '../components/Text3';
import TextBtn from '../components/TextBtn';
import TextPrice from '../components/TextPrice';
// 常用颜色
import * as CS from '../constants/color';

// 处理安卓，iOS字体不同的类，使用方法 fontSize:FONT_SIZE(20)
//import FontSize from './FontSize';
// 处理安卓，iOS宽高的区别，使用方法 width:px2dp(20)
// import { px2dp } from './Tool';

// teaset中提供的一些常用方法
// import { Theme, Toast } from 'teaset';

import post from './Fetch';
// 配置文件，可以放网络请求等
// import Config from './Config';

// 通过系统API获得屏幕宽高
const { height, width } = Dimensions.get('window');


// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕宽度
global.W = width;
// 获取屏幕高度
global.H = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 系统是iOS
global.CS = CS;
// 网络请求
global.post = post;
// 同样式的文字
// global.LeftText = LeftText;
// // 同样式的文字
global.Text1 = Text1;
global.Text2 = Text2;
global.Text3 = Text3;
global.TextPrice = TextPrice;
global.TextBtn = TextBtn;
// 没有数据的空白页面
global.NullPage = NullPage;
// global.Text4 = Text4;
// token 唯一标识符
global.token = '';
// // 适配字体
// global.FONT_SIZE = FontSize;
// // 屏幕适配
// global.px2dp = px2dp;

// 网络请求
// global.RTRequest = RTRequest;
// 配置
// global.Config = Config;

// 图片加载
// global.Images = Images;



