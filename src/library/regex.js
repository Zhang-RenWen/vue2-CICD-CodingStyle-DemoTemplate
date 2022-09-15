/**
 * 允許輸入多個0
 * @param {*} number
 */
export const isFloat = number => {
  const re = /^(\d*)(\.\d*)?$/
  return re.test(number)
}

/**
 * 判斷是英文名字
 * @param {*} string
 */
export const isEnglishName = string => {
  const regex = /^[a-zA-Z \-',]+$/
  return regex.test(string)
}

/**
 * 判斷是護照的合法字元(英文與數字)
 */
export const isPassportNumber = string => {
  const regex = /^[A-Z0-9']{5,20}$/
  return regex.test(string)
}

/**
 * 判斷是香港的身分證ID, 最後一碼的檢驗位個別驗證
 * Dynamic: 輸入中的動態驗證
 * Static: 輸入完成的靜態驗證
 * https://computerterminal.blogspot.com/2005/11/hkid-calculation.html?m=1
 */
export const isHongKongIdDynamic = string => {
  const regex = /^[A-Z][A-Z]?[0-9]{0,6}\(?[A-Z0-9]?\)?$/
  return regex.test(string)
}
export const isHongKongIdStatic = string => {
  const regex = /^[A-Z][A-Z]?[0-9]{6}\(?[A-Z0-9]?\)?$/
  return regex.test(string)
}

/**
 * 判斷Email
 * @param {} string
 */
export const isEmail = string => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/
  return regex.test(string)
}

/**
 * checkEmail
 * @param {} string
 */
export const checkEmail = string => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,100})+$/
  return regex.test(string)
}

/**
 * 只能數字
 * @param {} string
 */
export const isNumber = string => {
  const regex = /^[0-9\s]*$/
  return regex.test(string)
}
