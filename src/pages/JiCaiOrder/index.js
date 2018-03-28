import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Tabs } from 'antd-mobile';
import styles from './styles';

const tabs = [
    { title: '所有订单' },
    { title: '待付订金' },
    { title: '已付订金' },
    { title: '待付尾款'},
    { title: '已付尾款'},
    { title: '已出库'},
    { title: '失效订单'},
];
const data = [
    { name: '全部', img:require('../../images/aaaa.png'), state: '待付订金' },
    { name: '美食', img:require('../../images/aaaa.png'), state: '待付尾款' },
    { name: '生鲜', img:require('../../images/aaaa.png'), state: '订单失败' },
    { name: '超市', img:require('../../images/aaaa.png'), state: '已付订金' },
    { name: '休闲', img:require('../../images/aaaa.png'), state: '已付订金' },
    { name: '6th Tab', img:require('../../images/aaaa.png'), state: '订单失败' },
    { name: '7th Tab', img:require('../../images/aaaa.png'), state: '已出库' },
];
export default class index extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '集采订单',
    })
    state = {
        loading: false,
    }
    goToPage = (state) => {
        const { navigate } = this.props.navigation;
        switch (state) {
            case '失效订单':
                navigate('JiCaiOrderDetailFail',{data:state});
                break;
            default :
                navigate('JiCaiOrderDetail',{data:state});
                break;
        }
    }
    renderContent = tab =>
        (<View style={styles.container}>
                <ActivityIndicator toast text="正在加载" animating={this.state.loading} />
                <FlatList
                    // style={styles.container}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={()=>this.goToPage(item.state)} >
                            <View style={styles.itemTop}>
                                <Text style={styles.topText}>订单编号：213213123{item.name}</Text>
                                {'待付订金'===item.state&&<Text style={styles.state3}>{item.state}</Text>}
                                {'待付尾款'===item.state&&<Text style={styles.state3}>{item.state}</Text>}
                                {'已付订金'===item.state&&<Text style={styles.state1}>{item.state}</Text>}
                                {'已出库'===item.state&&<Text style={styles.state4}>{item.state}</Text>}
                                {'订单失败'===item.state&&<Text style={styles.state2}>{item.state}</Text>}

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
                                <Text style={styles.priceTip}>合计：<Text style={styles.price}>¥ 324234</Text></Text>
                                <Text style={styles.topText}>截止时间：2324343{item.name}</Text>
                            </View>
                        </TouchableOpacity>)
                    }
                    // refreshing={refreshing}
                    // onEndReached={this.onEndReached}
                    // onEndReachedThreshold={0.5}
                    // ListFooterComponent={this.ListFooterComponent}
                />
        </View>);

    render() {
        return (
            <Tabs
                tabs={tabs}
                tabBarActiveTextColor={CS.MAIN_COLOR}
                tabBarInactiveTextColor={CS.FONT_COLOR_SECONDARY}
                tabBarUnderlineStyle={{backgroundColor:CS.MAIN_COLOR}}
            >
                {this.renderContent}
            </Tabs>
        );
    }
}

