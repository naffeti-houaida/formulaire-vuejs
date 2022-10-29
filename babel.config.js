module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  devServer: {
    host: '0.0.0.0',
    https: false,
    port: 8080,
    public: 'http://0.0.0.0:8080'
  },

}
