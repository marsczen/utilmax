import { default as inBrowser } from './inBrowser'

let yes!: boolean

/**
 * 检查是否在微信内置浏览器中。
 * @returns 是否在微信内置浏览器中。
 */
const inWechatWebView = () => {
  if (yes == null) {
    yes =
      inBrowser() &&
      typeof window.navigator === 'object' &&
      /MicroMessenger/i.test(window.navigator.userAgent || '')
  }
  return yes
}

export default inWechatWebView
