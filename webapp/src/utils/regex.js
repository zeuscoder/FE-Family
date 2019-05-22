/**
 * 正则检验
 */

/**
 * 检验11位手机号码
 * 
 * @param {number} str 
 */
export const checkMobile = mobile => {
    return /^1\d{10}$/.test(mobile);
}

/**
 * 检验邮箱格式
 * 
 * @param {string} email 
 */
export const checkEmail = email => {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
 * 检验身份证
 * 
 * @param {string} idCard 
 */
export const checkIDCard = idCard => {
    return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(idCard);
}

