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
import { Carousel, Tabs, ActivityIndicator, InputItem } from 'antd-mobile';
import PercentageCircle from 'react-native-percentage-circle';
import Foot from './Foot';
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
        goods_id: this.props.navigation.state.params.goods_id,
        detailData: { },
        loading: false,
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        const params = {
            exec: 'y_app_goods_detail',
            token,
            data: {
                goods_id: this.state.goods_id.toString(),
            }
        };
        this.setState({ loading: true });
        post(
            params,
            (res)=>{
                this.setState({ loading: false, detailData: res });

            },
            (err)=>{
                this.setState({ loading: false });
                // Toast.info('请求数据失败',1)
            },
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { loading, detailData } = this.state;
        return (
            <View style={styles.container}>
                <ActivityIndicator toast text="正在加载" animating={loading} />
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
                            <View style={styles.left}>
                                <Text style={styles.name} numberOfLines={2}>{detailData.name}</Text>
                                <Text style={styles.priceTip}>单价／<Text style={styles.price}>{detailData.price}</Text></Text>
                                <Text style={styles.inventory} >预付定金：50%</Text>
                                <Text style={styles.inventory} >截止／采购日期：2018年3月22日</Text>
                            </View>
                            <View style={styles.right}>
                                <PercentageCircle
                                    radius={35}
                                    percent={70}
                                    color={CS.MAIN_COLOR3}
                                    borderWidth={5}
                                >
                                    <Text>90/120</Text>
                                </PercentageCircle>
                                <Text style={styles.inventory} >已完成70%</Text>
                            </View>

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

                    <Foot
                        leftOnPress={()=>navigate('CreateOrder')}
                        onPress={()=>navigate('CreateOrder')}
                        rightOnPress={()=>navigate('CreateOrder')}
                    />
                </View>

            </View>

        )
    }

}

