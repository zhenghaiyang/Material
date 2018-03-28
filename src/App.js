import React, { Component } from 'react';
import { View ,AsyncStorage, StatusBar, Platform } from 'react-native';

import Storage from 'react-native-storage'

import Navigator from './Navigator';
import { MAIN_COLOR } from './constants/color';

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，30天（一天 1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

})
global.storage=storage;


class App extends Component {
    render() {
        return <View style={{ flex:1 }}>
            {/*<StatusBar backgroundColor={ MAIN_COLOR } />*/}
          <Navigator />
        </View>
    }
}
export default App;
