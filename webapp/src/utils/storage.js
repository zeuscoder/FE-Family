/**
 * 本地缓存工具类
 */

const APP_STORAGE_KEY = 'ZEUS_WEB_APP';

/**
 * 封装 localStorage.setItem
 * 
 * @param {string} key 
 * @param {*} value 
 */
function setItem(key, value) {
    value = value || '';

    window.localStorage.setItem(`${APP_STORAGE_KEY}_${key}`, JSON.stringify(value))
}

/**
 * 封装 localStorage.getItem
 * 
 * @param {string} key 
 */
function getItem(key) {
    const value = window.localStorage.getItem(`${APP_STORAGE_KEY}_${key}`) || '';

    return value
        ? JSON.parse(value)
        : '';
}

export default {
    setItem,
    getItem
}