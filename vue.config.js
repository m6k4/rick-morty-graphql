module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {},
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/styles/__variables.sass"',
      },
    },
  },
};
