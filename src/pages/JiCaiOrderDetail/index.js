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
const labels = [' 用户付订  2000.00.00',
    ' 确认收到订金  2000.00.00',
    ' 集采截止  2000.00.00',
    ' 支付尾款  2000.00.00',
    ' 收到尾款  2000.00.00',
    ' 产品出库配送  2000.00.00'];

const labels2 = [' 用户付订  2000.00.00',
    ' 确认收到订金  2000.00.00',
    ' 集采失败  2000.00.00',
    ' 返回用户订金  2000.00.00'];

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
        headerTitle: '采集订单',
    });
    state = {
        data:this.props.navigation.state.params.data,
    }

    renderFooter(data) {
        if('待付订金' === data){
            return <View style={styles.footer}>
                <TouchableOpacity style={styles.footerLeft}>
                    <Text style={styles.footerLeftText}>取消订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerRight}>
                    <Text style={styles.footerRightText}>支付订金：¥ 387</Text>
                </TouchableOpacity>
            </View>
        }else if('待付尾款' === data){
            return <View style={styles.stepView}>
                <MyHeader text='.集采订单流程' />
                <View style={styles.setp}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        direction='vertical'
                        stepCount={6}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerRight}>
                        <Text style={styles.footerRightText}>支付尾款：¥ 387</Text>
                    </TouchableOpacity>
                </View>

            </View>
        }else if('订单失败' === data){
            return <View style={styles.stepView}>
                <MyHeader text='.集采订单流程' />
                <View style={styles.setp}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels2}
                        direction='vertical'
                        stepCount={4}
                    />
                </View>
            </View>
        }else {
            return <View style={styles.stepView}>
                <MyHeader text='.集采订单流程' />
                <View style={styles.setp}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        direction='vertical'
                        stepCount={6}
                    />
                </View>
            </View>
        }
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
                        <Text style={styles.contentText}>订单编号：
                            <Text1 text='231231231231231'/>
                        </Text>
                        <Text style={styles.contentText}>金额小记：
                            <Text style={styles.redText}>¥{(Number(11123)).toLocaleString('en-US')}</Text>
                        </Text>
                        <Text style={styles.contentText}>预付比例：
                            <Text1 text='50%'/>
                        </Text>
                        <Text style={styles.contentText}>预付金额：
                            <Text style={styles.redText}>{21312}</Text>
                        </Text>
                        <Text style={styles.contentText}>截止时间：
                            <Text1 text='2018 年 2 月 20 日'/>
                        </Text>
                        <Text style={styles.contentText}>订单状态：
                            {'待付订金'===data&&<Text style={styles.state3}>{data}</Text>}
                            {'待付尾款'===data&&<Text style={styles.state3}>{data}</Text>}
                            {'已付订金'===data&&<Text style={styles.state1}>{data}</Text>}
                            {'已出库'===data&&<Text style={styles.state4}>{data}</Text>}
                            {'订单失败'===data&&<Text style={styles.state2}>{data}</Text>}

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

                {this.renderFooter(data)}
            </ScrollView>
        )
    }

}

