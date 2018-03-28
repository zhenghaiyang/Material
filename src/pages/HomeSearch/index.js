/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import { Carousel, Progress, SearchBar, InputItem } from 'antd-mobile';
import styles from './styles';

const tabs = [
    { name:'万达广场', title: '全部', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '美食', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '生鲜', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '超市', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '休闲', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '6th Tab', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '7th Tab', img:require('../../images/aaaa.png') },
    { name:'万达广场', title: '8th Tab', img:require('../../images/aaaa.png') },
];

export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '搜索结果',
    });
    state = {
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarBoxStyle} >
                    <View style={styles.navBarStyle} >
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={20}
                            clearButtonMode="while-editing"
                            placeholder="木材"
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
                <FlatList
                    //ListEmptyComponent  列表为空时渲染该组件。
                    // 可以是React Component, 也可以是一个render函数， 或者渲染好的element。
                    data={tabs}
                    numColumns={2}
                    columnWrapperStyle={styles.rowStyle}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}  >
                            <Image source={item.img} style={styles.itemImg} />
                            <View>
                                <Text style={ styles.name} numberOfLines={2}>红木实木门门红木实木门门红木实木门门红木实木门门红木实木门门</Text>
                                <Text style={ styles.priceTip }>进货价/ <Text style={ styles.price }>23343</Text></Text>
                            </View>
                            </TouchableOpacity>)
                    }
                    // refreshing={refreshing}
                    // onEndReached={this.onEndReached}
                    // onEndReachedThreshold={0.5}
                    // ListFooterComponent={this.ListFooterComponent}
                />
            </View>
        )
    }

}

