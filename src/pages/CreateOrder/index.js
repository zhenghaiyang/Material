import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput,
    ScrollView
} from 'react-native';
import { Carousel, Progress, SearchBar, InputItem } from 'antd-mobile';
import MyHeader from '../../components/MyHeader';
import TextTheme from '../../components/TextTheme';
import styles from './styles';

const tabs = [
    { name:'万达广场', title: '全部', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '美食', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '9th Tab', img:require('../../images/aaaa.png') },
];

export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '创建订单',
    });
    state = {

    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <ScrollView style={styles.container}>
                <View style={styles.detailView}>
                    <View style={styles.top}>
                        <Image source={require('../../images/dingdanxiangqing.png')}/>
                        <Text style={styles.topText}> 订单详情：</Text>
                    </View>
                    <View style={styles.content}>
                        <Text1 text='订单编号：231231231231231'/>
                        <Text style={styles.contentText}>金额小计：
                            <TextPrice text={`¥${(Number(11123)).toLocaleString('en-US')}`}/>
                        </Text>
                    </View>
                </View>

                <View style={styles.addressView}>
                    <View style={styles.addressTop}>
                        <Image source={require('../../images/shouhuodizhi01.png')}/>
                        <Text style={styles.topText}> 收货地址：</Text>
                    </View>
                    <Image source={require('../../images/fengexian.png')} style={styles.line}/>
                    <View style={styles.addressContent} >
                        <View style={[styles.addressTop,{justifyContent:'space-between'}]}>
                            <Text style={styles.contentText}>李斌</Text>
                            <Text style={styles.contentText}>1723474825</Text>
                        </View>
                        <Text3 text='北京北京北京北京北京北京北京' />
                    </View>
                    <TouchableOpacity style={styles.addressBtnBox}>
                        <Text style={styles.contentText}>选择／编辑</Text>
                    </TouchableOpacity>
                </View>
                <MyHeader text='.订单商品' />

                {tabs.map((item,index)=>(
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('Detail')} >
                        <Image source={item.img} style={styles.image} />
                        <View style={styles.itemCenter}>
                            <Text style={ styles.name} numberOfLines={2} >全营业营业</Text>
                            <Text style={styles.priceTip}>单价：<Text style={styles.price}>¥ 324234</Text></Text>
                        </View>
                        <Text style={ styles.num }>x 1</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.createBtnBox}>
                    <Image source={require('../../images/chuangjian.png')} />
                    <TextTheme text='  创建订单' />
                </TouchableOpacity>

            </ScrollView>
        )
    }

}

