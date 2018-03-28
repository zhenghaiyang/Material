/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import { Carousel, Tabs, SearchBar, InputItem } from 'antd-mobile';
import styles from './styles';

const tabs = [
    { title: '产品详情' },
    { title: '技术参数' },
];


export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '商品详情',
    });
    state = {
        searchText: '',
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>

                    {/*轮播图*/}
                    <Carousel autoplay infinite>
                        <Image source={require('../../images/aaaa.png')} style={styles.img}/>
                        <Image source={require('../../images/aaaa.png')} style={styles.img}/>
                        <Image source={require('../../images/aaaa.png')} style={styles.img}/>
                        <Image source={require('../../images/aaaa.png')} style={styles.img}/>
                    </Carousel>


                    <View style={styles.content}>
                        <Text style={styles.name} numberOfLines={2}>产产品集采产品集采产品集采产品集采产品集采产品集采产品集采品集采</Text>
                        <Text style={styles.priceTip}>单价／<Text style={styles.price}>¥4534.52</Text></Text>
                        <TextTip text='库存: 453452'/>
                    </View>

                    <Tabs
                        tabs={tabs}
                        initialPage={1}
                        tabBarActiveTextColor={CS.MAIN_COLOR}
                        tabBarInactiveTextColor={CS.FONT_COLOR_SECONDARY}
                        tabBarUnderlineStyle={{backgroundColor:CS.MAIN_COLOR}}
                    >
                        <View style={{flex:1}}>
                            <Text >Content of first tab</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>Content of first tab</Text>
                        </View>
                    </Tabs>
                </ScrollView>

                <View style={styles.footerView}>
                    <TouchableOpacity
                        style={[styles.footer, styles.footerLeft]}
                        onPress={() => alert('去购物车')}
                    >
                        <Image source={require('../../images/kefu.png')}/>
                        <TextTip text='客服'/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.footer, styles.footerCenter]}
                        onPress={() => alert('加入购物车')}
                    >
                        <Image source={require('../../images/gouwuche02.png')}/>
                        <Text2 text=' 加入购物车'/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.footer, styles.footerRight]}
                        onPress={() => this.props.navigation.navigate('OrderConfirm')}
                    >
                        <TextBtn text='立即购买'/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

}

