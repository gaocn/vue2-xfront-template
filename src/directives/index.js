/**
 * 解决图片加载异常时，设置默认图片
 *
 * 使用方式：<div v-image-error="defaultImg"/>
 * data(){
 *  return { defaultImg: 'https://author.baidu.com/home?from=bjh_article&app_id=1612474650125647' }
 * }
 *
 * @param {*} dom 指令所在的DOM元素
 * @param {*} options 指令表达式
 */
export const imagerror = (dom, options) => {
  // 当图片有地址，但地址没有加载成功时会报错，会触发onerrro事件
  // 注意：当加载的图片不存在时会出现该方法被循环调用!!
  dom.onerror = () => {
    dom.src = options.value
  }
}
