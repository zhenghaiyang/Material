import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from 'react-native';
import { ActivityIndicator, Progress } from 'antd-mobile';
import styles from './styles';


export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '集采',
    });

    state = {
        listData: [],
        loading: true,
        isRefreshing: false,
        isLoadingMore: false,
        page: 1,
    }

    componentDidMount(){
        this.fetchData();
    }

    // 下拉刷新数据
    handleRefresh = () => {
        console.log('handleRefresh')
        if (this.state.isRefreshing) {
            return          // 如果正在刷新则返回，不重复刷新
        }
        this.setState({
            page: 1,
            isRefreshing: true,
            listData: [],
        }, () => {
            this.fetchData();
        });
    }


    //请求更多数据
    handleEndReached = () => {
        console.log('handleEndReached')
        if (1 === this.state.page) { return }
        if (this.state.isLoadingMore) { return }
        // if (cachedResults.itemData.length == cachedResults.total) {
        //     return
        // }
        this.setState({
            isLoadingMore: true,
        }, () => {
            this.fetchData();
        });
    }


    fetchData (){
        const params = {
            exec: 'y_app_goods_list',
            token,
            data: {
                type: '0',
                page: this.state.page.toString(),
                row: '30',
            }
        };
        if ( 1 !== this.state.page ){
            this.setState({ isLoadingMore: true });
        }
        post(
            params,
            (res)=>{
                this.setState({
                    loading: false,
                    isLoadingMore: false,
                    isRefreshing: false,
                    page: this.state.page+1,
                    listData: [...this.state.listData, ...res.list]
                });
            },
            (err)=>{
                this.setState({ isLoadingMore: false, isRefreshing: false, loading: false });
            },
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { listData, loading, isRefreshing, isLoadingMore } = this.state;
        return (
            <View style={styles.container}>
                <ActivityIndicator toast text="正在加载" animating={loading} />
                {
                    listData &&
                    <FlatList
                        data={listData}
                        keyExtractor={item => item.goods_id}
                        refreshing={isRefreshing}
                        onRefresh={this.handleRefresh} // 下拉刷新
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item} onPress={()=>navigate('JiCaiDetail',{goods_id:item.goods_id})} >
                                <Image source={{url:item.thumbnail}} style={styles.itemImg} />
                                <View style={styles.itemRight}>
                                    <Text style={ styles.name}>{item.name}</Text>
                                    <Text style={ styles.priceTip }>单价：<Text style={ styles.price }>¥ {item.price}</Text></Text>
                                    <Text style={ styles.total }>订购目标：{item.boxNum}件</Text>
                                    <View style={styles.progressBox}>
                                        <View style={styles.progressView}>
                                            <Progress percent={50} />
                                        </View>
                                        <Text style={styles.progressText}>{50}%</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>)
                        }
                        onEndReached={this.handleEndReached}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={
                            () => {
                                return isLoadingMore &&
                                    <ActivityIndicator color={CS.MAIN_COLOR} />
                            }
                        }
                    />
                }

            </View>
        )
    }

}

