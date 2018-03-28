import React, {Component} from 'react';
import {
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    Alert,
    Linking
} from 'react-native';

import { NavigationActions } from 'react-navigation'
import { List, Toast } from 'antd-mobile';
const Item = List.Item;
import styles from './styles';
import MyItem from '../../components/MyItem'

const img1 = require('../../images/jinhuodan.png');
const img2 = require('../../images/caijidingdan.png');
const img3 = require('../../images/shouhuodizhi.png');
const img4 = require('../../images/gerenshezhi.png');
export default class index extends Component {
    state = {
        user_name: '李斌',
        phone: '17362663079',
        money2: '¥120.00',
    };

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../images/touxiang.png')} />
                    <Text style={styles.name}>{this.state.user_name}</Text>
                    <View style={styles.phoneBox}>
                        <Image source={require('../../images/shouji.png')}/>
                        <Text style={styles.phone}>  {this.state.phone}</Text>
                    </View>
                </View>
                <MyItem img={img1} text='进货单' onPress={()=>navigate('ImportOrder')}/>
                <MyItem img={img2} text='集采订单' onPress={()=>navigate('JiCaiOrder')}/>
                <MyItem img={img3} text='收货地址' onPress={()=>navigate('Address')}/>
                <View style={styles.setting}>
                    <MyItem img={img4} text='个人设置' onPress={()=>navigate('Setting')}/>
                </View>

            </View>
        );
    }


    loginOut = () => {
        const {dispatch} = this.props.navigation
        const resetLogin = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        })
        // 清空登陆状态
        // storage.remove({ key: 'loginState' });
        dispatch(resetLogin)
    }
}

