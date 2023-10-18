const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/icons/avatar-icon.png'
        },
        mac: {
          icon: './public/icons/avatar-icon.png'
        },
        productName: 'MCU_Tools'
      }
    }
  }
})

