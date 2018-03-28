import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Tabs } from 'antd-mobile';
import * as CS from '../../constants/color'

import styles from './styles';
const tabs = [
    { title: '所有订单' },
    { title: '待付款' },
    { title: '已付款' },
    { title: '已出库'},
];
const data = [
    { name: '全部', img:require('../../images/aaaa.png'), state: '待付款' },
    { name: '美食', img:require('../../images/aaaa.png'), state: '已付款' },
    { name: '生鲜', img:require('../../images/aaaa.png'), state: '已出货' },
    { name: '超市', img:require('../../images/aaaa.png'), state: '待付款' },
    { name: '休闲', img:require('../../images/aaaa.png'), state: '已付款' },
    { name: '6th Tab', img:require('../../images/aaaa.png'), state: '已付款' },
    { name: '7th Tab', img:require('../../images/aaaa.png'), state: '已付款' },
    { name: '8th Tab', img:require('../../images/aaaa.png'), state: '已付款' },
    { name: '9th Tab', img:require('../../images/aaaa.png'), state: '已付款' },
];
export default class index extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '进货单',
        index: null,
    });
    state = {
        loading: false,
    }
    goToPage = (state) => {
        const { navigate } = this.props.navigation;
        navigate('ImportOrderDetail',{data:state});
    }
    renderContent = tab =>
        (<View style={styles.container}>
            {
                this.state.loading?
                    <ActivityIndicator toast text="正在加载" animating={this.state.loading} />
                    :
                    <FlatList
                        // style={styles.container}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item} onPress={()=>this.goToPage(item.state)} >
                                <View style={styles.itemTop}>
                                    <Text style={styles.topText}>订单编号：213213123{item.name}</Text>
                                    <Text style={styles.topText}>{item.state}</Text>
                                    {'待付款'===item.state?<Text style={styles.state1}>{item.state}</Text>:null}
                                    {'已付款'===item.state?<Text style={styles.state2}>{item.state}</Text>:null}
                                    {'已出货'===item.state?<Text style={styles.state3}>{item.state}</Text>:null}
                                </View>
                                <View style={styles.itemCenter}>
                                    <Image source={item.img} style={styles.image} />
                                    <View style={styles.centerRight}>
                                        <View style={ styles.nameBox }>
                                            <Text1 text='全营业营业' />
                                            <Text1 text={`¥ ${(Number(23123)).toLocaleString('en-US')}`} />
                                        </View>
                                        <Text style={ styles.num }>x 1</Text>
                                    </View>
                                </View>
                                <View style={styles.itemFooter}>
                                    <Text style={styles.priceTip}>合计：
                                        <Text style={styles.price}>¥ {(Number(23123)).toLocaleString('en-US')}</Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>)
                        }
                        // refreshing={refreshing}
                        // onEndReached={this.onEndReached}
                        // onEndReachedThreshold={0.5}
                        // ListFooterComponent={this.ListFooterComponent}
                    />
            }
        </View>);

    render() {
        return (
            <Tabs
                tabs={tabs}
                tabBarActiveTextColor={CS.MAIN_COLOR}
                tabBarInactiveTextColor={CS.FONT_COLOR_SECONDARY}
                tabBarUnderlineStyle={{backgroundColor:CS.MAIN_COLOR}}
                onChange={(index) => this.setState({index})}
            >
                {this.renderContent}
            </Tabs>
        );
    }
}

