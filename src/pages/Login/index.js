import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { InputItem, ActivityIndicator, Toast } from 'antd-mobile';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

const isEyes1 = require('../../images/xiangshi.png');
const isEyes0 = require('../../images/xiangshiguangbi.png');

export default class index extends Component {
    static navigationOptions=({navigation})=>({
        header:null,
    })

    state = {
        userName:'fmd111',
        password:'123',
        loading: false,
        isEyes: true
    }

    checkLogin = () => {
        const { userName, password } = this.state;
        if(userName && password) {
            this.login()
        }else {
            Toast.info('账号和密码不能为空');
            return;
        }
    }


    login=()=>{
        const { userName, password } = this.state;
        const params = {
            exec: 'y_app_login',
            token: '',
            data: {
                userName,
                password,
            }
        };
        this.setState({loading: true});
        post(
            params,
            (res) => {
                token = res.token; // 全局保存token
                // 缓存登录状态 token
                storage.save({
                    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                    data: {
                        token: res.token,
                    },
                });
                this.setState({loading: false});
                //重置跳转到app首页
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'MyTab'})]
                })
                this.props.navigation.dispatch(resetAction)
            },
            (err) => {
                this.setState({loading: false});
                Toast.info('请求数据失败', 1)
            },
        )
    }


    render() {
        const { loading, isEyes } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={loading}
                    toast
                    text='登录中'
                />
                <ImageBackground source={require('../../images/touxiangbeijing.png')} style={styles.image}>
                    <Image source={require('../../images/touxiang.png')} />
                </ImageBackground>
                <View style={styles.center}>
                    <View style={styles.inputItemView}>
                        <Text style={styles.phoneTip}>+86  <Text style={styles.phoneTip2}>|</Text></Text>
                        <InputItem
                            // type='phone'
                            autoCapitalize='none'
                            placeholder='请输入您的商户ID'
                            style={styles.inputItemID}
                            clear
                            maxLength={20}
                            onChange={userName => { this.setState({ userName }) }}
                            // onBlur={(v) => { console.log('onBlur', v); }}
                        />
                    </View>
                    <View style={styles.inputItemView}>
                        <Image source={require('../../images/mima.png')} />
                        <InputItem
                            type={isEyes?'password':null}
                            placeholder='请输入您的登录密码'
                            style={styles.inputItemID}
                            clear
                            maxLength={20}
                            extra={
                                <TouchableOpacity onPress={()=> this.setState({isEyes:!isEyes})} style={styles.eyesBox}>
                                    <Image source={isEyes?isEyes0:isEyes1} />
                                </TouchableOpacity>
                            }
                            onChange={password => { this.setState({ password }) }}
                            // onBlur={(v) => { console.log('onBlur', v); }}
                        />
                    </View>
                    <TouchableOpacity style={styles.okButton} onPress={this.checkLogin}>
                        <TextBtn text='立即登录' />
                    </TouchableOpacity>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.registerTip}>还没有账号？
                        <Text style={styles.register} onPress={()=>navigate('Register')}>立即注册</Text>
                    </Text>
                </View>
            </View>
        );
    }
};

