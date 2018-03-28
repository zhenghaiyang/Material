import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput,
    RefreshControl
} from 'react-native';
import { Carousel, Toast, ActivityIndicator } from 'antd-mobile';
import HomeItem from './HomeItem';
import HomeIcon from './HomeIcon';
import styles from './styles';

let fetchNumber = 0 // 完成网络请求的个数
export default class index extends Component {
    state = {
        searchText: '',
        isRefreshing: false,
        isLoadingMore: false,
        loading: false,
        adData:undefined, // 轮播图数据
        listData:undefined, // 列表数据
        page:1, // 列表数据 页数

    }

    componentDidMount(){
        this.fetchData();
        this.fetchDataList();
    }

    // 跳转到集采详情页面
    goToJiCaiDetail = (goods_id) => {
        const { navigate } = this.props.navigation;
        navigate('JiCaiDetail',{goods_id:goods_id})
    }
    // 跳转到详细分类页面
    goToClass = (id) => {
        const { navigate } = this.props.navigation;
        navigate('ClassDetail')
    }

    fetchData = () => {
        const params = { exec: 'y_app_index_ad', token };
        this.setState({ loading: true });
        post(
            params,
            (res)=>{
                fetchNumber += 1;
                if (fetchNumber ===2 ){
                    this.setState({ adData: res.list, loading: false });
                }else {
                    this.setState({ adData: res.list });
                }
            },
            (err)=>{
                this.setState({ loading: false });
                Toast.info('请求数据失败',1)
            },
        )
    }

    fetchDataList = () => {
        const { page } = this.state;
        const params = {
            exec: 'y_app_goods_list',
            token,
            data: {
                type: '0',
                is_auth: '1',
                page: page.toString(),
                row: '30',
            }
        };
        post(
            params,
            (res)=>{
                fetchNumber += 1;
                if (fetchNumber ===2 ){
                    this.setState({ listData: res.list, page: page+1, loading: false });
                }else {
                    this.setState({ listData: res.list });
                }
            },
            (err)=>{
                this.setState({ loading: false });
                Toast.info('请求数据失败',1)
            },
        )
    }

    _onRefresh() {
        this.fetchData;
        // this.setState({isRefreshing: true});
        // setTimeout(() => {
        //     // prepend 10 items
        //     // const rowData = Array.from(new Array(10))
        //     //     .map((val, i) => ({
        //     //         text: 'Loaded row ' + (+this.state.loaded + i),
        //     //         clicks: 0,
        //     //     }))
        //     //     .concat(this.state.rowData);
        //
        //     this.setState({
        //         isRefreshing: false,
        //     });
        // }, 5000);
    }

    renderHeader = () => {
        const { adData } = this.state;
        console.log(adData)
        return (
            <View>
                <View style={styles.navBarBoxStyle} >
                    <TouchableOpacity  style={styles.navTextBox}>
                        <Text style={styles.navText}>首页</Text>
                    </TouchableOpacity>
                    <View style={styles.navBarStyle} >
                        <Image source={require('../../images/sousuo.png')} />
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={20}
                            clearButtonMode="while-editing"
                            // placeholder="请输入名称进行搜索"
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            onChangeText={(value) => this.setState({searchText:value })}
                            value={this.state.searchText}
                            //returnKeyType='search'
                        />
                    </View>
                    <TouchableOpacity  style={styles.navTextBox} onPress={()=>navigate('HomeSearch')}>
                        <Text style={styles.navText} >搜索</Text>
                    </TouchableOpacity>
                </View>

                {/*轮播图*/}
                {
                    adData &&
                    <Carousel autoplay infinite>
                        {
                            adData.map((item, index) => (
                                <Image source={{uri:item.attachment}} style={styles.img} key={index}/>))
                        }
                    </Carousel>

                }
                {/*4个小图标*/}
                <HomeIcon onPress={(id)=>this.goToClass(id)}/>

                <View style={styles.listTopView}>
                    <Text style={styles.listTopText}>.产品集采</Text>
                    <TouchableOpacity onPress={()=>navigate('JiCai')} style={styles.listTopRightBox}>
                        <Text style={styles.listTopBtn} >更多 </Text>
                        <Image source={require('../../images/gengduo.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render() {
        const { navigate } = this.props.navigation;
        const { listData, loading, isLoadingMore, isRefreshing } = this.state;
        return (
            <View style={styles.container} >

                {
                    loading ?
                        <ActivityIndicator toast text="正在加载" />
                        :
                        <FlatList
                            data={listData}
                            keyExtractor={item => item.goods_id}
                            refreshing={isRefreshing}
                            onRefresh={this.handleRefresh} // 下拉刷新
                            renderItem={({ item }) => (
                                <HomeItem
                                    item={item}
                                    key={index}
                                    onPress={(id)=>this.goToJiCaiDetail(item.goods_id)}
                                />)
                            }
                            onEndReached={this.handleEndReached}
                            onEndReachedThreshold={0.1}
                            ListHeaderComponent={this.renderHeader}
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

