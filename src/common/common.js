import { Toast } from 'antd-mobile';
/**
 * 提示信息
 */
export function alert(message) {
    Toast.info(message, 2);
}