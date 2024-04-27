const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env){
    alias({
        '@components' : 'src/components',
        '@containers' : 'src/containers',
        '@routes' : 'src/routes',
        '@data' : 'src/data',
        '@store' : 'src/store',
        '@assets' : 'src/assets'

    })(config)
    return config
}