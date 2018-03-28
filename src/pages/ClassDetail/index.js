import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
// import NullPage from '../../components/NullPage';
import * as CS from '../../constants/color';

const rightData = [
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片替卡韦片替卡韦片替卡韦片替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    }];

export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '详细分类',
    });
    state={
        selectOne: 0,
        data: undefined,
        refreshing: false,
        loadingMore: false,
    }
    componentDidMount = () => {
        this.setState({ data: rightData });
    }
    componentWillUnmount() {
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
        const { data, refreshing } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>您所在的位置：分类 > 门窗 > 铝合金窗</Text>
                {data && <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={styles.rowStyle}
                    renderItem={({item}) => (
                        <TouchableOpacity  style={styles.itemBox} onPress={() => navigate('GoodsDetail', {id: item.id})}>
                            <Image source={item.img} style={styles.img}/>
                            <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                            <Text style={styles.priceTip}>进货价格 / <Text style={styles.price}>{item.price}</Text></Text>
                        </TouchableOpacity>)}
                    refreshing={refreshing}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this.ListFooterComponent}
                />
                }
            </View>
        );
    }
}


