import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// 注册一个全局组件，在使用时只需要通过<svg-icon icon-class="user" />方式使用即可
Vue.component('svg-icon', SvgIcon)

/**
 * webpack的api，通过执行require.context函数获取一个特定的上下文，主要用来实现自动化导入模块。
 *
 * require.context(directory, useSubdirectories, regExp)
 * - directory表示检索的目录;
 * - useSubdirectories表示是否检索子文件夹;
 * - regExp表示匹配文件的正则表达式;
 *
 * [返回值]
 * - resolve函数，接收一个参数，返回已解析的模块ID，例如：resolve('./404.svg');
 * - keys函数，返回包含所有模块名的数组;
 */

// 读取所有.svg后缀的文件
const req = require.context('./svg', false, /\.svg$/)

/**
 * 将所有SVG文件引入到项目中，相当于:
 * requireContext
          .keys() // 得到了所有导入的模块名数组
				  .map(moduleName => autorequire(moduleName) //webpack 自动导入)
 *
 * forEach()性能比map()要好, map()比for在遍历时要慢几百倍。
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
