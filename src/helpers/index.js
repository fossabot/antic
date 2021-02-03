import axios from "axios";
import dayjs from "dayjs";

/**
 * 判断是否登录过期
 * @return {boolean}
 */
export const expired = () => {
  const expiredAt = localStorage.access_token_expired_at;
  return !(expiredAt && dayjs().isBefore(dayjs.unix(expiredAt)));
};

/**
 * 登录
 * @param {object} token
 * @param {object} user
 */
export const logged = (token, user) => {
  localStorage.token = token.access_token;
  localStorage.access_token_expired_at = dayjs().unix() + token.expires_in;
  localStorage.userId = user.id;
  localStorage.userName = user.name;
  localStorage.userEmail = user.email;
  axios.defaults.headers.common.Authorization = `Bearer ${token.access_token}`;
};

/**
 * 注销
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("access_token_expired_at");
};

/**
 * 获取主机头（Host）和域名（Domain），如 https://www.example.com/ ，不包含路径（Path）
 * @param {string} url
 * @return {string|boolean}
 */
export const getHost = (url) => {
  const reg = /^(http(?:s):\/\/.*?)(\/|$)/;
  const result = reg.exec(url);

  if (result) {
    return result[0];
  }

  return false;
};

/**
 * 温度转换
 * @param {string} temperature
 * @param {function} convert
 * @return {string}
 */
export function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

/**
 * 转摄氏度
 * @param {string} fahrenheit
 * @return {number}
 */
export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * 转华氏度
 * @param {string} celsius
 * @return {number}
 */
export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/**
 * 微博热度
 * @param {string} value
 * @return {number|string}
 */
export function getPriorityAttribute(value) {
  switch (value) {
    case "低": {
      return 1;
    }
    case "中": {
      return 2;
    }
    case "高": {
      return 3;
    }
    default: {
      return value;
    }
  }
}

export function loadAudio(src) {
  return new Promise(function (resolve, reject) {
    const audio = document.createElement("audio");
    const root = document.getElementById("root");
    audio.id = "music";
    audio.src = src;
    audio.autoplay = true;

    audio.onload = () => resolve(audio);
    audio.onerror = () => reject(new Error(`Audio load error for ${src}`));

    root.append(audio);
  });
}
