import CryptoJS from 'crypto-js';
import { InputItem, ActivityIndicator, Toast } from 'antd-mobile';

const Header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
const keyHex = CryptoJS.enc.Utf8.parse('111111111111111111111111');
const iv = CryptoJS.enc.Utf8.parse('01234567');
const mode = CryptoJS.mode.CBC;
const padding = CryptoJS.pad.Pkcs7;
let url = 'https://g.rcmp.cn/appData?data=';  //服务器地址

export default async function post(body, successCallBack, failCallBack) {
    const params = JSON.stringify(body);
    console.log('params', params);
    const encrypted0 = CryptoJS.TripleDES.encrypt(params, keyHex, {
        iv,
        mode,
        padding,
    }).toString();
    const encrypted =encodeURIComponent(encrypted0)
    console.log('encrypted',encrypted)
    try {
        let data = await fetch(
            url+encrypted,
            {
                method: 'POST',
                headers: Header,
                // body:JSON.stringify(params)
            }
        );
        // console.log('data----------->',data);
        // if 网络请求成功 解密返回的数据
        if (data.status === 200){
            const decrypted = CryptoJS.TripleDES.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(data._bodyText)
            }, keyHex, {
                iv,
                mode,
                padding,
            });
            const res = decrypted.toString(CryptoJS.enc.Utf8);
            const resJ = JSON.parse(res);
            // if 网络操作成功 调用成功方法
            if(resJ.s === 1) {
                console.log('successCallBack----------->',resJ);
                return successCallBack(resJ);
            }else {
                console.log('failCallBack---请求成功200 但数据不对-- s=0 -->',resJ);
                Toast.info('请求数据失败',1)
                return failCallBack(resJ);
            }
        }else {
            console.log('failCallBack-----非200错误------>',data);
            Toast.info('请求数据失败',1)
            return failCallBack(data);
        }
    } catch (error){
        console.log('error----------->',error);
        Toast.info('请求数据失败',1)
        failCallBack(error);
    }
}
