import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import MyHeader from '../../components/MyHeader';
import styles from './styles';

const tabs = [
    { name:'万达广场', title: '全部', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '美食', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '9th Tab', img:require('../../images/aaaa.png') },
];
const labels = ['用户付款  2000-00-00',' 确认收到货款  2000-00-00',' 产品出库配送  2000-00-00'];
const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: CS.MAIN_COLOR, // 当前选中的 圆的 环的颜色
    separatorFinishedColor: CS.MAIN_COLOR, // 已完成的 连接线的颜色
    separatorUnFinishedColor: '#aaaaaa', // 未完成的 连接线的颜色
    stepIndicatorFinishedColor: CS.MAIN_COLOR, // 已完成的 连接线的颜色
    stepIndicatorUnFinishedColor: '#aaaaaa', // 未完成的 连接线的颜色
    stepIndicatorCurrentColor: '#ffffff',  // 当前选中的 圆的 里面的颜色
    stepIndicatorLabelFontSize: 15, // 未选中的 圆的 字体大小
    currentStepIndicatorLabelFontSize: 15, // 当前选中 圆的 字体大小
    stepIndicatorLabelCurrentColor: '#000000', // 当前选中 圆中 字体颜色
    stepIndicatorLabelFinishedColor: 'white', // 已完成的 园中 字体颜色
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666', // 未被选中的描叙文字颜色
    labelSize: 16, // 描叙文字的大小
    currentStepLabelColor: CS.MAIN_COLOR,  // 当前选中的描叙文字颜色
}

export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '详情',
    });
    state = {
        data:this.props.navigation.state.params.data,
    }

    render() {
        const { navigate } = this.props.navigation;
        const { data } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.detailView}>
                    <View style={styles.top}>
                        <Image source={require('../../images/dingdanxiangqing.png')}/>
                        <Text style={styles.topText}> 订单详情：</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.circular1}/>
                        <View style={styles.circular2}/>
                        <Text style={styles.contentText}>订单编号：231231231231231</Text>
                        <Text style={styles.contentText}>金额小记：¥{(Number(11123)).toLocaleString('en-US')}</Text>
                        <Text style={styles.contentText}>状态：
                            <Text style={styles.contentText}>{data}</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.addressView}>
                    <View style={styles.addressTop}>
                        <Image source={require('../../images/dingdanxiangqing.png')}/>
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
                </View>
                <MyHeader text='.订单商品' />

                {tabs.map((item,index)=>(
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('Detail')} >
                        <Image source={item.img} style={styles.image} />
                        <View style={styles.itemRight}>
                            <Text style={ styles.name}>全营业营业</Text>
                            <Text style={ styles.num }>X 1</Text>
                            <Text style={styles.priceTip}>单价：<Text style={styles.price}>¥ 324234</Text></Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {
                    '待付款' === data ?
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.footerLeft}>
                                <Text style={styles.footerLeftText}>取消订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.footerRight}>
                                <Text style={styles.footerRightText}>支付订单：¥ 387</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.stepView}>
                            <StepIndicator
                                customStyles={stepIndicatorStyles}
                                currentPosition={this.state.currentPosition}
                                labels={labels}
                                direction='vertical'
                                stepCount={3}
                            />
                        </View>
                }



            </ScrollView>
        )
    }

}

