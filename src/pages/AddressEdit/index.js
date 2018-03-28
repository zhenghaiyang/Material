import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import { Toast  } from 'antd-mobile';

import Picker from 'react-native-picker';
import area from './area.json';
import styles from './styles';

export default class AddressAddEdit extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '修改地址',
    });
    state = {
        data: this.props.navigation.state.params.data,
    };

    fetchData (){
        const params = {
            exec: 'y_app_addr_edit',
            token,
            data: this.state.data,
        };
        post(
            params,
            (res)=>{
                Toast.success('修改成功');
                this.props.navigation.goBack();
            },
            (err)=>{
                this.setState({ loading: false });
            },
        )
    }

    save = () => {
        const saveData = this.state.data;
        const reg = /^1[345678]\d{9}$/; // 验证规则
        if (!saveData.name) {
            Toast.info('姓名不能为空哦');
        } else if (!saveData.mobile) {
            Toast.info('联系方式不能为空哦');
        } else if (!saveData.province) {
            Toast.info('所在省市不能为空哦 !');
        } else if (!saveData.addr) {
            Toast.info('详细地址不能为空哦');
        } else if (!reg.test(saveData.mobile)) {
            Toast.info('请输入有效的手机号码');
        } else {
            this.fetchData();
        }
    }
    createAreaData = () => {
        const data = [];
        const len = area.length;
        for (let i = 0; i < len; i += 1) {
            const city = [];
            for (let j = 0, cityLen = area[i].city.length; j < cityLen; j += 1) {
                const cityObj = {};
                cityObj[area[i].city[j].name] = area[i].city[j].area;
                city.push(cityObj);
            }

            const dataObj = {};
            dataObj[area[i].name] = city;
            data.push(dataObj);
        }
        return data;
    };
    showAreaPicker = () => {
        const { province, city, region } = this.state.data;
        const oldProvince = [ province, city, region ];
        let newProvince = [];
        if (oldProvince) {
            newProvince = oldProvince;
        } else {
            newProvince = ['北京', '北京', '朝阳区'];
        }
        Picker.init({
            pickerData: this.createAreaData(),
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '请选择',
            pickerConfirmBtnColor: [2, 198, 140, 1],
            pickerCancelBtnColor: [2, 198, 140, 1],
            pickerTitleColor: [2, 198, 140, 1],
            pickerBg: [255, 255, 255, 1],
            selectedValue: newProvince,
            onPickerConfirm: (pickedValue) => {
                const newData = this.state.data;
                newData.province = pickedValue[0];
                newData.city = pickedValue[1];
                newData.region = pickedValue[2];
                this.setState({ data: newData });
            },
            onPickerCancel: () => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: (pickedValue) => {
                Picker.select(pickedValue);
            },
        });
        Picker.show();
    };

    // 公用的修改input值的方法
    edit(name, value) {
        const newData = this.state.data;
        newData[name] = value;
        this.setState({ data: newData });
    }

    render() {
        const { data } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.text}>收款人：</Text>
                    <TextInput
                        style={styles.input}
                        maxLength={50}
                        underlineColorAndroid="transparent"
                        clearButtonMode="while-editing"
                        value={data.name}
                        onChangeText={value => this.edit('name', value)}

                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>手机号码：</Text>
                    <TextInput
                        style={styles.input}
                        maxLength={20}
                        underlineColorAndroid="transparent"
                        clearButtonMode="while-editing"
                        value={data.mobile}
                        onChangeText={value => this.edit('mobile', value)}

                    />
                </View>
                <TouchableOpacity style={styles.item} onPress={this.showAreaPicker}>
                    <Text style={styles.text}>所在省市：</Text>
                    <Text style={styles.text}>{data.province+data.city+data.region}</Text>
                </TouchableOpacity>
                <View style={styles.item2}>
                    <Text style={styles.text2}>详细地址：</Text>
                    <TextInput
                        style={styles.input2}
                        maxLength={100}
                        multiline
                        underlineColorAndroid="transparent"
                        clearButtonMode="while-editing"
                        value={data.addr}
                        onChangeText={value => this.edit('addr', value)}

                    />
                </View>

                <TouchableOpacity style={styles.btnBox} onPress={this.save}>
                    <Image source={require('../../images/chuangjian.png')} />
                    <Text style={styles.btn}>  修改地址</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


