import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import { Button, Toast, ActivityIndicator, List } from 'antd-mobile';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import MyHeader from '../../components/MyHeader';
import TextBtn from '../../components/TextBtn';

const Item = List.Item;
const photoOptions = {
    title:'请选择',
    quality: 0.8,
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
const def_Img = require('../../images/zhizhaoqy.png');

export default class index extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '个人资料设置',
    })

    state = {
        data: { },
        img: undefined,
        loading: true,
    }

    componentDidMount () {
        this.fetchData(); // y_app_member_info
    }

    fetchData (){
        const params = {
            exec: 'y_app_member_info',
            token,
        };
        post(
            params,
            (res)=>{
                this.setState({
                    data: res,
                    loading: false,
                });
            },
            (err)=>{
                this.setState({ loading: false });
            },
        )
    }

    fetchDataEdit (){
        this.setState({ loading: true });
        const params = {
            exec: 'y_app_member_edit',
            token,
            data: this.state.data,
        };
        post(
            params,
            (res)=>{
                this.setState({ loading: false });
                Toast.success('修改成功');
                this.props.navigation.goBack();
            },
            (err)=>{
                this.setState({ loading: false });
            },
        )
    }


    choosePicker = ( )=> {
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    img: response.uri
                });
            }
        });
    }

    // 公用的修改input值的方法
    edit(name, value) {
        const newData = this.state.data;
        newData[name] = value;
        this.setState({ data: newData });
    }

    // 点击保存按钮后 先检查输入内容
    saveCheck = () => {
        const { name, mobile} = this.state;
        if ( name && mobile) {
            Toast.info('请填写完整的信息');
        } else {
            this.fetchDataEdit();
        }
    }


    delImg = () => {
        this.setState({ img: undefined });
    }

    render() {
        const { data, loading, img } = this.state;
        return (
            <ScrollView style={styles.container}>
                <ActivityIndicator toast text="正在加载" animating={loading} />
                <MyHeader text='.基本资料' />
                <Item
                    onClick={() => {}}
                    extra={<TextInput
                        style={styles.inputItem}
                        maxLength={20}
                        underlineColorAndroid="transparent"
                        clearButtonMode="while-editing"
                        value={data.name}
                        onChangeText={value => this.edit('name', value)}
                    />}
                ><Text1 text='商户联系人：' /></Item>

                <Item
                    onClick={() => {}}
                    extra={<TextInput
                        keyboardType='numeric'
                        style={styles.inputItem}
                        maxLength={11}
                        underlineColorAndroid="transparent"
                        clearButtonMode="while-editing"
                        value={data.mobile}
                        onChangeText={value => this.edit('mobile', value)}
                    />}
                ><Text1 text='联系号码：' /></Item>

                <MyHeader text='.营业执照' />

                <View style={styles.imageBox} >
                    <TouchableOpacity onPress={this.choosePicker}>
                        <Image source={img?{uri:img}:def_Img} style={styles.img}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.delImg} style={styles.delImg}>
                        <Image source={require('../../images/shanchu.png')}  />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.okButton} onPress={this.saveCheck}>
                    <TextBtn text='保存个人资料' />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

