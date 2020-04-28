module.exports = {
    // options...
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui':'ELEMENT'
        }
    }

}
