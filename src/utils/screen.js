/**
 * Created by libin on 2017/6/23.
 * 工具  获取屏幕的长和宽
 */
import { Dimensions } from 'react-native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export { W, H };

