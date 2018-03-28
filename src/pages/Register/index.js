import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import { InputItem, ActivityIndicator, Toast } from 'antd-mobile';
import styles from './styles';

const agree0 = require('../../images/gouxuan.png');
const agree1 = require('../../images/gouxuan01.png');

export default class index extends Component {
    static navigationOptions=({navigation})=>({
        header:null,
    })

    state = {
        userID:'',
        password:'',
        password2:'',
        loading: false,
        agree: false,
    }


    register=()=>{
        const { userID, password, password2 } = this.state;
        if(userID && password && password2) {
            if (password===password2) {
                this.setState({ loading: true })
                this.interval = setTimeout(() => {
                    this.setState({ loading: false })
                    this.props.navigation.navigate('Login')
                }, 2000)
            }else {
                Toast.info('两次输入的密码不一致')
            }
        }else {
            Toast.info('请填写完整正确的信息')
        }
    }

    render() {
        const { loading, agree } = this.state
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={loading}
                    toast
                    text='注册中'
                />
                <ImageBackground source={require('../../images/touxiangbeijing.png')} style={styles.image}>
                    <Image source={require('../../images/touxiang.png')} />
                </ImageBackground>
                <View style={styles.center}>
                    <View style={styles.inputItemView}>
                        <Text style={styles.phoneTip}>+86  <Text style={styles.phoneTip2}>|</Text></Text>
                        <InputItem
                            type='phone'
                            placeholder='请输入您的商户ID'
                            style={styles.inputItemID}
                            clear
                            maxLength={20}
                            onChange={(userID) => { this.setState({ userID }) }}
                        />
                    </View>
                    <InputItem
                        type='password'
                        placeholder='请输入您的登录密码'
                        style={styles.inputItem}
                        clear
                        maxLength={20}
                        onChange={(password) => { this.setState({ password }) }}
                    />
                    <InputItem
                        type='password'
                        placeholder='请再次输入您的登录密码'
                        style={styles.inputItem}
                        clear
                        maxLength={20}
                        onChange={(password2) => { this.setState({ password2 }) }}
                    />

                    <View style={styles.tipView}>
                        <TouchableOpacity onPress={()=>this.setState({agree:!agree})}>
                            <Image source={agree?agree0:agree1} />
                        </TouchableOpacity>
                        <Text style={styles.tip}>  我已阅读并接受<Text style={styles.tipName}>《相关协议》</Text></Text>

                    </View>
                    <TouchableOpacity style={styles.okButton} onPress={this.register}>
                        <TextBtn text='提交注册' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

