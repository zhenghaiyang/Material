import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Toast, ActivityIndicator } from 'antd-mobile';
import styles from './styles';
import MyTipModal from './MyTipModal';


const false0 = require('../../images/gouxuan.png');
const true1 = require('../../images/gouxuan01.png');


export default class AddressManage extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '收货地址',
    });
    state = {
        defaultID: '1',
        showDelete: false,
        listData: [],
        loading: true,
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData (){
        const params = {
            exec: 'y_app_address_list',
            token,
        };
        post(
            params,
            (res)=>{
                this.setState({
                    listData: res.list,
                    loading: false,
                });
            },
            (err)=>{
                this.setState({ loading: false });
            },
        )
    }

    //回调 新增完一个地址之后的回调
    return_newOne(newOne){
        Toast.success('新增成功',1,()=>{
            this.setState({
                listData: this.state.listData.concat(newOne)
            })

        })
    }

    setDefault = () => {

    }

    renderAddress= (item, i) => (
        <View style={styles.item} key={i}>
            <View style={styles.header} >
                <View style={styles.topView}>
                    <Text style={styles.topText}>{item.name}</Text>
                    <Text style={styles.topText}>{item.mobile}</Text>
                </View>
                {/*<Text style={styles.address}>{item.province.join(' ')}{item.address}</Text>*/}
                <Text style={styles.address}>{item.addr}</Text>
            </View>
            <View style={styles.footerView} >
                <TouchableOpacity style={styles.checkBoxView} onPress={() => this.setDefault()}>
                    <Image source={ item.def_addr ? false0 : true1 } />
                    <Text style={styles.defaultText}>  设为默认</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonBox}
                    onPress={() => this.props.navigation.navigate('AddressEdit', { data: item })}
                >
                    <Text style={styles.buttonEdit}>编辑</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBox} onPress={() => this.setState({ showDelete: true })}>
                    <Text style={styles.buttonDel}>删除</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        const { navigate } = this.props.navigation;
        const { showDelete, listData, loading } = this.state;
        return (
            <View style={styles.container} >
                <ActivityIndicator toast text="正在加载" animating={loading} />
                {
                    listData &&
                    <ScrollView style={styles.scrollView}>
                        { listData.map((item, i) => this.renderAddress(item, i)) }

                        <MyTipModal
                            visible={showDelete}
                            title="您确定要删除此地址吗？"
                            cancle={() => this.setState({ showDelete: false })}
                            ok={() => this.setState({ showDelete: false })}
                        />

                    </ScrollView>
                }
                <TouchableOpacity
                    style={styles.btnBox}
                    onPress={() => navigate('AddressAdd',{ return_newOne:(newOne)=>this.return_newOne(newOne) } )}>
                    <Image source={require('../../images/chuangjian.png')}/>
                    <Text style={styles.btn}>  新增收货地址</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

