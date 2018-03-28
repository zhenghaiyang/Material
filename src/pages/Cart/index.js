import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
// import NullPage from '../../components/NullPage';
import { Checkbox, Stepper, SwipeAction } from 'antd-mobile';
import {Toast} from "antd-mobile/lib/index";

const data = [
    {
        id: '1',
        name: '博定恩博路恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路博路定恩博路定恩定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '博路定恩',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    }];
const false0 = require('../../images/xuanzhe.png');
const true1 = require('../../images/xuanzhe01.png');

export default class index extends Component {
    state={
        selectOne: 0,
        // data: undefined,
        refreshing: false,
        loadingMore: false,
        checkAll: false,
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        const params = { exec: 'y_app_cart_list', token };
        this.setState({ loading: true });
        post(
            params,
            (res)=>{
                this.setState({ adData: res.list, loading: false });
            },
            (err)=>{
                this.setState({ loading: false });
                Toast.info('请求数据失败',1)
            },
        )
    }
    onEndReached = async () => {
        const oldData = this.state.data;
        // 上滑请求更多数据
        if (!this.state.loadingMore) {
            this.setState({ loadingMore: true });
            this.timer = setTimeout(() => {
                this.setState({
                    data: oldData.concat(rightData),
                    loadingMore: false,
                });
            }, 1000);
        }
    };

    ListFooterComponent = () => {
        const foot = <ActivityIndicator color={CS.MAIN_COLOR} />;
        return this.state.loadingMore && foot;
    }
    fetchData = async () => {
        // 请求数据数据
    };
    render() {
        const { refreshing, checkAll } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                    {data && <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <SwipeAction
                                style={{ backgroundColor: 'white' }}
                                autoClose
                                right={[
                                    {
                                        text: '删除',
                                        onPress: () => console.log('delete'),
                                        style: { backgroundColor: '#F4333C', color: 'white' },
                                    },
                                ]}
                                onOpen={() => console.log('global open')}
                                onClose={() => console.log('global close')}
                            >
                            <View style={styles.item}>
                                <TouchableOpacity  onPress={()=>alert('11')}>
                                    <Image source={checkAll?false0:true1} />
                                </TouchableOpacity>
                                <Image source={item.img} style={styles.img}/>
                                <TouchableOpacity style={styles.itemContent}>
                                    <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                                    <Text style={styles.specification} numberOfLines={1}>{item.name}</Text>
                                    <Text style={styles.price}>¥{item.price}</Text>
                                </TouchableOpacity>
                                <View style={{ width: 100}}>
                                    <Stepper
                                        showNumber
                                        max={10}
                                        min={1}
                                        defaultValue={1}
                                    />
                                </View>
                            </View>
                            </SwipeAction>)}
                        // refreshing={refreshing}
                        // onEndReached={this.onEndReached}
                        // onEndReachedThreshold={0.5}
                        // ListFooterComponent={this.ListFooterComponent}
                    />
                    }
                <View style={styles.foot}>
                    <TouchableOpacity  onPress={()=>this.setState({checkAll:!checkAll})}>
                        <Image source={checkAll?false0:true1} />
                    </TouchableOpacity>
                    <Text style={styles.text}>  全选</Text>

                    <View style={styles.footRight}>
                        <Text style={styles.text}>合计：<Text style={styles.price}>¥132.00  </Text></Text>
                        <TouchableOpacity style={styles.btnBox} onPress={() => navigate('CreateOrder')}>
                            <Text style={styles.btnText} >  生成订单</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


