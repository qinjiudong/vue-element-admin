module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-ui': 'ELEMENT'
        }
    }
}
