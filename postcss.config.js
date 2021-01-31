module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视口宽度
      viewportHeight: 667, //视口高度，也可以不配
      unitPrecision: 5, //指定'px'转换为视窗单位值的小数位数
      viewportUnit: 'vw', //制定需要转换成的视窗单位，建议使用'vw'
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bat-item'],//指定不需要做转换的类class
      minPixelValue: 1, //小于或等于1px不转换为视窗单位
      mediaQuery: false //允许在媒体查询中转换'px'
    }
  }
}
