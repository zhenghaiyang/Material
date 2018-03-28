import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, TextInput,
    Text, FlatList, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import NullPage from '../../components/NullPage';
import * as CS from '../../constants/color';

const leftData = ['门窗', '管材管件', '吊顶隔断', '灯具照明'];
const rightData = [
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    }];
const rightData2 = [
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    },
    {
        id: '1',
        name: '替卡韦片',
        price: 200.00,
        discount: '9折',
        img: require('../../images/aaaa.png'),
    }];
export default class index extends Component {
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
    searchItem = (item, i) => (
        <TouchableOpacity
            key={i}
            style={this.state.selectOne === i ? styles.item : styles.item2}
            onPress={() => this.fatherOnPress(i)}
        >
            <View style={this.state.selectOne === i ? styles.line : styles.line2} />
            <Text style={this.state.selectOne === i ? styles.text : styles.text2}>&nbsp;&nbsp;{item}</Text>
        </TouchableOpacity>
    )
    fatherOnPress = (i) => {
        if (i === 1) {
            this.setState({
                selectOne: i,
                data: undefined,
            });
        } else if (i === 2) {
            this.setState({
                selectOne: i,
                data: rightData2,
            });
        } else {
            this.setState({
                selectOne: i,
                data: rightData,
            });
        }
    }

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
                <View style={styles.navBarBoxStyle} >
                    <View style={styles.navBarStyle} >
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={20}
                            clearButtonMode="while-editing"
                            placeholder="输入要搜索的产品名、分类"
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            onChangeText={(value) => this.setState({searchText:value })}
                            value={this.state.searchText}
                            //returnKeyType='search'
                        />
                        <TouchableOpacity style={styles.searchImgBox} onPress={()=>alert('搜索')}>
                            <Image source={require('../../images/sousuo01.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <ScrollView
                        style={styles.leftContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        {leftData.map((item, i) => this.searchItem(item, i))}
                    </ScrollView>
                    <View style={styles.rightContainer} >
                        <FlatList
                            data={data}
                            numColumns={2}
                            ListEmptyComponent={ <NullPage/> }
                            columnWrapperStyle={styles.rowStyle}
                            renderItem={({item}) => (
                                <TouchableOpacity  style={styles.itemBox} onPress={() => navigate('ClassDetail', {id: item.id})}>
                                    <Image source={item.img} style={styles.img}/>
                                    <Text style={styles.name}>{item.name}</Text>
                                </TouchableOpacity>)}
                            refreshing={refreshing}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={0.5}
                            ListFooterComponent={this.ListFooterComponent}
                        />
                    </View>
                </View>
            </View>
        );
    }
}


